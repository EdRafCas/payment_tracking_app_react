import React, {useEffect, useState, useContext} from 'react';
import useObtenerGastosDelMes from '../Hooks/useObtenerGastosDelMes';

const TotalGastadoContext = React.createContext();

const useTotalDelMes = () => useContext(TotalGastadoContext);

const TotalGastadoProvider = ({children}) => {
      const [total, cambiarTotal] = useState(7);
      const gastos = useObtenerGastosDelMes();

      useEffect( () => {
            let acumulado = 0;
            gastos.forEach((gasto) =>{
                  acumulado += gasto.cantidad
            })

            cambiarTotal(acumulado);
            
      }, [gastos])

      return(
            <TotalGastadoContext.Provider value={{total: total}} >
                  {children}
            </TotalGastadoContext.Provider>
      )
      
}

export {TotalGastadoProvider, useTotalDelMes}