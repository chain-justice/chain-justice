package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgInvasionStart = "invasion_start"

var _ sdk.Msg = &MsgInvasionStart{}

func NewMsgInvasionStart(creator string, countryAddress string) *MsgInvasionStart {
	return &MsgInvasionStart{
		Creator:        creator,
		CountryAddress: countryAddress,
	}
}

func (msg *MsgInvasionStart) Route() string {
	return RouterKey
}

func (msg *MsgInvasionStart) Type() string {
	return TypeMsgInvasionStart
}

func (msg *MsgInvasionStart) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgInvasionStart) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgInvasionStart) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
