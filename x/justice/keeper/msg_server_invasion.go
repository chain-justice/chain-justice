package keeper

import (
	"context"
	"fmt"

	"github.com/chain-justice/chain-justice/x/justice/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateInvasion(goCtx context.Context, msg *types.MsgCreateInvasion) (*types.MsgCreateInvasionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var invasion = types.Invasion{
		Creator:           msg.Creator,
		FromAddress:       msg.FromAddress,
		ToAddress:         msg.ToAddress,
		RequireBlockHeigt: msg.RequireBlockHeigt,
	}

	id := k.AppendInvasion(
		ctx,
		invasion,
	)

	return &types.MsgCreateInvasionResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateInvasion(goCtx context.Context, msg *types.MsgUpdateInvasion) (*types.MsgUpdateInvasionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var invasion = types.Invasion{
		Creator:           msg.Creator,
		Id:                msg.Id,
		FromAddress:       msg.FromAddress,
		ToAddress:         msg.ToAddress,
		RequireBlockHeigt: msg.RequireBlockHeigt,
	}

	// Checks that the element exists
	val, found := k.GetInvasion(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetInvasion(ctx, invasion)

	return &types.MsgUpdateInvasionResponse{}, nil
}

func (k msgServer) DeleteInvasion(goCtx context.Context, msg *types.MsgDeleteInvasion) (*types.MsgDeleteInvasionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetInvasion(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveInvasion(ctx, msg.Id)

	return &types.MsgDeleteInvasionResponse{}, nil
}
