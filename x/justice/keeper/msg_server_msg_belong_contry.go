package keeper

import (
	"context"

	"github.com/chain-justice/chain-justice/x/justice/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) MsgBelongContry(goCtx context.Context, msg *types.MsgMsgBelongContry) (*types.MsgMsgBelongContryResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

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
		Creator: msg.Creator,
		Index:   msg.Creator,
		Address: msg.Creator,
		Country: msg.CountryAddress,
	}

	k.SetBelonging(ctx, belonging)
	return &types.MsgMsgBelongContryResponse{}, nil
}
