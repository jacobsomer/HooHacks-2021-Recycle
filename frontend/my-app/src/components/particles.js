import Particles from "react-tsparticles";
import React, {Component} from 'react';

class ParticleAnimation extends Component {
  constructor(props) {
    super(props);

    this.particlesInit = this.particlesInit.bind(this);
    this.particlesLoaded = this.particlesLoaded.bind(this);
  }

  particlesInit(main) {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  }

  particlesLoaded(container) {
    console.log(container);
  }

  render() {
    return (
      <Particles 
        id="tsparticles"
        init={this.particlesInit}
        loaded={this.particlesLoaded}
        style={{position:'absolute',top:'0vh',left:'0vw'}}
        height='100vh'
        width='100%'
        options={{
            
          background: {
            color: {
              value: "transparent",
            },
          },
          
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
                character: [
                  {
                    fill: true,
                    font: "Verdana",
                    value: ["🗑️",'🥤','♻️','🍌'],
                    style: "",
                    weight: 400
                  }
                ],
                
                polygon: { nb_sides: 5 },
                stroke: { color: "random", width: 1 },
                type: "char"
              },
            size: {
              random: true,
              value: 20,
            },
            
          },
          detectRetina: true,
        }}
      ></Particles>
    );
  }
}
export default ParticleAnimation;