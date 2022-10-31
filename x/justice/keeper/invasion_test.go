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

func createNInvasion(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Invasion {
	items := make([]types.Invasion, n)
	for i := range items {
		items[i].Id = keeper.AppendInvasion(ctx, items[i])
	}
	return items
}

func TestInvasionGet(t *testing.T) {
	keeper, ctx := keepertest.JusticeKeeper(t)
	items := createNInvasion(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetInvasion(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestInvasionRemove(t *testing.T) {
	keeper, ctx := keepertest.JusticeKeeper(t)
	items := createNInvasion(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveInvasion(ctx, item.Id)
		_, found := keeper.GetInvasion(ctx, item.Id)
		require.False(t, found)
	}
}

func TestInvasionGetAll(t *testing.T) {
	keeper, ctx := keepertest.JusticeKeeper(t)
	items := createNInvasion(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllInvasion(ctx)),
	)
}

func TestInvasionCount(t *testing.T) {
	keeper, ctx := keepertest.JusticeKeeper(t)
	items := createNInvasion(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetInvasionCount(ctx))
}
