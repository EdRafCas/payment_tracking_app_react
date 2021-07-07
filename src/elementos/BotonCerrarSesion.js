import React from 'react';
import {ReactComponent as IconoCerrarSesion} from './../imagenes/log-out.svg';
import Boton from './Boton';
import {auth} from './../Firebase/FirebaseConfig';
import {useHistory} from 'react-router-dom';


const BotonCerrarSesion = () => {
      const history = useHistory();

      const CerraSesion = async () => {
            try{
               await auth.signOut();
               history.push('/iniciar-sesion');
            } catch(error) {
                  console.log(error)
            }
            
      }

      return ( 
            <Boton iconoGrande as='button' onClick={CerraSesion}>
                  <IconoCerrarSesion />
            </Boton>
       );
}
 
export default BotonCerrarSesion;