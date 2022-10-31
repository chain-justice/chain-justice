package keeper

import (
	"context"

	"github.com/chain-justice/chain-justice/x/justice/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) MsgFallCountry(goCtx context.Context, msg *types.MsgMsgFallCountry) (*types.MsgMsgFallCountryResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgMsgFallCountryResponse{}, nil
}
