import React, { useContext, useState } from 'react'
const Authcontext=React.createContext()
export default function Auth(props) {
    const[user,setUser]=useState(null)
    const login=(user)=>{
        setUser(user)
    }
    const logout=()=>{
        setUser(null)
    }
  return (
    <div>
        <Authcontext.Provider value={{user,login,logout}}>
            {props.children}
        </Authcontext.Provider>
      
    </div>
  )
}
export const useAuth=()=>{
    return useContext(Authcontext)
}
