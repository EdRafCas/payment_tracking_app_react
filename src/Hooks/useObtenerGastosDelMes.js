import {useEffect, useState} from 'react';
import {db} from './../Firebase/FirebaseConfig'
import {startOfMonth, endOfMonth, getUnixTime} from 'date-fns';
import {useAuth} from './../Contextos/AuthContext'

const useObtenerGastosDelMes = () => {
      const [gastos, establecerGastos] = useState('');
      const {usuario} = useAuth();

      useEffect(()=>{
            const inicioDeMes = getUnixTime(startOfMonth(new Date()));
            const finDeMes = getUnixTime(endOfMonth(new Date()));

            if(usuario){
                  const unsuscribe = db.collection('gastos')
                  .orderBy('fecha', 'desc')
                  .where('fecha', ">=", inicioDeMes)
                  .where('fecha', "<=", finDeMes)
                  .where('uidUsuario', '==', usuario.uid)
                  .onSnapshot((snapshot)=>{
                        establecerGastos(snapshot.docs.map((documento) =>{
                              return {...documento.data(), id: documento.id}
                        }))
                  })    
            //useEffect tiene que retornar una funcion que se ejecuta cuando se desmonta el componente
            //se ejecuta unsuscriba para que se ejecute la desconexion al servicio de firestore
            return unsuscribe;
            } 
      }, [usuario])
      
      return [gastos];
}
 
export default useObtenerGastosDelMes;