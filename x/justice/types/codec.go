package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgFundCountry{}, "justice/FundCountry", nil)
	cdc.RegisterConcrete(&MsgFallCountry{}, "justice/FallCountry", nil)
	cdc.RegisterConcrete(&MsgPrepareStart{}, "justice/PrepareStart", nil)
	cdc.RegisterConcrete(&MsgPrepareResult{}, "justice/PrepareResult", nil)
	cdc.RegisterConcrete(&MsgBelongContry{}, "justice/BelongContry", nil)
	cdc.RegisterConcrete(&MsgLeaveCountry{}, "justice/LeaveCountry", nil)
	cdc.RegisterConcrete(&MsgInvasionResult{}, "justice/InvasionResult", nil)
	cdc.RegisterConcrete(&MsgInvasionStart{}, "justice/InvasionStart", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgFundCountry{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgFallCountry{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgPrepareStart{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgPrepareResult{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgBelongContry{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgLeaveCountry{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgInvasionResult{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgInvasionStart{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
