import React, {useState} from 'react';
import {ContenedorFiltros, Formulario, Input, InputGrande, ContenedorBoton} from './../elementos/ElementosDeFormulario';
import Boton from './../elementos/Boton';
import {ReactComponent as IconoPlus} from './../imagenes/plus.svg'
import SelectCategorias from './SelectCategorias';
import DatePicker from './DatePicker';
import getUnixTime from 'date-fns/getUnixTime';
import fromUnixTime from 'date-fns/fromUnixTime';
import agregarGasto from '../Firebase/AgregarGasto';
import {useAuth} from './../Contextos/AuthContext';
import Alerta from './../elementos/Alerta';

const FormularioGasto = () => {
      const [inputDescripcion, cambiarInputDescripcion] = useState('');
      const [inputCantidad, cambiarInputCantidad] = useState('');
      const [categoria, cambiarCategoria] = useState('hogar');
      const [fecha, cambiarFecha] = useState(new Date());
      const [estadoAlerta, cambiarEstadoAlerta] = useState(false);
      const [alerta, cambiarAlerta] = useState({})

      const {usuario} = useAuth();

      const handleChange = (e) => {
            if(e.target.name === "descripcion"){
                  cambiarInputDescripcion(e.target.value);
            } else if(e.target.name === "cantidad"){
                  cambiarInputCantidad(e.target.value.replace(/[^0-9.]/g, ''));
            }
      }

      const handleSubmit = (e) => {
            e.preventDefault();

            //Transformamos la cantidad en numeros y le pasamos 2 decimales
            let cantidad = parseFloat(inputCantidad).toFixed(2);

            //Comprobamos que haya descripcion y valor (no deben estar vacias)

            if(inputDescripcion !== '' && inputCantidad !== ''){
                  if(cantidad){
                        agregarGasto({
                              categoria: categoria,
                              descripcion: inputDescripcion,
                              cantidad: cantidad, 
                              fecha: getUnixTime(fecha),
                              uidUsuario: usuario.uid
                        })
                        .then(() => {
                              cambiarCategoria('hogar');
                              cambiarInputDescripcion('');
                              cambiarInputCantidad('');
                              cambiarFecha(new Date());
                              
                              cambiarEstadoAlerta(true);
                              cambiarAlerta({tipo: 'exito', mensaje: 'El gasto fue agregado correctamente'});
                        })
                        .catch ((error)=>{
                              cambiarEstadoAlerta(true);
                              cambiarAlerta({tipo: 'error', mensaje: 'Hubo un problema al intentar agregar tu gasto'});

                        })
                  } else {
                        cambiarEstadoAlerta(true);
                        cambiarAlerta({tipo: 'error', mensaje: 'Por favor rellena todos los campos'})
                  }        
            
            } else {
                  cambiarEstadoAlerta(true);
                  cambiarAlerta({tipo: 'error', mensaje: 'Por favor rellena todos los campos'})
            }      
      }

      return ( 
            <Formulario onSubmit={handleSubmit}>
                  <ContenedorFiltros>
                        <SelectCategorias 
                              categoria={categoria}
                              cambiarCategoria={cambiarCategoria}
                        />
                        <DatePicker 
                              fecha={fecha}
                              cambiarFecha={cambiarFecha}
                              />
                  </ContenedorFiltros>

                  <div>
                        <Input
                              type='text'
                              name="descripcion"
                              id="descripcion"
                              placeholder="Descripción"
                              value={inputDescripcion}
                              onChange={handleChange}
                        />
                        <InputGrande
                              type="text"
                              name="cantidad"
                              id="cantidad"
                              placeholder="$0.00"
                              value={inputCantidad}
                              onChange={handleChange}
                        />
                  </div>
                  <ContenedorBoton>
                        <Boton as="button" primario conIcono type="submit">
                              Agregar Gasto <IconoPlus />
                        </Boton>
                  </ContenedorBoton>
                  <Alerta 
                        tipo={alerta.tipo}
                        mensaje={alerta.mensaje}
                        estadoAlerta={estadoAlerta}
                        cambiarEstadoAlerta={cambiarEstadoAlerta}
                  />
            </Formulario>
       );
}
 
export default FormularioGasto;