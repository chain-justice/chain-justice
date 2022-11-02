package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgBelongContry = "belong_contry"

var _ sdk.Msg = &MsgBelongContry{}

func NewMsgBelongContry(creator string, countryAddress string) *MsgBelongContry {
	return &MsgBelongContry{
		Creator:        creator,
		CountryAddress: countryAddress,
	}
}

func (msg *MsgBelongContry) Route() string {
	return RouterKey
}

func (msg *MsgBelongContry) Type() string {
	return TypeMsgBelongContry
}

func (msg *MsgBelongContry) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgBelongContry) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgBelongContry) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
