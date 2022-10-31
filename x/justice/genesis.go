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
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the module's exported genesis
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.BelongingList = k.GetAllBelonging(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
