package simulation

import (
	"math/rand"

	"github.com/chain-justice/chain-justice/x/justice/keeper"
	"github.com/chain-justice/chain-justice/x/justice/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
)

func SimulateMsgMsgLeaveCountry(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgMsgLeaveCountry{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the MsgLeaveCountry simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "MsgLeaveCountry simulation not implemented"), nil, nil
	}
}
