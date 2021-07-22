import {useEffect, useState} from "react";
import {db} from './../Firebase/FirebaseConfig';
import {useHistory} from 'react-router-dom'

const useObtenerGasto = (id) => {
      const history = useHistory();
      const [gasto, establecerGasto] = useState('');

      useEffect(()=>{
            db.collection('gastos').doc(id).get()
            .then((doc)=>{
                  if(doc.exists){
                        establecerGasto(doc)
                  } else {
                        history.push('/lista')
                  }
            })
      }, [history, id])
     
      return [gasto];
}
 
export default useObtenerGasto;