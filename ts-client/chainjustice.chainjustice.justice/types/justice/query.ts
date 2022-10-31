/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../justice/params";
import { Belonging } from "../justice/belonging";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "chainjustice.chainjustice.justice";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetBelongingRequest {
  index: string;
}

export interface QueryGetBelongingResponse {
  belonging: Belonging | undefined;
}

export interface QueryAllBelongingRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllBelongingResponse {
  belonging: Belonging[];
  pagination: PageResponse | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetBelongingRequest: object = { index: "" };

export const QueryGetBelongingRequest = {
  encode(
    message: QueryGetBelongingRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetBelongingRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetBelongingRequest,
    } as QueryGetBelongingRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBelongingRequest {
    const message = {
      ...baseQueryGetBelongingRequest,
    } as QueryGetBelongingRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetBelongingRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetBelongingRequest>
  ): QueryGetBelongingRequest {
    const message = {
      ...baseQueryGetBelongingRequest,
    } as QueryGetBelongingRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetBelongingResponse: object = {};

export const QueryGetBelongingResponse = {
  encode(
    message: QueryGetBelongingResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.belonging !== undefined) {
      Belonging.encode(message.belonging, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetBelongingResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetBelongingResponse,
    } as QueryGetBelongingResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.belonging = Belonging.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBelongingResponse {
    const message = {
      ...baseQueryGetBelongingResponse,
    } as QueryGetBelongingResponse;
    if (object.belonging !== undefined && object.belonging !== null) {
      message.belonging = Belonging.fromJSON(object.belonging);
    } else {
      message.belonging = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetBelongingResponse): unknown {
    const obj: any = {};
    message.belonging !== undefined &&
      (obj.belonging = message.belonging
        ? Belonging.toJSON(message.belonging)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetBelongingResponse>
  ): QueryGetBelongingResponse {
    const message = {
      ...baseQueryGetBelongingResponse,
    } as QueryGetBelongingResponse;
    if (object.belonging !== undefined && object.belonging !== null) {
      message.belonging = Belonging.fromPartial(object.belonging);
    } else {
      message.belonging = undefined;
    }
    return message;
  },
};

const baseQueryAllBelongingRequest: object = {};

export const QueryAllBelongingRequest = {
  encode(
    message: QueryAllBelongingRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllBelongingRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllBelongingRequest,
    } as QueryAllBelongingRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllBelongingRequest {
    const message = {
      ...baseQueryAllBelongingRequest,
    } as QueryAllBelongingRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllBelongingRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllBelongingRequest>
  ): QueryAllBelongingRequest {
    const message = {
      ...baseQueryAllBelongingRequest,
    } as QueryAllBelongingRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllBelongingResponse: object = {};

export const QueryAllBelongingResponse = {
  encode(
    message: QueryAllBelongingResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.belonging) {
      Belonging.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllBelongingResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllBelongingResponse,
    } as QueryAllBelongingResponse;
    message.belonging = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.belonging.push(Belonging.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllBelongingResponse {
    const message = {
      ...baseQueryAllBelongingResponse,
    } as QueryAllBelongingResponse;
    message.belonging = [];
    if (object.belonging !== undefined && object.belonging !== null) {
      for (const e of object.belonging) {
        message.belonging.push(Belonging.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllBelongingResponse): unknown {
    const obj: any = {};
    if (message.belonging) {
      obj.belonging = message.belonging.map((e) =>
        e ? Belonging.toJSON(e) : undefined
      );
    } else {
      obj.belonging = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllBelongingResponse>
  ): QueryAllBelongingResponse {
    const message = {
      ...baseQueryAllBelongingResponse,
    } as QueryAllBelongingResponse;
    message.belonging = [];
    if (object.belonging !== undefined && object.belonging !== null) {
      for (const e of object.belonging) {
        message.belonging.push(Belonging.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Belonging by index. */
  Belonging(
    request: QueryGetBelongingRequest
  ): Promise<QueryGetBelongingResponse>;
  /** Queries a list of Belonging items. */
  BelongingAll(
    request: QueryAllBelongingRequest
  ): Promise<QueryAllBelongingResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "chainjustice.chainjustice.justice.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  Belonging(
    request: QueryGetBelongingRequest
  ): Promise<QueryGetBelongingResponse> {
    const data = QueryGetBelongingRequest.encode(request).finish();
    const promise = this.rpc.request(
      "chainjustice.chainjustice.justice.Query",
      "Belonging",
      data
    );
    return promise.then((data) =>
      QueryGetBelongingResponse.decode(new Reader(data))
    );
  }

  BelongingAll(
    request: QueryAllBelongingRequest
  ): Promise<QueryAllBelongingResponse> {
    const data = QueryAllBelongingRequest.encode(request).finish();
    const promise = this.rpc.request(
      "chainjustice.chainjustice.justice.Query",
      "BelongingAll",
      data
    );
    return promise.then((data) =>
      QueryAllBelongingResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
