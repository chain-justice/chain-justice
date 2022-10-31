package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateCountry = "create_country"
	TypeMsgUpdateCountry = "update_country"
	TypeMsgDeleteCountry = "delete_country"
)

var _ sdk.Msg = &MsgCreateCountry{}

func NewMsgCreateCountry(
	creator string,
	index string,
	address string,
	food string,

) *MsgCreateCountry {
	return &MsgCreateCountry{
		Creator: creator,
		Index:   index,
		Address: address,
		Food:    food,
	}
}

func (msg *MsgCreateCountry) Route() string {
	return RouterKey
}

func (msg *MsgCreateCountry) Type() string {
	return TypeMsgCreateCountry
}

func (msg *MsgCreateCountry) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateCountry) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateCountry) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateCountry{}

func NewMsgUpdateCountry(
	creator string,
	index string,
	address string,
	food string,

) *MsgUpdateCountry {
	return &MsgUpdateCountry{
		Creator: creator,
		Index:   index,
		Address: address,
		Food:    food,
	}
}

func (msg *MsgUpdateCountry) Route() string {
	return RouterKey
}

func (msg *MsgUpdateCountry) Type() string {
	return TypeMsgUpdateCountry
}

func (msg *MsgUpdateCountry) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateCountry) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateCountry) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteCountry{}

func NewMsgDeleteCountry(
	creator string,
	index string,

) *MsgDeleteCountry {
	return &MsgDeleteCountry{
		Creator: creator,
		Index:   index,
	}
}
func (msg *MsgDeleteCountry) Route() string {
	return RouterKey
}

func (msg *MsgDeleteCountry) Type() string {
	return TypeMsgDeleteCountry
}

func (msg *MsgDeleteCountry) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteCountry) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteCountry) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
