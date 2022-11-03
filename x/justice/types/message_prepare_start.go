package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgPrepareStart = "prepare_start"

var _ sdk.Msg = &MsgPrepareStart{}

func NewMsgPrepareStart(creator string) *MsgPrepareStart {
	return &MsgPrepareStart{
		Creator: creator,
	}
}

func (msg *MsgPrepareStart) Route() string {
	return RouterKey
}

func (msg *MsgPrepareStart) Type() string {
	return TypeMsgPrepareStart
}

func (msg *MsgPrepareStart) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgPrepareStart) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgPrepareStart) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
