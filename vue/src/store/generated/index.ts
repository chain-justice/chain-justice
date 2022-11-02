// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import ChainjusticeChainjusticeChainjustice from './chainjustice.chainjustice.chainjustice'
import ChainjusticeChainjusticeJustice from './chainjustice.chainjustice.justice'


export default { 
  ChainjusticeChainjusticeChainjustice: load(ChainjusticeChainjusticeChainjustice, 'chainjustice.chainjustice.chainjustice'),
  ChainjusticeChainjusticeJustice: load(ChainjusticeChainjusticeJustice, 'chainjustice.chainjustice.justice'),
  
}


function load(mod, fullns) {
    return function init(store) {        
        if (store.hasModule([fullns])) {
            throw new Error('Duplicate module name detected: '+ fullns)
        }else{
            store.registerModule([fullns], mod)
            store.subscribe((mutation) => {
                if (mutation.type == 'common/env/INITIALIZE_WS_COMPLETE') {
                    store.dispatch(fullns+ '/init', null, {
                        root: true
                    })
                }
            })
        }
    }
}