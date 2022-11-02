package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgLeaveCountry = "leave_country"

var _ sdk.Msg = &MsgLeaveCountry{}

func NewMsgLeaveCountry(creator string) *MsgLeaveCountry {
	return &MsgLeaveCountry{
		Creator: creator,
	}
}

func (msg *MsgLeaveCountry) Route() string {
	return RouterKey
}

func (msg *MsgLeaveCountry) Type() string {
	return TypeMsgLeaveCountry
}

func (msg *MsgLeaveCountry) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgLeaveCountry) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgLeaveCountry) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
