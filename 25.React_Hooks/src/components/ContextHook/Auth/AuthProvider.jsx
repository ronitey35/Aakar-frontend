import { createContext, useState } from "react";

const AuthContext = createContext(null)


function AuthProvider({children}){
    const [user,setUser] = useState(null)

const login =()=> setUser({name: "Ronit"})
const logOut =()=> setUser(null)

    return(
        <AuthContext.Provider value={{user,login,logOut}} >
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext,AuthProvider}