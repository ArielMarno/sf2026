import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Intentamos encontrar el elemento
      const id = hash.replace("#", "");
      
      // Usamos un observador para esperar a que el elemento exista en el DOM
      const scrollToElement = () => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          return true;
        }
        return false;
      };

      // Intento inmediato
      if (!scrollToElement()) {
        // Si no existe (porque la página está cargando), reintentamos brevemente
        const timer = setTimeout(scrollToElement, 300);
        return () => clearTimeout(timer);
      }
    } else {
      // Si no hay hash y cambiamos de página, vamos arriba del todo
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]); // Se activa al cambiar de ruta o de #hash

  return null;
};

export default ScrollToHash;