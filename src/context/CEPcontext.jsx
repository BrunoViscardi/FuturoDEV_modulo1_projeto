import { createContext, useEffect, useState } from "react";

export const CEPcontext = createContext()

export const CEPcontextProvider = ({ children }) => {
    const abacate='abacateprint'





    return (
        <CEPcontext.Provider value={{abacate }}>
            {children}
        </CEPcontext.Provider>
    )


}