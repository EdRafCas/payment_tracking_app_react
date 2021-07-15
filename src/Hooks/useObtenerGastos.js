import {useState, useEffect} from 'react';
import {db} from './../Firebase/FirebaseConfig';
import {useAuth} from './../Contextos/AuthContext'

const useObtenerGastos = () => {
      const {usuario} = useAuth();
      const [gastos, cambiarGastos] = useState([]);

      useEffect(() => {
            const unsuscribe = db.collection('gastos')
            .where('uidUsuario', '==', usuario.uid)
		.orderBy('fecha', 'desc')
		.limit(10)
		.onSnapshot((snapshot) => {
                  cambiarGastos( snapshot.docs.map((gasto) => {
                        return{...gasto.data(), id: gasto.id}

                  }));
            });

            return unsuscribe; //al colocar el codigo dentro de una funcion, en este caso unsuscribe, permite desconectarlo al finalizar
      }, [usuario]); //esto especifica que se ejecuta cuando inicia y tambien cuando cambia el usuario

      return [gastos];
}
 
export default useObtenerGastos;