import {useState, useEffect} from 'react';
import {db} from './../Firebase/FirebaseConfig';
import {useAuth} from './../Contextos/AuthContext'

const useObtenerGastos = () => {
      const {usuario} = useAuth();
      const [gastos, cambiarGastos] = useState([]);
      const [ultimoGasto, cambiarUltimoGasto] = useState(null);
      const [hayMasPorCargar, cambiarHayMasPorCargar] = useState(false);

      const obtenerMasGastos = () =>{
            db.collection('gastos')
            .where('uidUsuario', '==', usuario.uid)
		.orderBy('fecha', 'desc')
		.limit(10)
            .startAfter(ultimoGasto)
            .onSnapshot( (snapshot) => {
                  if(snapshot.docs.length > 0){
                        cambiarUltimoGasto(snapshot.docs[snapshot.docs.length -1]);

                        cambiarGastos(gastos.concat(snapshot.docs.map((gasto) => {
                              return {...gasto.data(), id: gasto.id}
                        })))
                  } else {
                        cambiarHayMasPorCargar(false);
                  }
            })
      }

      useEffect(() => {
            const unsuscribe = db.collection('gastos')
            .where('uidUsuario', '==', usuario.uid)
		.orderBy('fecha', 'desc')
		.limit(10)
		.onSnapshot((snapshot) => {
                  console.log(snapshot.docs[snapshot.docs.length -1].data());
                  if(snapshot.docs.length > 0) {
                       cambiarUltimoGasto(snapshot.docs[snapshot.docs.length -1]);
                       cambiarHayMasPorCargar(true);
                  } else {
                        cambiarHayMasPorCargar(false)
                  }

                  cambiarGastos( snapshot.docs.map((gasto) => {
                        return{...gasto.data(), id: gasto.id}

                  }));
            });

            return unsuscribe; //al colocar el codigo dentro de una funcion, en este caso unsuscribe, permite desconectarlo al finalizar
      }, [usuario]); //esto especifica que se ejecuta cuando inicia y tambien cuando cambia el usuario

      return [gastos, obtenerMasGastos, hayMasPorCargar];
}
 
export default useObtenerGastos;