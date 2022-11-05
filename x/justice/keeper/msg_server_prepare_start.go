package keeper

import (
	"context"
	"strconv"

	"github.com/chain-justice/chain-justice/x/justice/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) PrepareStart(goCtx context.Context, msg *types.MsgPrepareStart) (*types.MsgPrepareStartResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	_, isFound := k.GetBelonging(
		ctx,
		msg.Creator,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "You have to belong to a contry")
	}

	_, isFound = k.GetPrepare(
		ctx,
		msg.Creator,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "You are in another action")
	}

	_, isFound = k.GetInvasion(
		ctx,
		msg.Creator,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "You are in another action")
	}

	var prepare = types.Prepare{
		Index:             msg.Creator,
		Address:           msg.Creator,
		RequireBlockHeigt: strconv.FormatInt(ctx.BlockHeight(), 10),
	}

	k.SetPrepare(ctx, prepare)

	return &types.MsgPrepareStartResponse{}, nil
}
