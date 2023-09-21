import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTopOnRouteChange({ children }) {
  const location = useLocation();

  useEffect(() => {
    // Detecta la ruta actual y el elemento de destino
    const currentPath = location.pathname;
    const targetElementId = getTargetElementId(currentPath);

    // Realiza el desplazamiento suave
    if (targetElementId) {
      const targetElement = document.getElementById(targetElementId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  // Define la lógica para mapear rutas a elementos de destino
  function getTargetElementId(path) {
    console.log(path)
    if (path){
      if (path !== '/'){
        return 'seccion-destino';
      }
      else {
        return null
      }
    }else {
      return null
    }
  }

  return children;
}

export default ScrollToTopOnRouteChange;
