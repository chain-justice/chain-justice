package keeper

import (
	"context"
	"strconv"

	"cosmossdk.io/math"
	"github.com/chain-justice/chain-justice/x/justice/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) InvasionResult(goCtx context.Context, msg *types.MsgInvasionResult) (*types.MsgInvasionResultResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	invasion, isFound := k.GetInvasion(
		ctx,
		msg.Creator,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "You didn't start invasion")
	}

	requireBlockHeigt, err := strconv.ParseInt(invasion.RequireBlockHeigt, 10, 64)
	if err != nil {
		panic(err)
	}
	if ctx.BlockHeight() < requireBlockHeigt {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Not enough BlockHeigt. Please retry later")
	}

	_, isFoundBelonging := k.GetBelonging(
		ctx,
		msg.Creator,
	)
	if !isFoundBelonging {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "You don't belong to any country")
	}

	from, isFoundFromCountry := k.GetCountry(
		ctx,
		invasion.FromAddress,
	)
	if !isFoundFromCountry {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "No such country")
	}

	to, isFoundDestinyCountry := k.GetCountry(
		ctx,
		invasion.ToAddress,
	)
	if !isFoundDestinyCountry {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "No such country")
	}

	fromAddress, _ := sdk.AccAddressFromBech32(from.Address)
	toAddress, _ := sdk.AccAddressFromBech32(to.Address)
	_ = k.bankKeeper.SpendableCoins(ctx, fromAddress)
	toCoins := k.bankKeeper.SpendableCoins(ctx, toAddress)

	amount, _ := toCoins.SafeQuoInt(math.NewInt(100))
	// amount, err := sdk.ParseCoinsNormalized("100token")
	// ParseCoinsNormalized(1.0 / (1.0 + math.Exp(-fromCoins+toCoins)))
	// to do change contry status
	k.bankKeeper.SendCoins(ctx, toAddress, fromAddress, amount)

	k.RemoveInvasion(
		ctx,
		msg.Creator,
	)
	return &types.MsgInvasionResultResponse{}, nil
}
