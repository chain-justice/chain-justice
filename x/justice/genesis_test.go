package justice_test

import (
	"testing"

	keepertest "github.com/chain-justice/chain-justice/testutil/keeper"
	"github.com/chain-justice/chain-justice/testutil/nullify"
	"github.com/chain-justice/chain-justice/x/justice"
	"github.com/chain-justice/chain-justice/x/justice/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		BelongingList: []types.Belonging{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		CountryList: []types.Country{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		PrepareList: []types.Prepare{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		PrepareCount: 2,
		InvasionList: []types.Invasion{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		InvasionCount: 2,
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.JusticeKeeper(t)
	justice.InitGenesis(ctx, *k, genesisState)
	got := justice.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.BelongingList, got.BelongingList)
	require.ElementsMatch(t, genesisState.CountryList, got.CountryList)
	require.ElementsMatch(t, genesisState.PrepareList, got.PrepareList)
	require.Equal(t, genesisState.PrepareCount, got.PrepareCount)
	require.ElementsMatch(t, genesisState.InvasionList, got.InvasionList)
	require.Equal(t, genesisState.InvasionCount, got.InvasionCount)
	// this line is used by starport scaffolding # genesis/test/assert
}
