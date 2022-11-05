package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgFundCountry = "fund_country"

var _ sdk.Msg = &MsgFundCountry{}

func NewMsgFundCountry(creator string) *MsgFundCountry {
	return &MsgFundCountry{
		Creator: creator,
	}
}

func (msg *MsgFundCountry) Route() string {
	return RouterKey
}

func (msg *MsgFundCountry) Type() string {
	return TypeMsgFundCountry
}

func (msg *MsgFundCountry) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgFundCountry) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgFundCountry) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
