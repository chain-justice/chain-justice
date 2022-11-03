// Generated by Ignite ignite.com/cli

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { MsgFundCountry } from "./types/justice/tx";
import { MsgBelongContry } from "./types/justice/tx";
import { MsgPrepareResult } from "./types/justice/tx";
import { MsgInvasionResult } from "./types/justice/tx";
import { MsgInvasionStart } from "./types/justice/tx";
import { MsgPrepareStart } from "./types/justice/tx";


export { MsgFundCountry, MsgBelongContry, MsgPrepareResult, MsgInvasionResult, MsgInvasionStart, MsgPrepareStart };

type sendMsgFundCountryParams = {
  value: MsgFundCountry,
  fee?: StdFee,
  memo?: string
};

type sendMsgBelongContryParams = {
  value: MsgBelongContry,
  fee?: StdFee,
  memo?: string
};

type sendMsgPrepareResultParams = {
  value: MsgPrepareResult,
  fee?: StdFee,
  memo?: string
};

type sendMsgInvasionResultParams = {
  value: MsgInvasionResult,
  fee?: StdFee,
  memo?: string
};

type sendMsgInvasionStartParams = {
  value: MsgInvasionStart,
  fee?: StdFee,
  memo?: string
};

type sendMsgPrepareStartParams = {
  value: MsgPrepareStart,
  fee?: StdFee,
  memo?: string
};


type msgFundCountryParams = {
  value: MsgFundCountry,
};

type msgBelongContryParams = {
  value: MsgBelongContry,
};

type msgPrepareResultParams = {
  value: MsgPrepareResult,
};

type msgInvasionResultParams = {
  value: MsgInvasionResult,
};

type msgInvasionStartParams = {
  value: MsgInvasionStart,
};

type msgPrepareStartParams = {
  value: MsgPrepareStart,
};


export const registry = new Registry(msgTypes);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
	prefix: string
	signer?: OfflineSigner
}

export const txClient = ({ signer, prefix, addr }: TxClientOptions = { addr: "http://localhost:26657", prefix: "cosmos" }) => {

  return {
		
		async sendMsgFundCountry({ value, fee, memo }: sendMsgFundCountryParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgFundCountry: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgFundCountry({ value: MsgFundCountry.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgFundCountry: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgBelongContry({ value, fee, memo }: sendMsgBelongContryParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgBelongContry: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgBelongContry({ value: MsgBelongContry.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgBelongContry: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgPrepareResult({ value, fee, memo }: sendMsgPrepareResultParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgPrepareResult: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgPrepareResult({ value: MsgPrepareResult.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgPrepareResult: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgInvasionResult({ value, fee, memo }: sendMsgInvasionResultParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgInvasionResult: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgInvasionResult({ value: MsgInvasionResult.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgInvasionResult: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgInvasionStart({ value, fee, memo }: sendMsgInvasionStartParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgInvasionStart: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgInvasionStart({ value: MsgInvasionStart.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgInvasionStart: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgPrepareStart({ value, fee, memo }: sendMsgPrepareStartParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgPrepareStart: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgPrepareStart({ value: MsgPrepareStart.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgPrepareStart: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		msgFundCountry({ value }: msgFundCountryParams): EncodeObject {
			try {
				return { typeUrl: "/chainjustice.chainjustice.justice.MsgFundCountry", value: MsgFundCountry.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgFundCountry: Could not create message: ' + e.message)
			}
		},
		
		msgBelongContry({ value }: msgBelongContryParams): EncodeObject {
			try {
				return { typeUrl: "/chainjustice.chainjustice.justice.MsgBelongContry", value: MsgBelongContry.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgBelongContry: Could not create message: ' + e.message)
			}
		},
		
		msgPrepareResult({ value }: msgPrepareResultParams): EncodeObject {
			try {
				return { typeUrl: "/chainjustice.chainjustice.justice.MsgPrepareResult", value: MsgPrepareResult.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgPrepareResult: Could not create message: ' + e.message)
			}
		},
		
		msgInvasionResult({ value }: msgInvasionResultParams): EncodeObject {
			try {
				return { typeUrl: "/chainjustice.chainjustice.justice.MsgInvasionResult", value: MsgInvasionResult.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgInvasionResult: Could not create message: ' + e.message)
			}
		},
		
		msgInvasionStart({ value }: msgInvasionStartParams): EncodeObject {
			try {
				return { typeUrl: "/chainjustice.chainjustice.justice.MsgInvasionStart", value: MsgInvasionStart.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgInvasionStart: Could not create message: ' + e.message)
			}
		},
		
		msgPrepareStart({ value }: msgPrepareStartParams): EncodeObject {
			try {
				return { typeUrl: "/chainjustice.chainjustice.justice.MsgPrepareStart", value: MsgPrepareStart.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgPrepareStart: Could not create message: ' + e.message)
			}
		},
		
	}
};

interface QueryClientOptions {
  addr: string
}

export const queryClient = ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

class SDKModule {
	public query: ReturnType<typeof queryClient>;
	public tx: ReturnType<typeof txClient>;
	
	public registry: Array<[string, GeneratedType]>;

	constructor(client: IgniteClient) {		
	
		this.query = queryClient({ addr: client.env.apiURL });
		this.tx = txClient({ signer: client.signer, addr: client.env.rpcURL, prefix: client.env.prefix ?? "cosmos" });
	}
};

const Module = (test: IgniteClient) => {
	return {
		module: {
			ChainjusticeChainjusticeJustice: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default Module;