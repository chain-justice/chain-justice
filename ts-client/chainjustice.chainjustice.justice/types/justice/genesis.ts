/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Belonging } from "./belonging";
import { Country } from "./country";
import { Invasion } from "./invasion";
import { Params } from "./params";
import { Prepare } from "./prepare";

export const protobufPackage = "chainjustice.chainjustice.justice";

/** GenesisState defines the justice module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  belongingList: Belonging[];
  countryList: Country[];
  prepareList: Prepare[];
  prepareCount: number;
  invasionList: Invasion[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  invasionCount: number;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    belongingList: [],
    countryList: [],
    prepareList: [],
    prepareCount: 0,
    invasionList: [],
    invasionCount: 0,
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.belongingList) {
      Belonging.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.countryList) {
      Country.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.prepareList) {
      Prepare.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.prepareCount !== 0) {
      writer.uint32(40).uint64(message.prepareCount);
    }
    for (const v of message.invasionList) {
      Invasion.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.invasionCount !== 0) {
      writer.uint32(56).uint64(message.invasionCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.belongingList.push(Belonging.decode(reader, reader.uint32()));
          break;
        case 3:
          message.countryList.push(Country.decode(reader, reader.uint32()));
          break;
        case 4:
          message.prepareList.push(Prepare.decode(reader, reader.uint32()));
          break;
        case 5:
          message.prepareCount = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.invasionList.push(Invasion.decode(reader, reader.uint32()));
          break;
        case 7:
          message.invasionCount = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      belongingList: Array.isArray(object?.belongingList)
        ? object.belongingList.map((e: any) => Belonging.fromJSON(e))
        : [],
      countryList: Array.isArray(object?.countryList) ? object.countryList.map((e: any) => Country.fromJSON(e)) : [],
      prepareList: Array.isArray(object?.prepareList) ? object.prepareList.map((e: any) => Prepare.fromJSON(e)) : [],
      prepareCount: isSet(object.prepareCount) ? Number(object.prepareCount) : 0,
      invasionList: Array.isArray(object?.invasionList)
        ? object.invasionList.map((e: any) => Invasion.fromJSON(e))
        : [],
      invasionCount: isSet(object.invasionCount) ? Number(object.invasionCount) : 0,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.belongingList) {
      obj.belongingList = message.belongingList.map((e) => e ? Belonging.toJSON(e) : undefined);
    } else {
      obj.belongingList = [];
    }
    if (message.countryList) {
      obj.countryList = message.countryList.map((e) => e ? Country.toJSON(e) : undefined);
    } else {
      obj.countryList = [];
    }
    if (message.prepareList) {
      obj.prepareList = message.prepareList.map((e) => e ? Prepare.toJSON(e) : undefined);
    } else {
      obj.prepareList = [];
    }
    message.prepareCount !== undefined && (obj.prepareCount = Math.round(message.prepareCount));
    if (message.invasionList) {
      obj.invasionList = message.invasionList.map((e) => e ? Invasion.toJSON(e) : undefined);
    } else {
      obj.invasionList = [];
    }
    message.invasionCount !== undefined && (obj.invasionCount = Math.round(message.invasionCount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.belongingList = object.belongingList?.map((e) => Belonging.fromPartial(e)) || [];
    message.countryList = object.countryList?.map((e) => Country.fromPartial(e)) || [];
    message.prepareList = object.prepareList?.map((e) => Prepare.fromPartial(e)) || [];
    message.prepareCount = object.prepareCount ?? 0;
    message.invasionList = object.invasionList?.map((e) => Invasion.fromPartial(e)) || [];
    message.invasionCount = object.invasionCount ?? 0;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
