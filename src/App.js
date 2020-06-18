import React from 'react';
import './App.css';
import { Parallax, ParallaxLayer } from 'react-spring/addons';

function App() {
  const url = (name, wrap = false) =>
    `${
      wrap ? 'url(' : ''
    }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
      wrap ? ')' : ''
    }`;

  let parallax;

  return (
    <Parallax ref={(ref) => (parallax = ref)} pages={4}>
      <ParallaxLayer
        offset={0}
        speed={1}
        style={{ backgroundColor: '#28262E' }}
      />
      <ParallaxLayer
        offset={1}
        speed={1}
        style={{ backgroundColor: '#28262E' }}
      />

      <ParallaxLayer
        offset={2}
        speed={1}
        // factor={3}
        style={{ backgroundColor: '#28262E' }}
      />

      <ParallaxLayer
        offset={3}
        speed={1}
        factor={4}
        style={{ backgroundColor: '#28262E' }}
      />

      {/* satellite4 */}
      <ParallaxLayer offset={1} speed={-0.3} style={{ pointerEvents: 'none' }}>
        <img
          alt={'img'}
          src={url('satellite4')}
          style={{ width: '15%', marginLeft: '70%' }}
        />
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
        <img
          alt={'img'}
          src={url('cloud')}
          style={{ display: 'block', width: '20%', marginLeft: '55%' }}
        />
        <img
          alt={'img'}
          src={url('cloud')}
          style={{ display: 'block', width: '10%', marginLeft: '15%' }}
        />
      </ParallaxLayer>

      <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
        <img
          alt={'img'}
          src={url('cloud')}
          style={{ display: 'block', width: '20%', marginLeft: '70%' }}
        />
        <img
          alt={'img'}
          src={url('cloud')}
          style={{ display: 'block', width: '20%', marginLeft: '40%' }}
        />
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
        <img
          alt={'img'}
          src={url('cloud')}
          style={{ display: 'block', width: '10%', marginLeft: '10%' }}
        />
        <img
          alt={'img'}
          src={url('cloud')}
          style={{ display: 'block', width: '20%', marginLeft: '75%' }}
        />
      </ParallaxLayer>

      <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
        <img
          alt={'img'}
          src={url('cloud')}
          style={{ display: 'block', width: '20%', marginLeft: '60%' }}
        />
        <img
          alt={'img'}
          src={url('cloud')}
          style={{ display: 'block', width: '25%', marginLeft: '30%' }}
        />
        <img
          alt={'img'}
          src={url('cloud')}
          style={{ display: 'block', width: '10%', marginLeft: '80%' }}
        />
      </ParallaxLayer>

      <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
        <img
          alt={'img'}
          src={url('cloud')}
          style={{ display: 'block', width: '20%', marginLeft: '5%' }}
        />
        <img
          alt={'img'}
          src={url('cloud')}
          style={{ display: 'block', width: '15%', marginLeft: '75%' }}
        />
      </ParallaxLayer>

      {/* Earth */}
      <ParallaxLayer
        offset={2.5}
        speed={-0.4}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
        }}
      >
        <img alt={'img'} src={url('earth')} style={{ width: '60%' }} />
      </ParallaxLayer>

      {/* server -> Home pages*/}
      <ParallaxLayer
        offset={0}
        speed={0.1}
        onClick={() => parallax.scrollTo(1)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1 style={{ position: 'absolute', top: 100, color: '#f99000' }}>
          QAgil 0
        </h1>
        <img
          alt={'img'}
          src={url('server')}
          style={{ width: '20%', marginLeft: '10%' }}
        />
        <img
          alt={'imgg'}
          src={url('server')}
          style={{ width: '20%', marginLeft: '30%' }}
        />
      </ParallaxLayer>

      {/* bash */}
      <ParallaxLayer
        offset={1}
        speed={0.1}
        onClick={() => parallax.scrollTo(2)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1 style={{ position: 'absolute', top: 100, color: '#f99000' }}>
          Web Application 1
        </h1>
        <img alt={'img'} src={url('bash')} style={{ width: '40%' }} />
      </ParallaxLayer>

      {/* clients */}
      <ParallaxLayer
        offset={2}
        speed={-0.3}
        onClick={() => parallax.scrollTo(0)}
        style={{
          backgroundSize: '80%',
          backgroundPosition: 'center',
          backgroundImage: url('clients', true),
        }}
      />

      <ParallaxLayer
        offset={2}
        speed={0.1}
        onClick={() => parallax.scrollTo(3)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1 style={{ position: 'absolute', top: 100, color: '#f99000' }}>
          Web Application 2
        </h1>
        <img alt={'img'} src={url('bash')} style={{ width: '40%' }} />
      </ParallaxLayer>

      {/* clients */}
      <ParallaxLayer
        offset={3}
        speed={0.1}
        onClick={() => parallax.scrollTo(0)}
        style={{
          backgroundSize: '80%',
          backgroundPosition: 'center',
          backgroundImage: url('clients', true),
        }}
      >
        <h1 style={{ position: 'absolute', top: 100, color: '#f99000' }}>
          Web Application 3
        </h1>
        <img alt={'img'} src={url('bash')} style={{ width: '40%' }} />
      </ParallaxLayer>
    </Parallax>
  );
}

export default App;
