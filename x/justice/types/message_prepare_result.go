package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgPrepareResult = "prepare_result"

var _ sdk.Msg = &MsgPrepareResult{}

func NewMsgPrepareResult(creator string) *MsgPrepareResult {
	return &MsgPrepareResult{
		Creator: creator,
	}
}

func (msg *MsgPrepareResult) Route() string {
	return RouterKey
}

func (msg *MsgPrepareResult) Type() string {
	return TypeMsgPrepareResult
}

func (msg *MsgPrepareResult) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgPrepareResult) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgPrepareResult) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
