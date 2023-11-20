import React, { createContext, useContext, useState } from 'react'

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext)

const GlobalProviders = ({ children }) => {

    const [sidebarOpen, setSidebarOpen] = useState(false);


    return (
        <GlobalContext.Provider value={{
            sidebarOpen,
            setSidebarOpen
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProviders;