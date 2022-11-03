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

func createNCountry(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Country {
	items := make([]types.Country, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetCountry(ctx, items[i])
	}
	return items
}

func TestCountryGet(t *testing.T) {
	keeper, ctx := keepertest.JusticeKeeper(t)
	items := createNCountry(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetCountry(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestCountryRemove(t *testing.T) {
	keeper, ctx := keepertest.JusticeKeeper(t)
	items := createNCountry(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveCountry(ctx,
			item.Index,
		)
		_, found := keeper.GetCountry(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestCountryGetAll(t *testing.T) {
	keeper, ctx := keepertest.JusticeKeeper(t)
	items := createNCountry(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllCountry(ctx)),
	)
}
