import React, { Suspense, useState, useEffect } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { FirstPersonControls, Environment } from '@react-three/drei';
import * as THREE from 'three';
import ModeloMuseo from './ModeloMuseo'; // ← importación del componente que carga el modelo GLB

// 🔧 Fija la altura de la cámara en todo momento
function FixCameraHeight({ altura = 1.7 }) {
  const { camera } = useThree();
  useFrame(() => {
    if (camera) camera.position.y = altura;
  });
  return null;
}

// 🎮 Movimiento con teclas W A S D (opcional)
function MovimientoConTeclado() {
  const { camera } = useThree();
  const [keys, setKeys] = useState({});

  useEffect(() => {
    const down = (e) => setKeys((k) => ({ ...k, [e.key.toLowerCase()]: true }));
    const up = (e) => setKeys((k) => ({ ...k, [e.key.toLowerCase()]: false }));
    window.addEventListener('keydown', down);
    window.addEventListener('keyup', up);
    return () => {
      window.removeEventListener('keydown', down);
      window.removeEventListener('keyup', up);
    };
  }, []);

  useFrame(() => {
    const speed = 0.05;
    const direction = new THREE.Vector3();
    if (keys['w']) direction.z -= 1;
    if (keys['s']) direction.z += 1;
    if (keys['a']) direction.x -= 1;
    if (keys['d']) direction.x += 1;

    direction.normalize();
    direction.applyEuler(camera.rotation);
    camera.position.add(direction.multiplyScalar(speed));
    camera.position.y = 1.7;
  });

  return null;
}

// 🏛️ Escena principal del museo
export default function MuseoScene() {
  const [selectedInfo, setSelectedInfo] = useState(null); // Estado para ficha técnica
  const [activo, setActivo] = useState(false);            // Clic inicial del usuario
  const [modeloCargado, setModeloCargado] = useState(false); // Estado para mostrar mensaje

  return (
    <>
      <Canvas
        camera={{ position: [0, 1.7, 5], fov: 50, near: 0.1, far: 100 }}
        onClick={() => setActivo(true)}
        style={{ background: '#111' }}
      >
        {/* Luz ambiental para todo el entorno */}
        <ambientLight intensity={0.8} />

        {/* Fijar altura de cámara (como ojo humano) */}
        <FixCameraHeight altura={1.7} />

        <Suspense fallback={null}>
          {/* Ambiente HDRI tipo ciudad */}
          <Environment preset="city" />

          {/* Cargar modelo GLB y notificar cuando se haya cargado */}
          <ModeloMuseo
            onSelect={setSelectedInfo}
            onLoad={() => setModeloCargado(true)}
          />

          {/* Controles tipo videojuego (mouse y teclado) */}
          <FirstPersonControls
            movementSpeed={2.5}
            lookSpeed={0.08}
            lookVertical={true}
            activeLook={true}
          />

          <MovimientoConTeclado />
        </Suspense>
      </Canvas>

      {/* 🔔 Mensaje para activar navegación */}
      {modeloCargado && !activo && (
        <div style={{
          position: 'absolute',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          padding: '10px 20px',
          background: 'rgba(0,0,0,0.8)',
          color: 'white',
          borderRadius: '8px',
          fontSize: '16px',
          pointerEvents: 'none'
        }}>
          Haz clic en la escena para comenzar a moverte
        </div>
      )}

      {/* 🖼️ Ficha técnica de la obra seleccionada */}
      {selectedInfo && (
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '20px',
          padding: '12px',
          background: 'rgba(253, 0, 0, 0.7)',
          color: 'white',
          borderRadius: '8px',
          maxWidth: '300px'
        }}>
          <h3>{selectedInfo.title}</h3>
          <p>{selectedInfo.author}</p>
          <p>{selectedInfo.year}</p>
          <button
            style={{
              marginTop: '10px',
              padding: '6px 10px',
              border: 'none',
              borderRadius: '4px',
              backgroundColor: '#fff',
              color: '#000',
              cursor: 'pointer'
            }}
            onClick={() => setSelectedInfo(null)}
          >
            Cerrar
          </button>
        </div>
      )}
    </>
  );
}
