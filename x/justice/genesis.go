package justice

import (
	"github.com/chain-justice/chain-justice/x/justice/keeper"
	"github.com/chain-justice/chain-justice/x/justice/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the module's state from a provided genesis state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the belonging
	for _, elem := range genState.BelongingList {
		k.SetBelonging(ctx, elem)
	}
	// Set all the country
	for _, elem := range genState.CountryList {
		k.SetCountry(ctx, elem)
	}
	// Set all the prepare
	for _, elem := range genState.PrepareList {
		k.SetPrepare(ctx, elem)
	}

	// Set prepare count
	k.SetPrepareCount(ctx, genState.PrepareCount)
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the module's exported genesis
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.BelongingList = k.GetAllBelonging(ctx)
	genesis.CountryList = k.GetAllCountry(ctx)
	genesis.PrepareList = k.GetAllPrepare(ctx)
	genesis.PrepareCount = k.GetPrepareCount(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
