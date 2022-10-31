package keeper_test

import (
	"context"
	"testing"

	keepertest "github.com/chain-justice/chain-justice/testutil/keeper"
	"github.com/chain-justice/chain-justice/x/chainjustice/keeper"
	"github.com/chain-justice/chain-justice/x/chainjustice/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.ChainjusticeKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
