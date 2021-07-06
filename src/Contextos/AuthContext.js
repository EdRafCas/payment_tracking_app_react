import React, { useState, useEffect, useContext } from 'react';
import {auth} from './../Firebase/FirebaseConfig'

//Creacion del contexto
const AuthContext = React.createContext();

//Hook para acceder al contexto

const useAuth = () => {
      return useContext(AuthContext);
}

const AuthProvider = ({children}) => {
      const [usuario, cambiarUsuario] = useState();
      //creamos un state para saber cuando termina de cargar la comprobacion de onAuthStateChanged
      const[cargando, cambiarCargando] = useState(true);

      // useEffect para ejecutar la comprobacion una sola vez
      useEffect( () =>{
            //comprobamos si hay un usuario mediante firestore
            const cancelarSuscripcion = auth.onAuthStateChanged((usuario)=>{
                  cambiarUsuario(usuario);
                  cambiarCargando(false);
            });

            return cancelarSuscripcion;
      }, []);

      return ( 
            <AuthContext.Provider value={{usuario: usuario}}>
                  {/* Solamente retornamos los elementos hijos cuando no este cargando
                  de esta forma nos aseguramos de no cargar los elementos hijos del resto de la app hasta que el usuario  haya sido
                  establecido
                  
                  Si no se hace de esta forma, el elemento children cargará ANTES de comprobar que existe un usuario, no queremos eso
                  */}
                  {!cargando && children}
            </AuthContext.Provider>
       );
}
 
export {AuthProvider, AuthContext, useAuth};