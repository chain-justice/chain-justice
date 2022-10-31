package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreatePrepare = "create_prepare"
	TypeMsgUpdatePrepare = "update_prepare"
	TypeMsgDeletePrepare = "delete_prepare"
)

var _ sdk.Msg = &MsgCreatePrepare{}

func NewMsgCreatePrepare(creator string, address string, requireBlockHeigt string) *MsgCreatePrepare {
	return &MsgCreatePrepare{
		Creator:           creator,
		Address:           address,
		RequireBlockHeigt: requireBlockHeigt,
	}
}

func (msg *MsgCreatePrepare) Route() string {
	return RouterKey
}

func (msg *MsgCreatePrepare) Type() string {
	return TypeMsgCreatePrepare
}

func (msg *MsgCreatePrepare) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreatePrepare) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreatePrepare) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdatePrepare{}

func NewMsgUpdatePrepare(creator string, id uint64, address string, requireBlockHeigt string) *MsgUpdatePrepare {
	return &MsgUpdatePrepare{
		Id:                id,
		Creator:           creator,
		Address:           address,
		RequireBlockHeigt: requireBlockHeigt,
	}
}

func (msg *MsgUpdatePrepare) Route() string {
	return RouterKey
}

func (msg *MsgUpdatePrepare) Type() string {
	return TypeMsgUpdatePrepare
}

func (msg *MsgUpdatePrepare) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdatePrepare) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdatePrepare) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeletePrepare{}

func NewMsgDeletePrepare(creator string, id uint64) *MsgDeletePrepare {
	return &MsgDeletePrepare{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeletePrepare) Route() string {
	return RouterKey
}

func (msg *MsgDeletePrepare) Type() string {
	return TypeMsgDeletePrepare
}

func (msg *MsgDeletePrepare) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeletePrepare) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeletePrepare) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
