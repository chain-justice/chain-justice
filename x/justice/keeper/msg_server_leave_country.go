package keeper

import (
	"context"

	"github.com/chain-justice/chain-justice/x/justice/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) LeaveCountry(goCtx context.Context, msg *types.MsgLeaveCountry) (*types.MsgLeaveCountryResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgLeaveCountryResponse{}, nil
}
