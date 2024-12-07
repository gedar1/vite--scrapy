import "./index.css";

export const Footer = () => {
  return (
    <div className={"footerContainer"}>
      <img src={"src/assets/grafica_portatiles.png"} alt={"logo"} />
      <div className={"footerContent"}>
        <span className={"sub-title"}>Conclusiones</span>

        <p>
          La ejecución del código ha permitido la extracción efectiva de datos
          sobre computadoras portátiles desde la plataforma de Mercado Libre. Los
          resultados incluyen un conjunto de marcas y precios, lo que proporciona
          una visión general del mercado disponible. La estructura del código
          facilita la navegación a través de las páginas, asegurando que se
          recojan múltiples entradas de productos, y el manejo de excepciones ha
          permitido identificar elementos problemáticos.
        </p>

      </div>
    </div>
  );
};
