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

	opWeightMsgCreateCountry = "op_weight_msg_country"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateCountry int = 100

	opWeightMsgUpdateCountry = "op_weight_msg_country"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateCountry int = 100

	opWeightMsgDeleteCountry = "op_weight_msg_country"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteCountry int = 100

	opWeightMsgCreatePrepare = "op_weight_msg_prepare"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreatePrepare int = 100

	opWeightMsgUpdatePrepare = "op_weight_msg_prepare"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdatePrepare int = 100

	opWeightMsgDeletePrepare = "op_weight_msg_prepare"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeletePrepare int = 100

	opWeightMsgCreateInvasion = "op_weight_msg_invasion"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateInvasion int = 100

	opWeightMsgUpdateInvasion = "op_weight_msg_invasion"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateInvasion int = 100

	opWeightMsgDeleteInvasion = "op_weight_msg_invasion"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteInvasion int = 100

	opWeightMsgMsgFundCountry = "op_weight_msg_msg_fund_country"
	// TODO: Determine the simulation weight value
	defaultWeightMsgMsgFundCountry int = 100

	opWeightMsgMsgFallCountry = "op_weight_msg_msg_fall_country"
	// TODO: Determine the simulation weight value
	defaultWeightMsgMsgFallCountry int = 100

	opWeightMsgMsgBelongContry = "op_weight_msg_msg_belong_contry"
	// TODO: Determine the simulation weight value
	defaultWeightMsgMsgBelongContry int = 100

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
		CountryList: []types.Country{
			{
				Creator: sample.AccAddress(),
				Index:   "0",
			},
			{
				Creator: sample.AccAddress(),
				Index:   "1",
			},
		},
		PrepareList: []types.Prepare{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		PrepareCount: 2,
		InvasionList: []types.Invasion{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		InvasionCount: 2,
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

	var weightMsgCreateCountry int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateCountry, &weightMsgCreateCountry, nil,
		func(_ *rand.Rand) {
			weightMsgCreateCountry = defaultWeightMsgCreateCountry
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateCountry,
		justicesimulation.SimulateMsgCreateCountry(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateCountry int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateCountry, &weightMsgUpdateCountry, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateCountry = defaultWeightMsgUpdateCountry
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateCountry,
		justicesimulation.SimulateMsgUpdateCountry(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteCountry int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteCountry, &weightMsgDeleteCountry, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteCountry = defaultWeightMsgDeleteCountry
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteCountry,
		justicesimulation.SimulateMsgDeleteCountry(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreatePrepare int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreatePrepare, &weightMsgCreatePrepare, nil,
		func(_ *rand.Rand) {
			weightMsgCreatePrepare = defaultWeightMsgCreatePrepare
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreatePrepare,
		justicesimulation.SimulateMsgCreatePrepare(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdatePrepare int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdatePrepare, &weightMsgUpdatePrepare, nil,
		func(_ *rand.Rand) {
			weightMsgUpdatePrepare = defaultWeightMsgUpdatePrepare
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdatePrepare,
		justicesimulation.SimulateMsgUpdatePrepare(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeletePrepare int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeletePrepare, &weightMsgDeletePrepare, nil,
		func(_ *rand.Rand) {
			weightMsgDeletePrepare = defaultWeightMsgDeletePrepare
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeletePrepare,
		justicesimulation.SimulateMsgDeletePrepare(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateInvasion int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateInvasion, &weightMsgCreateInvasion, nil,
		func(_ *rand.Rand) {
			weightMsgCreateInvasion = defaultWeightMsgCreateInvasion
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateInvasion,
		justicesimulation.SimulateMsgCreateInvasion(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateInvasion int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateInvasion, &weightMsgUpdateInvasion, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateInvasion = defaultWeightMsgUpdateInvasion
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateInvasion,
		justicesimulation.SimulateMsgUpdateInvasion(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteInvasion int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteInvasion, &weightMsgDeleteInvasion, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteInvasion = defaultWeightMsgDeleteInvasion
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteInvasion,
		justicesimulation.SimulateMsgDeleteInvasion(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgMsgFundCountry int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgMsgFundCountry, &weightMsgMsgFundCountry, nil,
		func(_ *rand.Rand) {
			weightMsgMsgFundCountry = defaultWeightMsgMsgFundCountry
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgMsgFundCountry,
		justicesimulation.SimulateMsgMsgFundCountry(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgMsgFallCountry int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgMsgFallCountry, &weightMsgMsgFallCountry, nil,
		func(_ *rand.Rand) {
			weightMsgMsgFallCountry = defaultWeightMsgMsgFallCountry
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgMsgFallCountry,
		justicesimulation.SimulateMsgMsgFallCountry(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgMsgBelongContry int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgMsgBelongContry, &weightMsgMsgBelongContry, nil,
		func(_ *rand.Rand) {
			weightMsgMsgBelongContry = defaultWeightMsgMsgBelongContry
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgMsgBelongContry,
		justicesimulation.SimulateMsgMsgBelongContry(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
