package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgMsgFundCountry = "msg_fund_country"

var _ sdk.Msg = &MsgMsgFundCountry{}

func NewMsgMsgFundCountry(creator string) *MsgMsgFundCountry {
	return &MsgMsgFundCountry{
		Creator: creator,
	}
}

func (msg *MsgMsgFundCountry) Route() string {
	return RouterKey
}

func (msg *MsgMsgFundCountry) Type() string {
	return TypeMsgMsgFundCountry
}

func (msg *MsgMsgFundCountry) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgMsgFundCountry) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgMsgFundCountry) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
