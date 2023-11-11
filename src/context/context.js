import React, { createContext, useContext } from 'react'
import { useState } from 'react'

const UserContext=createContext()

export const ContextProvider = ({children}) => {
  let [theme,setTheme]=useState('')
  
  const dark='#1E1E1E'
  const light='#F5F5F5'



  return (
    <UserContext.Provider value={{theme,setTheme,dark,light }}>
        {children}
    </UserContext.Provider>
  )
}
export const useUser=()=>{
  const context=useContext(UserContext)
   if(!context){
    throw new Error('an error occored during the execution')
   }

   return context;
}







