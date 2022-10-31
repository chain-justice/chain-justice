package justice

import (
	"math/rand"

	"github.com/chain-justice/chain-justice/testutil/sample"
	justicesimulation "github.com/chain-justice/chain-justice/x/justice/simulation"
	"github.com/chain-justice/chain-justice/x/justice/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = justicesimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreateBelonging = "op_weight_msg_belonging"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateBelonging int = 100

	opWeightMsgUpdateBelonging = "op_weight_msg_belonging"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateBelonging int = 100

	opWeightMsgDeleteBelonging = "op_weight_msg_belonging"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteBelonging int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	justiceGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		BelongingList: []types.Belonging{
			{
				Creator: sample.AccAddress(),
				Index:   "0",
			},
			{
				Creator: sample.AccAddress(),
				Index:   "1",
			},
		},
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&justiceGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgCreateBelonging int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateBelonging, &weightMsgCreateBelonging, nil,
		func(_ *rand.Rand) {
			weightMsgCreateBelonging = defaultWeightMsgCreateBelonging
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateBelonging,
		justicesimulation.SimulateMsgCreateBelonging(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateBelonging int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateBelonging, &weightMsgUpdateBelonging, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateBelonging = defaultWeightMsgUpdateBelonging
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateBelonging,
		justicesimulation.SimulateMsgUpdateBelonging(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteBelonging int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteBelonging, &weightMsgDeleteBelonging, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteBelonging = defaultWeightMsgDeleteBelonging
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteBelonging,
		justicesimulation.SimulateMsgDeleteBelonging(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
