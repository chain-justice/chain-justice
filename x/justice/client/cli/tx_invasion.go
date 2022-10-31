package cli

import (
	"strconv"

	"github.com/chain-justice/chain-justice/x/justice/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
)

func CmdCreateInvasion() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-invasion [from-address] [to-address] [require-block-heigt]",
		Short: "Create a new invasion",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argFromAddress := args[0]
			argToAddress := args[1]
			argRequireBlockHeigt := args[2]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateInvasion(clientCtx.GetFromAddress().String(), argFromAddress, argToAddress, argRequireBlockHeigt)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateInvasion() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-invasion [id] [from-address] [to-address] [require-block-heigt]",
		Short: "Update a invasion",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argFromAddress := args[1]

			argToAddress := args[2]

			argRequireBlockHeigt := args[3]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateInvasion(clientCtx.GetFromAddress().String(), id, argFromAddress, argToAddress, argRequireBlockHeigt)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteInvasion() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-invasion [id]",
		Short: "Delete a invasion by id",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteInvasion(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
