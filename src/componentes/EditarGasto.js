import {Header, Titulo} from './../elementos/Header';
import {Helmet} from 'react-helmet';
import BtnRegresar from '../elementos/BtnRegresar';
import BarraTotalGastado from './BarraTotalGastado';
import FormularioGasto from './FormularioGasto';
import {useParams} from  'react-router-dom';
import useObtenerGasto from './../Hooks/useObtenerGasto';

const EditarGasto = () => {
      const {id} = useParams();
      const [gasto] = useObtenerGasto(id);
      
      console.log(gasto.data())


      return ( 
            <>
                  <Helmet>
                        <title>Editar Gasto</title>
                  </Helmet>

                  <Header>
                        <BtnRegresar />
                        <Titulo>Editar Gasto</Titulo>
                              
                  </Header>
                  <FormularioGasto />
                  <BarraTotalGastado />
            </>
      );
}
 
export default EditarGasto;