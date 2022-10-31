package types

import (
	"testing"

	"github.com/chain-justice/chain-justice/testutil/sample"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
)

func TestMsgCreateBelonging_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateBelonging
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateBelonging{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateBelonging{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgUpdateBelonging_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateBelonging
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateBelonging{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateBelonging{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgDeleteBelonging_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteBelonging
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteBelonging{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteBelonging{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}
