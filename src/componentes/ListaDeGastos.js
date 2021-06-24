import react from 'react';
import {Header, Titulo, ContenedorHeader, ContenedorBotones} from './../elementos/Header';
import {Helmet} from 'react-helmet';
import BtnRegresar from '../elementos/BtnRegresar';

const ListaDeGastos = () => {
      return ( 
            <>
                  <Helmet>
                        <title>Lista de Gastos</title>
                  </Helmet>

                  <Header>
                        <BtnRegresar />
                        <Titulo> Lista de Gastos </Titulo>
                              
                  </Header>
            </>
      );
}
 
export default ListaDeGastos;