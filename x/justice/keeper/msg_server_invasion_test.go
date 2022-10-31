package keeper_test

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"github.com/chain-justice/chain-justice/x/justice/types"
)

func TestInvasionMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateInvasion(ctx, &types.MsgCreateInvasion{Creator: creator})
		require.NoError(t, err)
		require.Equal(t, i, int(resp.Id))
	}
}

func TestInvasionMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateInvasion
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateInvasion{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateInvasion{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateInvasion{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateInvasion(ctx, &types.MsgCreateInvasion{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateInvasion(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestInvasionMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteInvasion
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteInvasion{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteInvasion{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteInvasion{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateInvasion(ctx, &types.MsgCreateInvasion{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteInvasion(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
