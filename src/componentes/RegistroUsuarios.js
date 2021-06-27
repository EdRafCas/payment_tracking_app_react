import {Helmet} from 'react-helmet';
import {Header, Titulo, ContenedorHeader, ContenedorBotones} from './../elementos/Header';
import Boton from './../elementos/Boton';
import {ContenedorFiltros, Formulario, Input, InputGrande, ContenedorBoton} from './../elementos/ElementosDeFormulario';
import {ReactComponent as SvgLogin} from './../imagenes/registro.svg';
import styled from 'styled-components';

const Svg = styled(SvgLogin)`
      width: 100%;
      max-height: 6.25rem; /*100 px */
      margin-bottom: 1.25rem; /* 20px */

`;

const RegistroUsuarios = () => {
      return ( 
            <>
                  <Helmet>
                        <title>Crear Cuenta</title>
                  </Helmet>

                  <Header>
                        <ContenedorHeader>
                              <Titulo>Crear Cuenta</Titulo>
                              <div>
                                    <Boton to='iniciar-sesion' >Iniciar Sesion</Boton>
                              </div>
                        </ContenedorHeader>
                  </Header>

                  <Formulario>
                        <Svg />
                        <Input 
                              type="email"
                              name="email"
                              placeholder="Correo Electronico"
                        />
                        <Input 
                              type="password"
                              name="password"
                              placeholder="Contraseña"
                        />
                        <Input 
                              type="password"
                              name="password2"
                              placeholder="Repetir Contraseña"
                        />
                        <ContenedorBoton>
                              <Boton as="button" type="submit" primario>Crear cuenta</Boton>
                        </ContenedorBoton>
                  </Formulario>
            </>
      );
}
 
export default RegistroUsuarios;