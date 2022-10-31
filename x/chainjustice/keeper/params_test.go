package keeper_test

import (
	"testing"

	testkeeper "github.com/chain-justice/chain-justice/testutil/keeper"
	"github.com/chain-justice/chain-justice/x/chainjustice/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.ChainjusticeKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
