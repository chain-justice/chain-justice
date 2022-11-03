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
		
		
		async sendMsgPrepareResult({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.ChainjusticeChainjusticeJustice.tx.sendMsgPrepareResult({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgPrepareResult:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgPrepareResult:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgFundCountry({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.ChainjusticeChainjusticeJustice.tx.sendMsgFundCountry({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgFundCountry:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgFundCountry:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgPrepareStart({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.ChainjusticeChainjusticeJustice.tx.sendMsgPrepareStart({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgPrepareStart:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgPrepareStart:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgInvasionResult({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.ChainjusticeChainjusticeJustice.tx.sendMsgInvasionResult({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgInvasionResult:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgInvasionResult:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgLeaveCountry({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.ChainjusticeChainjusticeJustice.tx.sendMsgLeaveCountry({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgLeaveCountry:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgLeaveCountry:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgBelongContry({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.ChainjusticeChainjusticeJustice.tx.sendMsgBelongContry({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgBelongContry:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgBelongContry:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgFallCountry({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.ChainjusticeChainjusticeJustice.tx.sendMsgFallCountry({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgFallCountry:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgFallCountry:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgInvasionStart({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.ChainjusticeChainjusticeJustice.tx.sendMsgInvasionStart({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgInvasionStart:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgInvasionStart:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		
		async MsgPrepareResult({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.ChainjusticeChainjusticeJustice.tx.msgPrepareResult({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgPrepareResult:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgPrepareResult:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgFundCountry({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.ChainjusticeChainjusticeJustice.tx.msgFundCountry({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgFundCountry:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgFundCountry:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgPrepareStart({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.ChainjusticeChainjusticeJustice.tx.msgPrepareStart({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgPrepareStart:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgPrepareStart:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgInvasionResult({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.ChainjusticeChainjusticeJustice.tx.msgInvasionResult({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgInvasionResult:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgInvasionResult:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgLeaveCountry({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.ChainjusticeChainjusticeJustice.tx.msgLeaveCountry({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgLeaveCountry:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgLeaveCountry:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgBelongContry({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.ChainjusticeChainjusticeJustice.tx.msgBelongContry({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgBelongContry:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgBelongContry:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgFallCountry({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.ChainjusticeChainjusticeJustice.tx.msgFallCountry({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgFallCountry:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgFallCountry:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgInvasionStart({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.ChainjusticeChainjusticeJustice.tx.msgInvasionStart({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgInvasionStart:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgInvasionStart:Create Could not create message: ' + e.message)
				}
			}
		},
		
	}
}
