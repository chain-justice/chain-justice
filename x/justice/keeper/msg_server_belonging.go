package keeper

import (
	"context"

	"github.com/chain-justice/chain-justice/x/justice/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateBelonging(goCtx context.Context, msg *types.MsgCreateBelonging) (*types.MsgCreateBelongingResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetBelonging(
		ctx,
		msg.Index,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var belonging = types.Belonging{
		Creator: msg.Creator,
		Index:   msg.Index,
		Address: msg.Address,
		Country: msg.Country,
	}

	k.SetBelonging(
		ctx,
		belonging,
	)
	return &types.MsgCreateBelongingResponse{}, nil
}

func (k msgServer) UpdateBelonging(goCtx context.Context, msg *types.MsgUpdateBelonging) (*types.MsgUpdateBelongingResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetBelonging(
		ctx,
		msg.Index,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var belonging = types.Belonging{
		Creator: msg.Creator,
		Index:   msg.Index,
		Address: msg.Address,
		Country: msg.Country,
	}

	k.SetBelonging(ctx, belonging)

	return &types.MsgUpdateBelongingResponse{}, nil
}

func (k msgServer) DeleteBelonging(goCtx context.Context, msg *types.MsgDeleteBelonging) (*types.MsgDeleteBelongingResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetBelonging(
		ctx,
		msg.Index,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveBelonging(
		ctx,
		msg.Index,
	)

	return &types.MsgDeleteBelongingResponse{}, nil
}
