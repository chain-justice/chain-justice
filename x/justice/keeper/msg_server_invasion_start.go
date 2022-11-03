package keeper

import (
	"context"
	"strconv"

	"github.com/chain-justice/chain-justice/x/justice/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) InvasionStart(goCtx context.Context, msg *types.MsgInvasionStart) (*types.MsgInvasionStartResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	
	_, isFound := k.GetBelonging(
		ctx,
		msg.Creator,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "You have to belong to a contry")
	}

	_, isFound = k.GetCountry(
		ctx,
		msg.CountryAddress,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "No Such Country")
	}

	var invasion = types.Invasion{
		Index:   msg.Creator,
		FromAddress: msg.Creator,
		ToAddress: msg.CountryAddress,
		RequireBlockHeigt: strconv.FormatInt(ctx.BlockHeight(),10),
	}
	k.SetInvasion(ctx, invasion)
	return &types.MsgInvasionStartResponse{}, nil
}
