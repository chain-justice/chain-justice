import { Client, registry, MissingWalletError } from 'chain-justice-chain-justice-client-ts'

import { Belonging } from "chain-justice-chain-justice-client-ts/chainjustice.chainjustice.justice/types"
import { Country } from "chain-justice-chain-justice-client-ts/chainjustice.chainjustice.justice/types"
import { Invasion } from "chain-justice-chain-justice-client-ts/chainjustice.chainjustice.justice/types"
import { Params } from "chain-justice-chain-justice-client-ts/chainjustice.chainjustice.justice/types"
import { Prepare } from "chain-justice-chain-justice-client-ts/chainjustice.chainjustice.justice/types"


export { Belonging, Country, Invasion, Params, Prepare };

function initClient(vuexGetters) {
	return new Client(vuexGetters['common/env/getEnv'], vuexGetters['common/wallet/signer'])
}

function mergeResults(value, next_values) {
	for (let prop of Object.keys(next_values)) {
		if (Array.isArray(next_values[prop])) {
			value[prop]=[...value[prop], ...next_values[prop]]
		}else{
			value[prop]=next_values[prop]
		}
	}
	return value
}

type Field = {
	name: string;
	type: unknown;
}
function getStructure(template) {
	let structure: {fields: Field[]} = { fields: [] }
	for (const [key, value] of Object.entries(template)) {
		let field = { name: key, type: typeof value }
		structure.fields.push(field)
	}
	return structure
}
const getDefaultState = () => {
	return {
				Params: {},
				Belonging: {},
				BelongingAll: {},
				Country: {},
				CountryAll: {},
				Prepare: {},
				PrepareAll: {},
				Invasion: {},
				InvasionAll: {},
				
				_Structure: {
						Belonging: getStructure(Belonging.fromPartial({})),
						Country: getStructure(Country.fromPartial({})),
						Invasion: getStructure(Invasion.fromPartial({})),
						Params: getStructure(Params.fromPartial({})),
						Prepare: getStructure(Prepare.fromPartial({})),
						
		},
		_Registry: registry,
		_Subscriptions: new Set(),
	}
}

// initial state
const state = getDefaultState()

