package keeper

import (
	"context"
	
	"github.com/chain-justice/chain-justice/x/justice/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) BelongContry(goCtx context.Context, msg *types.MsgBelongContry) (*types.MsgBelongContryResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_, isFound := k.GetCountry(
		ctx,
		msg.CountryAddress,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "No Such Country")
	}

	_, isFound = k.GetBelonging(
		ctx,
		msg.Creator,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "already belonging")
	}

	var belonging = types.Belonging{
		Index:   msg.Creator,
		Address: msg.Creator,
		Country: msg.CountryAddress,
	}

	k.SetBelonging(ctx, belonging)
	return &types.MsgBelongContryResponse{}, nil
}