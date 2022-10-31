package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgCreateBelonging{}, "justice/CreateBelonging", nil)
	cdc.RegisterConcrete(&MsgUpdateBelonging{}, "justice/UpdateBelonging", nil)
	cdc.RegisterConcrete(&MsgDeleteBelonging{}, "justice/DeleteBelonging", nil)
	cdc.RegisterConcrete(&MsgCreateCountry{}, "justice/CreateCountry", nil)
	cdc.RegisterConcrete(&MsgUpdateCountry{}, "justice/UpdateCountry", nil)
	cdc.RegisterConcrete(&MsgDeleteCountry{}, "justice/DeleteCountry", nil)
	cdc.RegisterConcrete(&MsgCreatePrepare{}, "justice/CreatePrepare", nil)
	cdc.RegisterConcrete(&MsgUpdatePrepare{}, "justice/UpdatePrepare", nil)
	cdc.RegisterConcrete(&MsgDeletePrepare{}, "justice/DeletePrepare", nil)
	cdc.RegisterConcrete(&MsgCreateInvasion{}, "justice/CreateInvasion", nil)
	cdc.RegisterConcrete(&MsgUpdateInvasion{}, "justice/UpdateInvasion", nil)
	cdc.RegisterConcrete(&MsgDeleteInvasion{}, "justice/DeleteInvasion", nil)
	cdc.RegisterConcrete(&MsgMsgFundCountry{}, "justice/MsgFundCountry", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateBelonging{},
		&MsgUpdateBelonging{},
		&MsgDeleteBelonging{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateCountry{},
		&MsgUpdateCountry{},
		&MsgDeleteCountry{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreatePrepare{},
		&MsgUpdatePrepare{},
		&MsgDeletePrepare{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateInvasion{},
		&MsgUpdateInvasion{},
		&MsgDeleteInvasion{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgMsgFundCountry{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
