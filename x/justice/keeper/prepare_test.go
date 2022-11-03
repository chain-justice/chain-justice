package keeper_test

import (
	"strconv"
	"testing"

	keepertest "github.com/chain-justice/chain-justice/testutil/keeper"
	"github.com/chain-justice/chain-justice/testutil/nullify"
	"github.com/chain-justice/chain-justice/x/justice/keeper"
	"github.com/chain-justice/chain-justice/x/justice/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNPrepare(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Prepare {
	items := make([]types.Prepare, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetPrepare(ctx, items[i])
	}
	return items
}

func TestPrepareGet(t *testing.T) {
	keeper, ctx := keepertest.JusticeKeeper(t)
	items := createNPrepare(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetPrepare(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestPrepareRemove(t *testing.T) {
	keeper, ctx := keepertest.JusticeKeeper(t)
	items := createNPrepare(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemovePrepare(ctx,
			item.Index,
		)
		_, found := keeper.GetPrepare(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestPrepareGetAll(t *testing.T) {
	keeper, ctx := keepertest.JusticeKeeper(t)
	items := createNPrepare(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllPrepare(ctx)),
	)
}
