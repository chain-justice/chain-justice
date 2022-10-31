// Generated by Ignite ignite.com/cli

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { MsgDeleteInvasion } from "./types/justice/tx";
import { MsgDeletePrepare } from "./types/justice/tx";
import { MsgCreateBelonging } from "./types/justice/tx";
import { MsgDeleteCountry } from "./types/justice/tx";
import { MsgCreatePrepare } from "./types/justice/tx";
import { MsgCreateInvasion } from "./types/justice/tx";
import { MsgDeleteBelonging } from "./types/justice/tx";
import { MsgCreateCountry } from "./types/justice/tx";
import { MsgUpdateCountry } from "./types/justice/tx";
import { MsgUpdatePrepare } from "./types/justice/tx";
import { MsgUpdateInvasion } from "./types/justice/tx";
import { MsgUpdateBelonging } from "./types/justice/tx";


export { MsgDeleteInvasion, MsgDeletePrepare, MsgCreateBelonging, MsgDeleteCountry, MsgCreatePrepare, MsgCreateInvasion, MsgDeleteBelonging, MsgCreateCountry, MsgUpdateCountry, MsgUpdatePrepare, MsgUpdateInvasion, MsgUpdateBelonging };

type sendMsgDeleteInvasionParams = {
  value: MsgDeleteInvasion,
  fee?: StdFee,
  memo?: string
};

type sendMsgDeletePrepareParams = {
  value: MsgDeletePrepare,
  fee?: StdFee,
  memo?: string
};

type sendMsgCreateBelongingParams = {
  value: MsgCreateBelonging,
  fee?: StdFee,
  memo?: string
};

type sendMsgDeleteCountryParams = {
  value: MsgDeleteCountry,
  fee?: StdFee,
  memo?: string
};

type sendMsgCreatePrepareParams = {
  value: MsgCreatePrepare,
  fee?: StdFee,
  memo?: string
};

type sendMsgCreateInvasionParams = {
  value: MsgCreateInvasion,
  fee?: StdFee,
  memo?: string
};

type sendMsgDeleteBelongingParams = {
  value: MsgDeleteBelonging,
  fee?: StdFee,
  memo?: string
};

