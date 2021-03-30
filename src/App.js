import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Formulario from "./Components/Formulario";
import Clima from "./Components/Clima";

function App() {
  const [busqueda, setBusqueda] = useState({
    ciudad: "",
    pais: "",
  });

  const { ciudad, pais } = busqueda;

  const [consultar, setConsultar] = useState(false);
  const [resultado, setResultado] = useState({});

  useEffect(() => {
    const consultarApi = async () => {
      if (consultar) {
        const appId = "4aaf04af1acd01876a5337f9b4b1b81b";
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setResultado({resultado})
        console.log(resultado)
        setConsultar(false);
      }
    };
    consultarApi();
  }, [consultar]);

  return (
    <>
      <Header titulo="Clima React App" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                busqueda={busqueda}
                setBusqueda={setBusqueda}
                setConsultar={setConsultar}
              />
            </div>
            <div className="col m6 s12">
            <Clima
              resultado={resultado}
            />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
