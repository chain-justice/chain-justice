package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgFallCountry = "fall_country"

var _ sdk.Msg = &MsgFallCountry{}

func NewMsgFallCountry(creator string) *MsgFallCountry {
	return &MsgFallCountry{
		Creator: creator,
	}
}

func (msg *MsgFallCountry) Route() string {
	return RouterKey
}

func (msg *MsgFallCountry) Type() string {
	return TypeMsgFallCountry
}

func (msg *MsgFallCountry) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgFallCountry) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgFallCountry) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
