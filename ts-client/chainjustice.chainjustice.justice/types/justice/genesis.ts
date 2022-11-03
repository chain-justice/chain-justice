/* eslint-disable */
import { Params } from "../justice/params";
import { Belonging } from "../justice/belonging";
import { Country } from "../justice/country";
import { Prepare } from "../justice/prepare";
import { Invasion } from "../justice/invasion";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "chainjustice.chainjustice.justice";

/** GenesisState defines the justice module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  belongingList: Belonging[];
  countryList: Country[];
  prepareList: Prepare[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  invasionList: Invasion[];
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
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
    for (const v of message.invasionList) {
      Invasion.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.belongingList = [];
    message.countryList = [];
    message.prepareList = [];
    message.invasionList = [];
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
          message.invasionList.push(Invasion.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.belongingList = [];
    message.countryList = [];
    message.prepareList = [];
    message.invasionList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.belongingList !== undefined && object.belongingList !== null) {
      for (const e of object.belongingList) {
        message.belongingList.push(Belonging.fromJSON(e));
      }
    }
    if (object.countryList !== undefined && object.countryList !== null) {
      for (const e of object.countryList) {
        message.countryList.push(Country.fromJSON(e));
      }
    }
    if (object.prepareList !== undefined && object.prepareList !== null) {
      for (const e of object.prepareList) {
        message.prepareList.push(Prepare.fromJSON(e));
      }
    }
    if (object.invasionList !== undefined && object.invasionList !== null) {
      for (const e of object.invasionList) {
        message.invasionList.push(Invasion.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.belongingList) {
      obj.belongingList = message.belongingList.map((e) =>
        e ? Belonging.toJSON(e) : undefined
      );
    } else {
      obj.belongingList = [];
    }
    if (message.countryList) {
      obj.countryList = message.countryList.map((e) =>
        e ? Country.toJSON(e) : undefined
      );
    } else {
      obj.countryList = [];
    }
    if (message.prepareList) {
      obj.prepareList = message.prepareList.map((e) =>
        e ? Prepare.toJSON(e) : undefined
      );
    } else {
      obj.prepareList = [];
    }
    if (message.invasionList) {
      obj.invasionList = message.invasionList.map((e) =>
        e ? Invasion.toJSON(e) : undefined
      );
    } else {
      obj.invasionList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.belongingList = [];
    message.countryList = [];
    message.prepareList = [];
    message.invasionList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.belongingList !== undefined && object.belongingList !== null) {
      for (const e of object.belongingList) {
        message.belongingList.push(Belonging.fromPartial(e));
      }
    }
    if (object.countryList !== undefined && object.countryList !== null) {
      for (const e of object.countryList) {
        message.countryList.push(Country.fromPartial(e));
      }
    }
    if (object.prepareList !== undefined && object.prepareList !== null) {
      for (const e of object.prepareList) {
        message.prepareList.push(Prepare.fromPartial(e));
      }
    }
    if (object.invasionList !== undefined && object.invasionList !== null) {
      for (const e of object.invasionList) {
        message.invasionList.push(Invasion.fromPartial(e));
      }
    }
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
