// src/components/MuseoScene/ModeloMuseo.jsx
import React, { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';

/**
 * Componente que carga el modelo GLB del museo
 * y permite seleccionar fotografías haciendo clic sobre ellas.
 */
export default function ModeloMuseo({ onSelect, onLoad }) {
  const { scene } = useGLTF('/models/museo.glb');

  useEffect(() => {
    if (onLoad) onLoad(); // Confirmamos que se cargó el modelo
  }, [onLoad]);

  return (
    <>
      {scene.children.map((child, index) => {
        const nombre = child.name.toLowerCase();
        const escala = 1; // ← usa 0.01 si tu modelo aún está en centímetros

        if (child.isMesh && nombre.includes('imagen')) {
          return (
            <primitive
              key={index}
              object={child}
              scale={escala}
              onClick={(e) => {
                e.stopPropagation();
                onSelect({
                  title: 'Obra: ' + child.name,
                  author: 'Autor desconocido',
                  year: 'Año estimado: 1900',
                });
              }}
            />
          );
        }

        return <primitive key={index} object={child} scale={escala} />;
      })}
    </>
  );
}
