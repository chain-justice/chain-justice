package keeper

import (
	"context"
	"fmt"

	"github.com/chain-justice/chain-justice/x/justice/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreatePrepare(goCtx context.Context, msg *types.MsgCreatePrepare) (*types.MsgCreatePrepareResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var prepare = types.Prepare{
		Creator:           msg.Creator,
		Address:           msg.Address,
		RequireBlockHeigt: msg.RequireBlockHeigt,
	}

	id := k.AppendPrepare(
		ctx,
		prepare,
	)

	return &types.MsgCreatePrepareResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdatePrepare(goCtx context.Context, msg *types.MsgUpdatePrepare) (*types.MsgUpdatePrepareResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var prepare = types.Prepare{
		Creator:           msg.Creator,
		Id:                msg.Id,
		Address:           msg.Address,
		RequireBlockHeigt: msg.RequireBlockHeigt,
	}

	// Checks that the element exists
	val, found := k.GetPrepare(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetPrepare(ctx, prepare)

	return &types.MsgUpdatePrepareResponse{}, nil
}

func (k msgServer) DeletePrepare(goCtx context.Context, msg *types.MsgDeletePrepare) (*types.MsgDeletePrepareResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetPrepare(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemovePrepare(ctx, msg.Id)

	return &types.MsgDeletePrepareResponse{}, nil
}
