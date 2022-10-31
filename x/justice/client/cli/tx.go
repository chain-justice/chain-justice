package cli

import (
	"fmt"
	"time"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/chain-justice/chain-justice/x/justice/types"
)

var (
	DefaultRelativePacketTimeoutTimestamp = uint64((time.Duration(10) * time.Minute).Nanoseconds())
)

const (
	flagPacketTimeoutTimestamp = "packet-timeout-timestamp"
	listSeparator              = ","
)

// GetTxCmd returns the transaction commands for this module
func GetTxCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("%s transactions subcommands", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdCreateBelonging())
	cmd.AddCommand(CmdUpdateBelonging())
	cmd.AddCommand(CmdDeleteBelonging())
	cmd.AddCommand(CmdCreateCountry())
	cmd.AddCommand(CmdUpdateCountry())
	cmd.AddCommand(CmdDeleteCountry())
	cmd.AddCommand(CmdCreatePrepare())
	cmd.AddCommand(CmdUpdatePrepare())
	cmd.AddCommand(CmdDeletePrepare())
	cmd.AddCommand(CmdCreateInvasion())
	cmd.AddCommand(CmdUpdateInvasion())
	cmd.AddCommand(CmdDeleteInvasion())
	cmd.AddCommand(CmdMsgFundCountry())
	cmd.AddCommand(CmdMsgFallCountry())
	// this line is used by starport scaffolding # 1

	return cmd
}
