import React, { useContext } from 'react';

//Creacion del contexto
const AuthContext = React.createContext();

//Hook para acceder al contexto

const useAuth = () => {
      return useContext(AuthContext);
}

const AuthProvider = ({children}) => {
      return ( 
            <AuthContext.Provider value={{usuario: true}}>
                  {children}
            </AuthContext.Provider>
       );
}
 
export {AuthProvider, AuthContext, useAuth};