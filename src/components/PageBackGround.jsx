// import Particles from 'react-tsparticles';
// import { loadFull } from 'tsparticles';
// import { useCallback } from 'react';

// const PageBackground = () => {
//   const particlesInit = useCallback(async (engine) => {
//     await loadFull(engine);
//   }, []);

//   const particlesOptions = {
//     background: {
//       color: '#000',
//     },
//     particles: {
//       number: {
//         value: 80,
//         density: {
//           enable: true,
//           area: 800,
//         },
//       },
//       color: {
//         value: ['#2EB67D', '#ECB22E', '#E01E5B', '#36C5F0'],
//       },
//       shape: {
//         type: 'circle',
//       },
//       opacity: {
//         value: 0.7,
//       },
//       size: {
//         value: 4,
//         random: true,
//       },
//       move: {
//         enable: true,
//         speed: 2,
//         direction: 'none',
//         outModes: {
//           default: 'bounce',
//         },
//       },
//     },
//     interactivity: {
//       events: {
//         onHover: {
//           enable: true,
//           mode: 'repulse',
//         },
//       },
//     },
//   };

//   return <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />;
// };

// export default PageBackground;

import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';

const PageBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesOptions = {
    background: {
      color: '#000',
    },
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: ['#2EB67D', '#ECB22E', '#E01E5B', '#36C5F0'],
      },
      shape: {
        type: 'circle',
      },
      opacity: {
        value: 0.7,
      },
      size: {
        value: 4,
        random: true,
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        outModes: {
          default: 'bounce',
        },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'repulse',
        },
      },
    },
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesOptions}
      style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} // Add this line
    />
  );
};

export default PageBackground;
