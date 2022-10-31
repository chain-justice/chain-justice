package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgMsgLeaveCountry = "msg_leave_country"

var _ sdk.Msg = &MsgMsgLeaveCountry{}

func NewMsgMsgLeaveCountry(creator string) *MsgMsgLeaveCountry {
	return &MsgMsgLeaveCountry{
		Creator: creator,
	}
}

func (msg *MsgMsgLeaveCountry) Route() string {
	return RouterKey
}

func (msg *MsgMsgLeaveCountry) Type() string {
	return TypeMsgMsgLeaveCountry
}

func (msg *MsgMsgLeaveCountry) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgMsgLeaveCountry) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgMsgLeaveCountry) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
