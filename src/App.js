import React from 'react';
import './App.css';
import { Parallax, ParallaxLayer } from 'react-spring/addons';

import party from './assets/party.png';
import ballon from './assets/balloon.png';

import logo from './assets/logo.png';
import Home from './assets/home.png';
import createevent from './assets/createevent.png';
import editprofile from './assets/editprofile.png';
import login from './assets/login.png';
import eventos from './assets/eventos.png';

import compraCloncluidaBarman from './assets/compraCloncluidaBarman.png';
import homeBarman from './assets/homeBarman.png';
import leituraQRCODEBarman from './assets/leituraQRCODEBarman.png';

import carrinhoUser from './assets/carrinhoUser.png';
import compraConcluidaUser from './assets/compraConcluidaUser.png';
import infoProdutoUser from './assets/infoProdutoUser.png';
import loginUser from './assets/loginUser.png';
import PartysUser from './assets/PartysUser.png';
import qrcodeUser from './assets/qrcodeUser.png';

import outdoor from './assets/outdoor.png';
import lendoQRCODEExample from './assets/lendoQRCODEExample.png';
import mostrandoQRCODEExample from './assets/mostrandoQRCODEExample.png';
import seta from './assets/seta.png';
import userConcluido from './assets/userConcluido.png';
import barmanConcluido from './assets/barmanConcluido.png';
import exampleCreateEvent from './assets/exampleCreateEvent.png';
import exampleCreateMenu from './assets/exampleCreateMenu.png';

