import React, { createContext , useState} from 'react';
import initStore from 'utils/initStore'


export const StoreContext = createContext();

function StoreContextProvider(props) {
    const [store, setStore] = useState(()=>{return initStore});

    //inserts all the needed functions in here: addLike, removeLike, addPost etc.

    return (
        <StoreContext.Provider value = {{...store}}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;