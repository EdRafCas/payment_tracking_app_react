import {Header, Titulo} from './../elementos/Header';
import {Helmet} from 'react-helmet';
import BtnRegresar from '../elementos/BtnRegresar';
import BarraTotalGastado from './BarraTotalGastado';

const EditarGasto = () => {
      return ( 
            <>
                  <Helmet>
                        <title>Gastos por categoría</title>
                  </Helmet>

                  <Header>
                        <BtnRegresar />
                        <Titulo>Gastos por categoría</Titulo>
                              
                  </Header>
                  <BarraTotalGastado />
            </>
      );
}
 
export default EditarGasto;