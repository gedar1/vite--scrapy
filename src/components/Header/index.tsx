import "./index.css";

export const Header = () => {
  return (
    <div className={"headerContainer"}>
      <span className={'title'}>Análisis y herramientas de extracción de datos</span>
    <div className={"headerContent"}>
      <div className={"headerContentInner"}>
        <div className="headerContentInnerItems">
      <span className={"sub-title"}>Estudiantes</span>
          <span>German Darío Arbeláez Ríos</span>
          <span> Juan Carlos Presiga Montoya</span>
          <span>Carlos Alberto Velez Muñoz</span>
        </div>
        <div>
          <span className={"icon-uni"}>
            <img src="src/assets/iud_logo.png" alt="icon-uni" />
          </span>
        </div>
        <div className="headerContentInnerGroup">
          <span>Grupo #7</span>
          <span>Grupo 2402B020107</span>
        </div>
      </div>
    </div>
    </div>
  );
};
