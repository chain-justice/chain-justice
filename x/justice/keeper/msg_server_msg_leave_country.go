package keeper

import (
	"context"

	"github.com/chain-justice/chain-justice/x/justice/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) MsgLeaveCountry(goCtx context.Context, msg *types.MsgMsgLeaveCountry) (*types.MsgMsgLeaveCountryResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgMsgLeaveCountryResponse{}, nil
}
