package keeper

import (
	"context"

	"github.com/chain-justice/chain-justice/x/justice/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateCountry(goCtx context.Context, msg *types.MsgCreateCountry) (*types.MsgCreateCountryResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetCountry(
		ctx,
		msg.Index,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var country = types.Country{
		Creator: msg.Creator,
		Index:   msg.Index,
		Address: msg.Address,
		Food:    msg.Food,
	}

	k.SetCountry(
		ctx,
		country,
	)
	return &types.MsgCreateCountryResponse{}, nil
}

func (k msgServer) UpdateCountry(goCtx context.Context, msg *types.MsgUpdateCountry) (*types.MsgUpdateCountryResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetCountry(
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

	var country = types.Country{
		Creator: msg.Creator,
		Index:   msg.Index,
		Address: msg.Address,
		Food:    msg.Food,
	}

	k.SetCountry(ctx, country)

	return &types.MsgUpdateCountryResponse{}, nil
}

func (k msgServer) DeleteCountry(goCtx context.Context, msg *types.MsgDeleteCountry) (*types.MsgDeleteCountryResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetCountry(
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

	k.RemoveCountry(
		ctx,
		msg.Index,
	)

	return &types.MsgDeleteCountryResponse{}, nil
}
