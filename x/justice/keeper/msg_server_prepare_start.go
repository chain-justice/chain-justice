package keeper

import (
	"context"

	"github.com/chain-justice/chain-justice/x/justice/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) PrepareStart(goCtx context.Context, msg *types.MsgPrepareStart) (*types.MsgPrepareStartResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgPrepareStartResponse{}, nil
}
