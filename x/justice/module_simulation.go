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
	opWeightMsgFundCountry = "op_weight_msg_fund_country"
	// TODO: Determine the simulation weight value
	defaultWeightMsgFundCountry int = 100

	opWeightMsgBelongContry = "op_weight_msg_belong_contry"
	// TODO: Determine the simulation weight value
	defaultWeightMsgBelongContry int = 100

	opWeightMsgPrepareStart = "op_weight_msg_prepare_start"
	// TODO: Determine the simulation weight value
	defaultWeightMsgPrepareStart int = 100

	opWeightMsgPrepareResult = "op_weight_msg_prepare_result"
	// TODO: Determine the simulation weight value
	defaultWeightMsgPrepareResult int = 100

	opWeightMsgInvasionStart = "op_weight_msg_invasion_start"
	// TODO: Determine the simulation weight value
	defaultWeightMsgInvasionStart int = 100

	opWeightMsgInvasionResult = "op_weight_msg_invasion_result"
	// TODO: Determine the simulation weight value
	defaultWeightMsgInvasionResult int = 100

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

	var weightMsgFundCountry int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgFundCountry, &weightMsgFundCountry, nil,
		func(_ *rand.Rand) {
			weightMsgFundCountry = defaultWeightMsgFundCountry
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgFundCountry,
		justicesimulation.SimulateMsgFundCountry(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgBelongContry int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgBelongContry, &weightMsgBelongContry, nil,
		func(_ *rand.Rand) {
			weightMsgBelongContry = defaultWeightMsgBelongContry
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgBelongContry,
		justicesimulation.SimulateMsgBelongContry(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgPrepareStart int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgPrepareStart, &weightMsgPrepareStart, nil,
		func(_ *rand.Rand) {
			weightMsgPrepareStart = defaultWeightMsgPrepareStart
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgPrepareStart,
		justicesimulation.SimulateMsgPrepareStart(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgPrepareResult int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgPrepareResult, &weightMsgPrepareResult, nil,
		func(_ *rand.Rand) {
			weightMsgPrepareResult = defaultWeightMsgPrepareResult
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgPrepareResult,
		justicesimulation.SimulateMsgPrepareResult(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgInvasionStart int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgInvasionStart, &weightMsgInvasionStart, nil,
		func(_ *rand.Rand) {
			weightMsgInvasionStart = defaultWeightMsgInvasionStart
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgInvasionStart,
		justicesimulation.SimulateMsgInvasionStart(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgInvasionResult int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgInvasionResult, &weightMsgInvasionResult, nil,
		func(_ *rand.Rand) {
			weightMsgInvasionResult = defaultWeightMsgInvasionResult
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgInvasionResult,
		justicesimulation.SimulateMsgInvasionResult(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
