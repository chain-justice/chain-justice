package cli

import (
	"fmt"
	// "strings"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	// sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/chain-justice/chain-justice/x/justice/types"
)

// GetQueryCmd returns the cli query commands for this module
func GetQueryCmd(queryRoute string) *cobra.Command {
	// Group justice queries under a subcommand
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("Querying commands for the %s module", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdQueryParams())
	cmd.AddCommand(CmdListBelonging())
	cmd.AddCommand(CmdShowBelonging())
	cmd.AddCommand(CmdListCountry())
	cmd.AddCommand(CmdShowCountry())
	cmd.AddCommand(CmdListPrepare())
	cmd.AddCommand(CmdShowPrepare())
	cmd.AddCommand(CmdListInvasion())
	cmd.AddCommand(CmdShowInvasion())
	// this line is used by starport scaffolding # 1

	return cmd
}
