import React from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particleConfig from '../config/particle-config';
import Main from './Main';

const Particles = () => {
    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
      };
      const particlesLoaded = (container) => {
        console.log(container);
      };
  return (
    <Particles  id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded} params={particleConfig}>
        <Main></Main>
    </Particles>
 
    
  )
  
}

export default Particles