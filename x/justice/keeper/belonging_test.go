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

func createNBelonging(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Belonging {
	items := make([]types.Belonging, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetBelonging(ctx, items[i])
	}
	return items
}

func TestBelongingGet(t *testing.T) {
	keeper, ctx := keepertest.JusticeKeeper(t)
	items := createNBelonging(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetBelonging(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestBelongingRemove(t *testing.T) {
	keeper, ctx := keepertest.JusticeKeeper(t)
	items := createNBelonging(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveBelonging(ctx,
			item.Index,
		)
		_, found := keeper.GetBelonging(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestBelongingGetAll(t *testing.T) {
	keeper, ctx := keepertest.JusticeKeeper(t)
	items := createNBelonging(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllBelonging(ctx)),
	)
}
