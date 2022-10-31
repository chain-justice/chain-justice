package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateBelonging = "create_belonging"
	TypeMsgUpdateBelonging = "update_belonging"
	TypeMsgDeleteBelonging = "delete_belonging"
)

var _ sdk.Msg = &MsgCreateBelonging{}

func NewMsgCreateBelonging(
	creator string,
	index string,
	address string,
	country string,

) *MsgCreateBelonging {
	return &MsgCreateBelonging{
		Creator: creator,
		Index:   index,
		Address: address,
		Country: country,
	}
}

func (msg *MsgCreateBelonging) Route() string {
	return RouterKey
}

func (msg *MsgCreateBelonging) Type() string {
	return TypeMsgCreateBelonging
}

func (msg *MsgCreateBelonging) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateBelonging) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateBelonging) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateBelonging{}

func NewMsgUpdateBelonging(
	creator string,
	index string,
	address string,
	country string,

) *MsgUpdateBelonging {
	return &MsgUpdateBelonging{
		Creator: creator,
		Index:   index,
		Address: address,
		Country: country,
	}
}

func (msg *MsgUpdateBelonging) Route() string {
	return RouterKey
}

func (msg *MsgUpdateBelonging) Type() string {
	return TypeMsgUpdateBelonging
}

func (msg *MsgUpdateBelonging) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateBelonging) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateBelonging) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteBelonging{}

func NewMsgDeleteBelonging(
	creator string,
	index string,

) *MsgDeleteBelonging {
	return &MsgDeleteBelonging{
		Creator: creator,
		Index:   index,
	}
}
func (msg *MsgDeleteBelonging) Route() string {
	return RouterKey
}

func (msg *MsgDeleteBelonging) Type() string {
	return TypeMsgDeleteBelonging
}

func (msg *MsgDeleteBelonging) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteBelonging) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteBelonging) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
