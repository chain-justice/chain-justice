/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "chainjustice.chainjustice.justice";

export interface Invasion {
  index: string;
  fromAddress: string;
  toAddress: string;
  requireBlockHeigt: string;
}

const baseInvasion: object = {
  index: "",
  fromAddress: "",
  toAddress: "",
  requireBlockHeigt: "",
};

export const Invasion = {
  encode(message: Invasion, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
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
          message.index = reader.string();
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
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
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
    message.index !== undefined && (obj.index = message.index);
    message.fromAddress !== undefined &&
      (obj.fromAddress = message.fromAddress);
    message.toAddress !== undefined && (obj.toAddress = message.toAddress);
    message.requireBlockHeigt !== undefined &&
      (obj.requireBlockHeigt = message.requireBlockHeigt);
    return obj;
  },

  fromPartial(object: DeepPartial<Invasion>): Invasion {
    const message = { ...baseInvasion } as Invasion;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
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
