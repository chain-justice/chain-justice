package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgInvasionResult = "invasion_result"

var _ sdk.Msg = &MsgInvasionResult{}

func NewMsgInvasionResult(creator string) *MsgInvasionResult {
	return &MsgInvasionResult{
		Creator: creator,
	}
}

func (msg *MsgInvasionResult) Route() string {
	return RouterKey
}

func (msg *MsgInvasionResult) Type() string {
	return TypeMsgInvasionResult
}

func (msg *MsgInvasionResult) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgInvasionResult) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgInvasionResult) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
