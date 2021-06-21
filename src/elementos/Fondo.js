import React from 'react';
import styled from 'styled-components';

import {ReactComponent as Puntos} from './../imagenes/puntos.svg';

const Svg = styled.svg`
    height: 50vh;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 0;
    path {
        fill: rgba(135,182,194, .15);
    }
`;
 
const PuntosArriba = styled(Puntos)`
    position: fixed;
    z-index: 1;
    top: 2.5rem; /* 40px */
    left: 2.5rem; /* 40px */
`;
 
const PuntosAbajo = styled(Puntos)`
    position: fixed;
    z-index: 1;
    bottom: 2.5rem; /* 40px */
    right: 2.5rem; /* 40px */
`;

const Fondo = () => {
      return ( 
            <>
                  <PuntosArriba />
                        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                              <path 
                                    fillOpacity="1" 
                                    d="M0,160L30,181.3C60,203,120,245,180,245.3C240,245,300,203,360,202.7C420,203,480,245,540,224C600,203,660,117,720,85.3C780,53,840,75,900,106.7C960,139,1020,181,1080,170.7C1140,160,1200,96,1260,69.3C1320,43,1380,53,1410,58.7L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z">
                              </path>
                        </Svg>
                  <PuntosAbajo />
            </>
       );
}
 
export default Fondo;