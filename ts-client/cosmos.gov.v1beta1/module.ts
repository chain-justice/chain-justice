// Generated by Ignite ignite.com/cli

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { MsgSubmitProposal } from "./types/cosmos/gov/v1beta1/tx";
import { MsgDeposit } from "./types/cosmos/gov/v1beta1/tx";
import { MsgVote } from "./types/cosmos/gov/v1beta1/tx";
import { MsgVoteWeighted } from "./types/cosmos/gov/v1beta1/tx";


export { MsgSubmitProposal, MsgDeposit, MsgVote, MsgVoteWeighted };

type sendMsgSubmitProposalParams = {
  value: MsgSubmitProposal,
  fee?: StdFee,
  memo?: string
};

type sendMsgDepositParams = {
  value: MsgDeposit,
  fee?: StdFee,
  memo?: string
};

type sendMsgVoteParams = {
  value: MsgVote,
  fee?: StdFee,
  memo?: string
};

type sendMsgVoteWeightedParams = {
  value: MsgVoteWeighted,
  fee?: StdFee,
  memo?: string
};


type msgSubmitProposalParams = {
  value: MsgSubmitProposal,
};

type msgDepositParams = {
  value: MsgDeposit,
};

type msgVoteParams = {
  value: MsgVote,
};

type msgVoteWeightedParams = {
  value: MsgVoteWeighted,
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
		
		async sendMsgSubmitProposal({ value, fee, memo }: sendMsgSubmitProposalParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgSubmitProposal: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgSubmitProposal({ value: MsgSubmitProposal.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgSubmitProposal: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgDeposit({ value, fee, memo }: sendMsgDepositParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgDeposit: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgDeposit({ value: MsgDeposit.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgDeposit: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgVote({ value, fee, memo }: sendMsgVoteParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgVote: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgVote({ value: MsgVote.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgVote: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgVoteWeighted({ value, fee, memo }: sendMsgVoteWeightedParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgVoteWeighted: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgVoteWeighted({ value: MsgVoteWeighted.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgVoteWeighted: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		msgSubmitProposal({ value }: msgSubmitProposalParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal", value: MsgSubmitProposal.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgSubmitProposal: Could not create message: ' + e.message)
			}
		},
		
		msgDeposit({ value }: msgDepositParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.gov.v1beta1.MsgDeposit", value: MsgDeposit.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgDeposit: Could not create message: ' + e.message)
			}
		},
		
		msgVote({ value }: msgVoteParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.gov.v1beta1.MsgVote", value: MsgVote.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgVote: Could not create message: ' + e.message)
			}
		},
		
		msgVoteWeighted({ value }: msgVoteWeightedParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted", value: MsgVoteWeighted.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgVoteWeighted: Could not create message: ' + e.message)
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
			CosmosGovV1Beta1: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default Module;