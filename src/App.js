import React from 'react';
import {Helmet} from 'react-helmet';
import {Header, Titulo, ContenedorHeader, ContenedorBotones} from './elementos/Header';
import Boton from './elementos/Boton';


const App = () => {
  return ( 
    <>
      <Helmet>
        <title>Agregar gasto</title>
      </Helmet>

      <Header>
        <ContenedorHeader>
          <Titulo> Agregar gasto </Titulo>
          <ContenedorBotones>
            <Boton to="/categorias">Categorias</Boton>
            <Boton to="/lista">Lista de gastos</Boton>
            <Boton to="/">X</Boton>
          </ContenedorBotones>
        </ContenedorHeader>
      </Header>
    </>
   );
}
 
export default App;
