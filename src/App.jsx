import { useState } from "react";
import "./App.css";
import { BaseColaboradores } from "./BaseColaboradores";
import Listado from "./components/Listado"
import Formulario from "./components/Formulario"
import Alert from "./components/Alert"
import React from "react"

function App() {

  const [baseColaboradores, setBaseColaboradores] = React.useState(BaseColaboradores)

  const [alertNuevoColaborador, setAlertNuevoColaborador] = React.useState(false)

  const [alerta, setAlerta] = React.useState({
    alert: true,
    mensaje: "",
    tipo: ""
  })

  return (
    <>
      <h1>Lista de colaboradores</h1>
      <Listado baseColaboradores={baseColaboradores} setBaseColaboradores={setBaseColaboradores}/>
      <Formulario baseColaboradores={baseColaboradores} setBaseColaboradores={setBaseColaboradores} alerta={alerta} setAlerta={setAlerta}/> 
    </>
  );
}

export default App;
