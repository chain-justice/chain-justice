package keeper

import (
	"context"

	"github.com/chain-justice/chain-justice/x/justice/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) PrepareResult(goCtx context.Context, msg *types.MsgPrepareResult) (*types.MsgPrepareResultResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgPrepareResultResponse{}, nil
}
