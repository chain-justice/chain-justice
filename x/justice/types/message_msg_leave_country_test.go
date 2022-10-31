package types

import (
	"testing"

	"github.com/chain-justice/chain-justice/testutil/sample"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
)

func TestMsgMsgLeaveCountry_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgMsgLeaveCountry
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgMsgLeaveCountry{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgMsgLeaveCountry{
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
