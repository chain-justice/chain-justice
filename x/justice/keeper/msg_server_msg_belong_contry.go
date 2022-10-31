package keeper

import (
	"context"

	"github.com/chain-justice/chain-justice/x/justice/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) MsgBelongContry(goCtx context.Context, msg *types.MsgMsgBelongContry) (*types.MsgMsgBelongContryResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgMsgBelongContryResponse{}, nil
}
