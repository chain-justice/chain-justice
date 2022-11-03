/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "chainjustice.chainjustice.justice";

export interface Invasion {
  id: number;
  fromAddress: string;
  toAddress: string;
  requireBlockHeigt: string;
}

const baseInvasion: object = {
  id: 0,
  fromAddress: "",
  toAddress: "",
  requireBlockHeigt: "",
};

export const Invasion = {
  encode(message: Invasion, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.fromAddress !== "") {
      writer.uint32(18).string(message.fromAddress);
    }
    if (message.toAddress !== "") {
      writer.uint32(26).string(message.toAddress);
    }
    if (message.requireBlockHeigt !== "") {
      writer.uint32(34).string(message.requireBlockHeigt);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Invasion {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInvasion } as Invasion;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.fromAddress = reader.string();
          break;
        case 3:
          message.toAddress = reader.string();
          break;
        case 4:
          message.requireBlockHeigt = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Invasion {
    const message = { ...baseInvasion } as Invasion;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.fromAddress !== undefined && object.fromAddress !== null) {
      message.fromAddress = String(object.fromAddress);
    } else {
      message.fromAddress = "";
    }
    if (object.toAddress !== undefined && object.toAddress !== null) {
      message.toAddress = String(object.toAddress);
    } else {
      message.toAddress = "";
    }
    if (
      object.requireBlockHeigt !== undefined &&
      object.requireBlockHeigt !== null
    ) {
      message.requireBlockHeigt = String(object.requireBlockHeigt);
    } else {
      message.requireBlockHeigt = "";
    }
    return message;
  },

  toJSON(message: Invasion): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.fromAddress !== undefined &&
      (obj.fromAddress = message.fromAddress);
    message.toAddress !== undefined && (obj.toAddress = message.toAddress);
    message.requireBlockHeigt !== undefined &&
      (obj.requireBlockHeigt = message.requireBlockHeigt);
    return obj;
  },

  fromPartial(object: DeepPartial<Invasion>): Invasion {
    const message = { ...baseInvasion } as Invasion;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.fromAddress !== undefined && object.fromAddress !== null) {
      message.fromAddress = object.fromAddress;
    } else {
      message.fromAddress = "";
    }
    if (object.toAddress !== undefined && object.toAddress !== null) {
      message.toAddress = object.toAddress;
    } else {
      message.toAddress = "";
    }
    if (
      object.requireBlockHeigt !== undefined &&
      object.requireBlockHeigt !== null
    ) {
      message.requireBlockHeigt = object.requireBlockHeigt;
    } else {
      message.requireBlockHeigt = "";
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
