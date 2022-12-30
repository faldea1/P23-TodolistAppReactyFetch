import { createContext, useState } from "react";


export const AppContext = createContext(null);

const injectContext = (Component) => {

    return( 
        <AppContext.Provider>
            <Component />
        </AppContext.Provider>

    );




};

export default injectContext;