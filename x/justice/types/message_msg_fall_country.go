package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgMsgFallCountry = "msg_fall_country"

var _ sdk.Msg = &MsgMsgFallCountry{}

func NewMsgMsgFallCountry(creator string) *MsgMsgFallCountry {
	return &MsgMsgFallCountry{
		Creator: creator,
	}
}

func (msg *MsgMsgFallCountry) Route() string {
	return RouterKey
}

func (msg *MsgMsgFallCountry) Type() string {
	return TypeMsgMsgFallCountry
}

func (msg *MsgMsgFallCountry) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgMsgFallCountry) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgMsgFallCountry) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
