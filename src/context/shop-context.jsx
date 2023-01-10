import React, { createContext } from 'react'

export const ShopContext = createContext(null)

export const ShopContextProvider = () => {
  return (
    <ShopContext.Provider></ShopContext.Provider>
  )
}