type sendMsgCreateCountryParams = {
  value: MsgCreateCountry,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdateCountryParams = {
  value: MsgUpdateCountry,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdatePrepareParams = {
  value: MsgUpdatePrepare,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdateInvasionParams = {
  value: MsgUpdateInvasion,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdateBelongingParams = {
  value: MsgUpdateBelonging,
  fee?: StdFee,
  memo?: string
};


type msgDeleteInvasionParams = {
  value: MsgDeleteInvasion,
};

type msgDeletePrepareParams = {
  value: MsgDeletePrepare,
};

type msgCreateBelongingParams = {
  value: MsgCreateBelonging,
};

type msgDeleteCountryParams = {
  value: MsgDeleteCountry,
};

type msgCreatePrepareParams = {
  value: MsgCreatePrepare,
};

type msgCreateInvasionParams = {
  value: MsgCreateInvasion,
};

type msgDeleteBelongingParams = {
  value: MsgDeleteBelonging,
};

type msgCreateCountryParams = {
  value: MsgCreateCountry,
};

type msgUpdateCountryParams = {
  value: MsgUpdateCountry,
};

type msgUpdatePrepareParams = {
  value: MsgUpdatePrepare,
};

type msgUpdateInvasionParams = {
  value: MsgUpdateInvasion,
};

type msgUpdateBelongingParams = {
  value: MsgUpdateBelonging,
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
		
		async sendMsgDeleteInvasion({ value, fee, memo }: sendMsgDeleteInvasionParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgDeleteInvasion: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgDeleteInvasion({ value: MsgDeleteInvasion.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgDeleteInvasion: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgDeletePrepare({ value, fee, memo }: sendMsgDeletePrepareParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgDeletePrepare: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgDeletePrepare({ value: MsgDeletePrepare.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgDeletePrepare: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgCreateBelonging({ value, fee, memo }: sendMsgCreateBelongingParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgCreateBelonging: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgCreateBelonging({ value: MsgCreateBelonging.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgCreateBelonging: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgDeleteCountry({ value, fee, memo }: sendMsgDeleteCountryParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgDeleteCountry: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgDeleteCountry({ value: MsgDeleteCountry.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgDeleteCountry: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgCreatePrepare({ value, fee, memo }: sendMsgCreatePrepareParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgCreatePrepare: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgCreatePrepare({ value: MsgCreatePrepare.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgCreatePrepare: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgCreateInvasion({ value, fee, memo }: sendMsgCreateInvasionParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgCreateInvasion: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgCreateInvasion({ value: MsgCreateInvasion.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgCreateInvasion: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgDeleteBelonging({ value, fee, memo }: sendMsgDeleteBelongingParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgDeleteBelonging: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgDeleteBelonging({ value: MsgDeleteBelonging.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgDeleteBelonging: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgCreateCountry({ value, fee, memo }: sendMsgCreateCountryParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgCreateCountry: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgCreateCountry({ value: MsgCreateCountry.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgCreateCountry: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUpdateCountry({ value, fee, memo }: sendMsgUpdateCountryParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdateCountry: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgUpdateCountry({ value: MsgUpdateCountry.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdateCountry: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUpdatePrepare({ value, fee, memo }: sendMsgUpdatePrepareParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdatePrepare: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgUpdatePrepare({ value: MsgUpdatePrepare.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdatePrepare: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUpdateInvasion({ value, fee, memo }: sendMsgUpdateInvasionParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdateInvasion: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgUpdateInvasion({ value: MsgUpdateInvasion.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdateInvasion: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUpdateBelonging({ value, fee, memo }: sendMsgUpdateBelongingParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdateBelonging: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgUpdateBelonging({ value: MsgUpdateBelonging.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdateBelonging: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		msgDeleteInvasion({ value }: msgDeleteInvasionParams): EncodeObject {
			try {
				return { typeUrl: "/chainjustice.chainjustice.justice.MsgDeleteInvasion", value: MsgDeleteInvasion.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgDeleteInvasion: Could not create message: ' + e.message)
			}
		},
		
		msgDeletePrepare({ value }: msgDeletePrepareParams): EncodeObject {
			try {
				return { typeUrl: "/chainjustice.chainjustice.justice.MsgDeletePrepare", value: MsgDeletePrepare.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgDeletePrepare: Could not create message: ' + e.message)
			}
		},
		
		msgCreateBelonging({ value }: msgCreateBelongingParams): EncodeObject {
			try {
				return { typeUrl: "/chainjustice.chainjustice.justice.MsgCreateBelonging", value: MsgCreateBelonging.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgCreateBelonging: Could not create message: ' + e.message)
			}
		},
		
		msgDeleteCountry({ value }: msgDeleteCountryParams): EncodeObject {
			try {
				return { typeUrl: "/chainjustice.chainjustice.justice.MsgDeleteCountry", value: MsgDeleteCountry.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgDeleteCountry: Could not create message: ' + e.message)
			}
		},
		
		msgCreatePrepare({ value }: msgCreatePrepareParams): EncodeObject {
			try {
				return { typeUrl: "/chainjustice.chainjustice.justice.MsgCreatePrepare", value: MsgCreatePrepare.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgCreatePrepare: Could not create message: ' + e.message)
			}
		},
		
		msgCreateInvasion({ value }: msgCreateInvasionParams): EncodeObject {
			try {
				return { typeUrl: "/chainjustice.chainjustice.justice.MsgCreateInvasion", value: MsgCreateInvasion.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgCreateInvasion: Could not create message: ' + e.message)
			}
		},
		
		msgDeleteBelonging({ value }: msgDeleteBelongingParams): EncodeObject {
			try {
				return { typeUrl: "/chainjustice.chainjustice.justice.MsgDeleteBelonging", value: MsgDeleteBelonging.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgDeleteBelonging: Could not create message: ' + e.message)
			}
		},
		
		msgCreateCountry({ value }: msgCreateCountryParams): EncodeObject {
			try {
				return { typeUrl: "/chainjustice.chainjustice.justice.MsgCreateCountry", value: MsgCreateCountry.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgCreateCountry: Could not create message: ' + e.message)
			}
		},
		
		msgUpdateCountry({ value }: msgUpdateCountryParams): EncodeObject {
			try {
				return { typeUrl: "/chainjustice.chainjustice.justice.MsgUpdateCountry", value: MsgUpdateCountry.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateCountry: Could not create message: ' + e.message)
			}
		},
		
		msgUpdatePrepare({ value }: msgUpdatePrepareParams): EncodeObject {
			try {
				return { typeUrl: "/chainjustice.chainjustice.justice.MsgUpdatePrepare", value: MsgUpdatePrepare.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdatePrepare: Could not create message: ' + e.message)
			}
		},
		
		msgUpdateInvasion({ value }: msgUpdateInvasionParams): EncodeObject {
			try {
				return { typeUrl: "/chainjustice.chainjustice.justice.MsgUpdateInvasion", value: MsgUpdateInvasion.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateInvasion: Could not create message: ' + e.message)
			}
		},
		
		msgUpdateBelonging({ value }: msgUpdateBelongingParams): EncodeObject {
			try {
				return { typeUrl: "/chainjustice.chainjustice.justice.MsgUpdateBelonging", value: MsgUpdateBelonging.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateBelonging: Could not create message: ' + e.message)
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