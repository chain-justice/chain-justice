package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateInvasion = "create_invasion"
	TypeMsgUpdateInvasion = "update_invasion"
	TypeMsgDeleteInvasion = "delete_invasion"
)

var _ sdk.Msg = &MsgCreateInvasion{}

func NewMsgCreateInvasion(creator string, fromAddress string, toAddress string, requireBlockHeigt string) *MsgCreateInvasion {
	return &MsgCreateInvasion{
		Creator:           creator,
		FromAddress:       fromAddress,
		ToAddress:         toAddress,
		RequireBlockHeigt: requireBlockHeigt,
	}
}

func (msg *MsgCreateInvasion) Route() string {
	return RouterKey
}

func (msg *MsgCreateInvasion) Type() string {
	return TypeMsgCreateInvasion
}

func (msg *MsgCreateInvasion) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateInvasion) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateInvasion) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateInvasion{}

func NewMsgUpdateInvasion(creator string, id uint64, fromAddress string, toAddress string, requireBlockHeigt string) *MsgUpdateInvasion {
	return &MsgUpdateInvasion{
		Id:                id,
		Creator:           creator,
		FromAddress:       fromAddress,
		ToAddress:         toAddress,
		RequireBlockHeigt: requireBlockHeigt,
	}
}

func (msg *MsgUpdateInvasion) Route() string {
	return RouterKey
}

func (msg *MsgUpdateInvasion) Type() string {
	return TypeMsgUpdateInvasion
}

func (msg *MsgUpdateInvasion) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateInvasion) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateInvasion) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteInvasion{}

func NewMsgDeleteInvasion(creator string, id uint64) *MsgDeleteInvasion {
	return &MsgDeleteInvasion{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteInvasion) Route() string {
	return RouterKey
}

func (msg *MsgDeleteInvasion) Type() string {
	return TypeMsgDeleteInvasion
}

func (msg *MsgDeleteInvasion) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteInvasion) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteInvasion) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
