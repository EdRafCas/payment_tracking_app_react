import React, {useState} from 'react';
import {ContenedorFiltros, Formulario, Input, InputGrande, ContenedorBoton} from './../elementos/ElementosDeFormulario';
import Boton from './../elementos/Boton';
import {ReactComponent as IconoPlus} from './../imagenes/plus.svg'
import SelectCategorias from './SelectCategorias';

const FormularioGasto = () => {
      const [inputDescripcion, cambiarInputDescripcion] = useState('');
      const [inputCantidad, cambiarInputCantidad] = useState('');
      const [categoria, cambiarCategoria] = useState('hogar');

      const handleChange = (e) => {
            if(e.target.name === "descripcion"){
                  cambiarInputDescripcion(e.target.value);
            } else if(e.target.name === "cantidad"){
                  cambiarInputCantidad(e.target.value.replace(/[^0-9.]/g, ''));
            }
      }


      return ( 
            <Formulario>
                  <ContenedorFiltros>
                        <SelectCategorias 
                              categoria={categoria}
                              cambiarCategoria={cambiarCategoria}
                        />
                        <p>Date picker</p>
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
            </Formulario>
       );
}
 
export default FormularioGasto;