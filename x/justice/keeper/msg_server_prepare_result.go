package keeper

import (
	"context"
	"strconv"

	"github.com/chain-justice/chain-justice/x/justice/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) PrepareResult(goCtx context.Context, msg *types.MsgPrepareResult) (*types.MsgPrepareResultResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	prepare, isFound := k.GetPrepare(
		ctx,
		msg.Creator,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "You didn't start preparing")
	}

	requireBlockHeigt, err := strconv.ParseInt(prepare.RequireBlockHeigt, 10, 64)
	if err != nil {
		panic(err)
	}
	if ctx.BlockHeight() < requireBlockHeigt {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Not enough BlockHeigt. Please retry later")
	}

	belonging, isFoundBelonging := k.GetBelonging(
		ctx,
		msg.Creator,
	)
	if !isFoundBelonging {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "You don't belong to any country")
	}

	_, isFoundCountry := k.GetCountry(
		ctx,
		belonging.Country,
	)
	if !isFoundCountry {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "No such country")
	}

	// to do change contry status

	return &types.MsgPrepareResultResponse{}, nil
}