export default {
	namespaced: true,
	state,
	mutations: {
		RESET_STATE(state) {
			Object.assign(state, getDefaultState())
		},
		QUERY(state, { query, key, value }) {
			state[query][JSON.stringify(key)] = value
		},
		SUBSCRIBE(state, subscription) {
			state._Subscriptions.add(JSON.stringify(subscription))
		},
		UNSUBSCRIBE(state, subscription) {
			state._Subscriptions.delete(JSON.stringify(subscription))
		}
	},
	getters: {
				getParams: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Params[JSON.stringify(params)] ?? {}
		},
				getBelonging: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Belonging[JSON.stringify(params)] ?? {}
		},
				getBelongingAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.BelongingAll[JSON.stringify(params)] ?? {}
		},
				getCountry: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Country[JSON.stringify(params)] ?? {}
		},
				getCountryAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.CountryAll[JSON.stringify(params)] ?? {}
		},
				getPrepare: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Prepare[JSON.stringify(params)] ?? {}
		},
				getPrepareAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.PrepareAll[JSON.stringify(params)] ?? {}
		},
				getInvasion: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Invasion[JSON.stringify(params)] ?? {}
		},
				getInvasionAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.InvasionAll[JSON.stringify(params)] ?? {}
		},
				
		getTypeStructure: (state) => (type) => {
			return state._Structure[type].fields
		},
		getRegistry: (state) => {
			return state._Registry
		}
	},
	actions: {
		init({ dispatch, rootGetters }) {
			console.log('Vuex module: chainjustice.chainjustice.justice initialized!')
			if (rootGetters['common/env/client']) {
				rootGetters['common/env/client'].on('newblock', () => {
					dispatch('StoreUpdate')
				})
			}
		},
		resetState({ commit }) {
			commit('RESET_STATE')
		},
		unsubscribe({ commit }, subscription) {
			commit('UNSUBSCRIBE', subscription)
		},
		async StoreUpdate({ state, dispatch }) {
			state._Subscriptions.forEach(async (subscription) => {
				try {
					const sub=JSON.parse(subscription)
					await dispatch(sub.action, sub.payload)
				}catch(e) {
					throw new Error('Subscriptions: ' + e.message)
				}
			})
		},
		
		
		
		 		
		
		
		async QueryParams({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.ChainjusticeChainjusticeJustice.query.queryParams()).data
				
					
				commit('QUERY', { query: 'Params', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryParams', payload: { options: { all }, params: {...key},query }})
				return getters['getParams']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryParams API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryBelonging({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.ChainjusticeChainjusticeJustice.query.queryBelonging( key.index)).data
				
					
				commit('QUERY', { query: 'Belonging', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryBelonging', payload: { options: { all }, params: {...key},query }})
				return getters['getBelonging']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryBelonging API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryBelongingAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.ChainjusticeChainjusticeJustice.query.queryBelongingAll(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.ChainjusticeChainjusticeJustice.query.queryBelongingAll({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'BelongingAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryBelongingAll', payload: { options: { all }, params: {...key},query }})
				return getters['getBelongingAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryBelongingAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryCountry({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.ChainjusticeChainjusticeJustice.query.queryCountry( key.index)).data
				
					
				commit('QUERY', { query: 'Country', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryCountry', payload: { options: { all }, params: {...key},query }})
				return getters['getCountry']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryCountry API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryCountryAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.ChainjusticeChainjusticeJustice.query.queryCountryAll(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.ChainjusticeChainjusticeJustice.query.queryCountryAll({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'CountryAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryCountryAll', payload: { options: { all }, params: {...key},query }})
				return getters['getCountryAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryCountryAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryPrepare({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.ChainjusticeChainjusticeJustice.query.queryPrepare( key.id)).data
				
					
				commit('QUERY', { query: 'Prepare', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryPrepare', payload: { options: { all }, params: {...key},query }})
				return getters['getPrepare']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryPrepare API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryPrepareAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.ChainjusticeChainjusticeJustice.query.queryPrepareAll(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.ChainjusticeChainjusticeJustice.query.queryPrepareAll({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'PrepareAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryPrepareAll', payload: { options: { all }, params: {...key},query }})
				return getters['getPrepareAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryPrepareAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryInvasion({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.ChainjusticeChainjusticeJustice.query.queryInvasion( key.id)).data
				
					
				commit('QUERY', { query: 'Invasion', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryInvasion', payload: { options: { all }, params: {...key},query }})
				return getters['getInvasion']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryInvasion API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryInvasionAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.ChainjusticeChainjusticeJustice.query.queryInvasionAll(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.ChainjusticeChainjusticeJustice.query.queryInvasionAll({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'InvasionAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryInvasionAll', payload: { options: { all }, params: {...key},query }})
				return getters['getInvasionAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryInvasionAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		async sendMsgDeleteInvasion({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.ChainjusticeChainjusticeJustice.tx.sendMsgDeleteInvasion({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteInvasion:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDeleteInvasion:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDeletePrepare({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.ChainjusticeChainjusticeJustice.tx.sendMsgDeletePrepare({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeletePrepare:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDeletePrepare:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreateBelonging({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.ChainjusticeChainjusticeJustice.tx.sendMsgCreateBelonging({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateBelonging:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateBelonging:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDeleteCountry({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.ChainjusticeChainjusticeJustice.tx.sendMsgDeleteCountry({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteCountry:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDeleteCountry:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreatePrepare({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.ChainjusticeChainjusticeJustice.tx.sendMsgCreatePrepare({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreatePrepare:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreatePrepare:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreateInvasion({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.ChainjusticeChainjusticeJustice.tx.sendMsgCreateInvasion({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateInvasion:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateInvasion:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDeleteBelonging({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.ChainjusticeChainjusticeJustice.tx.sendMsgDeleteBelonging({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteBelonging:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDeleteBelonging:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreateCountry({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.ChainjusticeChainjusticeJustice.tx.sendMsgCreateCountry({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateCountry:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateCountry:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateCountry({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.ChainjusticeChainjusticeJustice.tx.sendMsgUpdateCountry({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateCountry:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateCountry:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdatePrepare({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.ChainjusticeChainjusticeJustice.tx.sendMsgUpdatePrepare({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdatePrepare:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdatePrepare:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateInvasion({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.ChainjusticeChainjusticeJustice.tx.sendMsgUpdateInvasion({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateInvasion:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateInvasion:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateBelonging({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.ChainjusticeChainjusticeJustice.tx.sendMsgUpdateBelonging({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateBelonging:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateBelonging:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		
		async MsgDeleteInvasion({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.ChainjusticeChainjusticeJustice.tx.msgDeleteInvasion({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteInvasion:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDeleteInvasion:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDeletePrepare({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.ChainjusticeChainjusticeJustice.tx.msgDeletePrepare({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeletePrepare:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDeletePrepare:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreateBelonging({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.ChainjusticeChainjusticeJustice.tx.msgCreateBelonging({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateBelonging:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateBelonging:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDeleteCountry({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.ChainjusticeChainjusticeJustice.tx.msgDeleteCountry({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteCountry:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDeleteCountry:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreatePrepare({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.ChainjusticeChainjusticeJustice.tx.msgCreatePrepare({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreatePrepare:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreatePrepare:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreateInvasion({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.ChainjusticeChainjusticeJustice.tx.msgCreateInvasion({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateInvasion:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateInvasion:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDeleteBelonging({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.ChainjusticeChainjusticeJustice.tx.msgDeleteBelonging({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteBelonging:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDeleteBelonging:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreateCountry({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.ChainjusticeChainjusticeJustice.tx.msgCreateCountry({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateCountry:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateCountry:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateCountry({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.ChainjusticeChainjusticeJustice.tx.msgUpdateCountry({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateCountry:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateCountry:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdatePrepare({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.ChainjusticeChainjusticeJustice.tx.msgUpdatePrepare({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdatePrepare:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdatePrepare:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateInvasion({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.ChainjusticeChainjusticeJustice.tx.msgUpdateInvasion({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateInvasion:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateInvasion:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateBelonging({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.ChainjusticeChainjusticeJustice.tx.msgUpdateBelonging({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateBelonging:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateBelonging:Create Could not create message: ' + e.message)
				}
			}
		},
		
	}
}
