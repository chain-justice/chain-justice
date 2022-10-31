package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgMsgBelongContry = "msg_belong_contry"

var _ sdk.Msg = &MsgMsgBelongContry{}

func NewMsgMsgBelongContry(creator string, countryAddress string) *MsgMsgBelongContry {
	return &MsgMsgBelongContry{
		Creator:        creator,
		CountryAddress: countryAddress,
	}
}

func (msg *MsgMsgBelongContry) Route() string {
	return RouterKey
}

func (msg *MsgMsgBelongContry) Type() string {
	return TypeMsgMsgBelongContry
}

func (msg *MsgMsgBelongContry) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgMsgBelongContry) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgMsgBelongContry) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
