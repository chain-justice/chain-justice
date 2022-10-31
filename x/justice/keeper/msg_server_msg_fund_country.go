package keeper

import (
	"context"

	"github.com/chain-justice/chain-justice/x/justice/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) MsgFundCountry(goCtx context.Context, msg *types.MsgMsgFundCountry) (*types.MsgMsgFundCountryResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)


	_, isFound := k.GetCountry(
		ctx,
		msg.Creator,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "country is already funded")
	}

	var country = types.Country{
		Creator: msg.Creator,
		Index:   msg.Creator,
		Address: msg.Creator,
		Food:    "0",
	}

	_, isFound = k.GetBelonging(
		ctx,
		msg.Creator,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "you already belong to some country")
	}

	var belonging = types.Belonging{
		Creator: msg.Creator,
		Index:   msg.Creator,
		Address: msg.Creator,
		Country: msg.Creator,
	}

	k.SetBelonging(
		ctx,
		belonging,
	)

	k.SetCountry(
		ctx,
		country,
	)
	return &types.MsgMsgFundCountryResponse{}, nil
}
