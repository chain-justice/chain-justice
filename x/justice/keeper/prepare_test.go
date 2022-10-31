package keeper_test

import (
	"testing"

	keepertest "github.com/chain-justice/chain-justice/testutil/keeper"
	"github.com/chain-justice/chain-justice/testutil/nullify"
	"github.com/chain-justice/chain-justice/x/justice/keeper"
	"github.com/chain-justice/chain-justice/x/justice/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

func createNPrepare(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Prepare {
	items := make([]types.Prepare, n)
	for i := range items {
		items[i].Id = keeper.AppendPrepare(ctx, items[i])
	}
	return items
}

func TestPrepareGet(t *testing.T) {
	keeper, ctx := keepertest.JusticeKeeper(t)
	items := createNPrepare(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetPrepare(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestPrepareRemove(t *testing.T) {
	keeper, ctx := keepertest.JusticeKeeper(t)
	items := createNPrepare(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemovePrepare(ctx, item.Id)
		_, found := keeper.GetPrepare(ctx, item.Id)
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

func TestPrepareCount(t *testing.T) {
	keeper, ctx := keepertest.JusticeKeeper(t)
	items := createNPrepare(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetPrepareCount(ctx))
}
