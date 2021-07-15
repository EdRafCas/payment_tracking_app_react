import React from 'react';
import {Header, Titulo} from './../elementos/Header';
import {Helmet} from 'react-helmet';
import BtnRegresar from '../elementos/BtnRegresar';
import BarraTotalGastado from './BarraTotalGastado';
import useObtenerGastos from '../Hooks/useObtenerGastos';

const ListaDeGastos = () => {
      const [gastos] = useObtenerGastos();
      console.log(gastos);
      
      return ( 
            <>
                  <Helmet>
                        <title>Lista de Gastos</title>
                  </Helmet>

                  <Header>
                        <BtnRegresar />
                        <Titulo> Lista de gastos  </Titulo>
                              
                  </Header>
                  <BarraTotalGastado/>
            </>
      );
}
 
export default ListaDeGastos;