// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import ChainjusticeChainjusticeChainjustice from './chainjustice.chainjustice.chainjustice'
import ChainjusticeChainjusticePlayer from './chainjustice.chainjustice.player'


export default { 
  ChainjusticeChainjusticeChainjustice: load(ChainjusticeChainjusticeChainjustice, 'chainjustice.chainjustice.chainjustice'),
  ChainjusticeChainjusticePlayer: load(ChainjusticeChainjusticePlayer, 'chainjustice.chainjustice.player'),
  
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