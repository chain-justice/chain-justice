/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "chainjustice.chainjustice.justice";

export interface Prepare {
  index: string;
  address: string;
  requireBlockHeigt: string;
}

const basePrepare: object = { index: "", address: "", requireBlockHeigt: "" };

export const Prepare = {
  encode(message: Prepare, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.requireBlockHeigt !== "") {
      writer.uint32(26).string(message.requireBlockHeigt);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Prepare {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePrepare } as Prepare;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.requireBlockHeigt = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Prepare {
    const message = { ...basePrepare } as Prepare;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
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

  toJSON(message: Prepare): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.address !== undefined && (obj.address = message.address);
    message.requireBlockHeigt !== undefined &&
      (obj.requireBlockHeigt = message.requireBlockHeigt);
    return obj;
  },

  fromPartial(object: DeepPartial<Prepare>): Prepare {
    const message = { ...basePrepare } as Prepare;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
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
