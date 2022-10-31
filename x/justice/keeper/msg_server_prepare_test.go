package keeper_test

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"github.com/chain-justice/chain-justice/x/justice/types"
)

func TestPrepareMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreatePrepare(ctx, &types.MsgCreatePrepare{Creator: creator})
		require.NoError(t, err)
		require.Equal(t, i, int(resp.Id))
	}
}

func TestPrepareMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdatePrepare
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdatePrepare{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdatePrepare{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdatePrepare{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreatePrepare(ctx, &types.MsgCreatePrepare{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdatePrepare(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestPrepareMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeletePrepare
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeletePrepare{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeletePrepare{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeletePrepare{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreatePrepare(ctx, &types.MsgCreatePrepare{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeletePrepare(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