function App() {
  let parallax;

  return (
    <Parallax ref={(ref) => (parallax = ref)} pages={6}>
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
        style={{ backgroundColor: '#28262E' }}
      />

      <ParallaxLayer
        offset={4}
        speed={1}
        style={{ backgroundColor: '#28262E' }}
      />
      <ParallaxLayer
        offset={5}
        speed={1}
        style={{ backgroundColor: '#28262E' }}
      />

      {/* Logo */}
      <ParallaxLayer offset={1} speed={-0.3} style={{ pointerEvents: 'none' }}>
        <img
          alt={'img'}
          src={logo}
          style={{ width: '25%', marginLeft: '75%' }}
        />
      </ParallaxLayer>

      {/* Balloon */}
      <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
        <img
          alt={'img'}
          src={ballon}
          style={{ display: 'block', width: '20%', marginLeft: '55%' }}
        />
        <img
          alt={'img'}
          src={ballon}
          style={{ display: 'block', width: '10%', marginLeft: '15%' }}
        />
      </ParallaxLayer>

      {/* Balloon */}
      <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
        <img
          alt={'img'}
          src={ballon}
          style={{ display: 'block', width: '20%', marginLeft: '70%' }}
        />
        <img
          alt={'img'}
          src={ballon}
          style={{ display: 'block', width: '20%', marginLeft: '40%' }}
        />
      </ParallaxLayer>

      {/* Balloon */}
      <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
        <img
          alt={'img'}
          src={ballon}
          style={{ display: 'block', width: '10%', marginLeft: '10%' }}
        />
        <img
          alt={'img'}
          src={ballon}
          style={{ display: 'block', width: '20%', marginLeft: '75%' }}
        />
      </ParallaxLayer>

      {/* Balloon */}
      <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
        <img
          alt={'img'}
          src={ballon}
          style={{ display: 'block', width: '20%', marginLeft: '60%' }}
        />
        <img
          alt={'img'}
          src={ballon}
          style={{ display: 'block', width: '25%', marginLeft: '30%' }}
        />
        <img
          alt={'img'}
          src={ballon}
          style={{ display: 'block', width: '10%', marginLeft: '80%' }}
        />
      </ParallaxLayer>

      {/* Balloon */}
      <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
        <img
          alt={'img'}
          src={ballon}
          style={{ display: 'block', width: '20%', marginLeft: '5%' }}
        />
        <img
          alt={'img'}
          src={ballon}
          style={{ display: 'block', width: '15%', marginLeft: '75%' }}
        />
      </ParallaxLayer>

      {/* Balloon */}
      <ParallaxLayer offset={3.6} speed={0.4} style={{ opacity: 0.6 }}>
        <img
          alt={'img'}
          src={ballon}
          style={{ display: 'block', width: '20%', marginLeft: '5%' }}
        />
        <img
          alt={'img'}
          src={ballon}
          style={{ display: 'block', width: '15%', marginLeft: '75%' }}
        />
      </ParallaxLayer>

      {/* Balloon */}
      <ParallaxLayer offset={2.8} speed={0.4} style={{ opacity: 0.6 }}>
        <img
          alt={'img'}
          src={ballon}
          style={{ display: 'block', width: '20%', marginLeft: '5%' }}
        />
        <img
          alt={'img'}
          src={ballon}
          style={{ display: 'block', width: '15%', marginLeft: '75%' }}
        />
      </ParallaxLayer>

      {/* Party */}
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
        <img
          alt={'img'}
          src={party}
          style={{
            width: '50%',
            borderRadius: '50%',
            opacity: '0.4',
            marginLeft: '40%',
          }}
        />
      </ParallaxLayer>

      {/* Home pages */}
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
        <img
          alt={'img'}
          src={Home}
          style={{ width: '70%', marginLeft: '-15%' }}
        />
      </ParallaxLayer>

      {/* App User */}
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
        <h1 style={{ position: 'absolute', top: 30, color: '#f99000' }}>
          User Application
        </h1>
        <img alt={'img'} src={loginUser} style={{ width: '40%' }} />
        <img
          alt={'img'}
          src={PartysUser}
          style={{ width: '15%', marginLeft: '-8%' }}
        />
        <img
          alt={'img'}
          src={carrinhoUser}
          style={{ width: '25%', marginTop: '16%' }}
        />
        <img
          alt={'img'}
          src={infoProdutoUser}
          style={{ width: '25%', marginLeft: '-20%', marginBottom: '15%' }}
        />
        <img alt={'img'} src={qrcodeUser} style={{ width: '15%' }} />
        <img
          alt={'img'}
          src={compraConcluidaUser}
          style={{ width: '26%', marginLeft: '-5%%' }}
        />
      </ParallaxLayer>

      {/* Barman */}
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
        <h1 style={{ position: 'absolute', top: 30, color: '#f99000' }}>
          Barman App
        </h1>
        <img alt={'img'} src={homeBarman} style={{ width: '20%' }} />
        <img alt={'img'} src={leituraQRCODEBarman} style={{ width: '20%' }} />
        <img
          alt={'img'}
          src={compraCloncluidaBarman}
          style={{ width: '30%' }}
        />
      </ParallaxLayer>

      {/* Web */}
      <ParallaxLayer
        offset={3}
        speed={0.1}
        onClick={() => parallax.scrollTo(4)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1 style={{ position: 'absolute', top: 100, color: '#f99000' }}>
          Web Application
        </h1>
        <img
          alt={'img'}
          src={login}
          style={{ width: '30%', marginLeft: '6%' }}
        />
        <img
          alt={'img'}
          src={editprofile}
          style={{ width: '40%', marginLeft: '-9%' }}
        />
        <img
          alt={'img'}
          src={createevent}
          style={{ width: '40%', marginLeft: '-11%' }}
        />
        <img
          alt={'img'}
          src={eventos}
          style={{ width: '30%', marginLeft: '-10%' }}
        />
      </ParallaxLayer>

      {/* Usage */}
      <ParallaxLayer
        offset={4}
        speed={0.1}
        onClick={() => parallax.scrollTo(5)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1
          style={{
            position: 'absolute',
            color: '#f99000',
            top: '0',
          }}
        >
          Exemplo de uso
        </h1>
        <p
          style={{
            position: 'absolute',
            top: '5%',
            color: '#f99000',
            fontSize: '23px',
          }}
        >
          Crie um evento, divulge-o e cadastre os itens do menu
        </p>
        <img
          alt={'img'}
          src={outdoor}
          style={{
            opacity: '0.4',
            position: 'absolute',
          }}
        />
        <img
          alt={'img'}
          src={exampleCreateEvent}
          style={{
            width: '40%',
            position: 'absolute',
            left: '3%',
          }}
        />
        <img
          alt={'img'}
          src={exampleCreateMenu}
          style={{
            width: '40%',
            position: 'absolute',
            left: '57%',
          }}
        />
      </ParallaxLayer>

      {/* Usage */}
      <ParallaxLayer
        offset={5}
        speed={0.1}
        onClick={() => parallax.scrollTo(0)}
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}
      >
        <p
          style={{
            position: 'absolute',
            top: 10,
            color: '#f99000',
            fontSize: '23px',
          }}
        >
          Dentro do evento, o barman apenas terá que ler o QR Code para saber os
          produtos comprados.
        </p>

        <img
          alt={'img'}
          src={mostrandoQRCODEExample}
          style={{ width: '30%', left: '25%', position: 'absolute' }}
        />
        <img
          alt={'img'}
          src={lendoQRCODEExample}
          style={{ width: '35%', left: 0, position: 'absolute' }}
        />
        <img
          alt={'img'}
          src={seta}
          style={{
            width: '10%',
            left: '50%',
            top: '50%',
            position: 'absolute',
          }}
        />
        <img
          alt={'img'}
          src={barmanConcluido}
          style={{
            width: '30%',
            left: '55%',
            zIndex: 10,
            position: 'absolute',
          }}
        />
        <img
          alt={'img'}
          src={userConcluido}
          style={{ width: '26%', left: '75%', position: 'absolute' }}
        />
      </ParallaxLayer>
    </Parallax>
  );
}

export default App;
