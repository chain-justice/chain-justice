package keeper_test

import (
	"testing"

	testkeeper "github.com/chain-justice/chain-justice/testutil/keeper"
	"github.com/chain-justice/chain-justice/x/player/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.PlayerKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
