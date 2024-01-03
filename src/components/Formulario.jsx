import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React from "react";
import Alert from "react-bootstrap/Alert";

function FormDisabledExample({
  baseColaboradores,
  setBaseColaboradores,
  alerta,
  setAlerta,
}) {
  const [nuevoColaborador, setNuevoColaborador] = React.useState({
    nombre: "",
    email: "",
    edad: "",
    cargo: "",
    telefono: "",
  });

  const [completaLosCampos, setCompletaLosCampos] = React.useState(false);

  const handleChange = (event) => {
    const value = event.target.value;
    setNuevoColaborador({
      ...nuevoColaborador,
      [event.target.name]: value,
    });
  };

  const agregarColaborador = () => {
    if (
      nuevoColaborador.cargo == "" ||
      nuevoColaborador.edad == "" ||
      nuevoColaborador.email == "" ||
      nuevoColaborador.nombre == "" ||
      nuevoColaborador.telefono == ""
    ) {
      setAlerta({
        alerta: true,
        tipo: "danger",
        mensaje: "¡Completa todos los campos!",
      });
    } else {
      setAlerta({
        alerta: true,
        tipo: "success",
        mensaje: "Has añadido un colaborador",
      });
      setBaseColaboradores([...baseColaboradores, nuevoColaborador]);
      
    }
  };

  return (
    <>
      <h3>Agregar colaborador</h3>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            onClick={() => setAlerta({ alerta: false, tipo: "", mensaje: "" })}
            onChange={(e) => handleChange(e)}
            name="nombre"
            type="text"
            placeholder="Nombre del colaborador"
          />
          <Form.Control
            onClick={() => setAlerta({ alerta: false, tipo: "", mensaje: "" })}
            onChange={(e) => handleChange(e)}
            name="email"
            type="email"
            placeholder="Email del colaborador"
          />
          <Form.Control
            onClick={() => setAlerta({ alerta: false, tipo: "", mensaje: "" })}
            onChange={(e) => handleChange(e)}
            name="edad"
            type="number"
            placeholder="Edad del colaborador"
          />
          <Form.Control
            onClick={() => setAlerta({ alerta: false, tipo: "", mensaje: "" })}
            onChange={(e) => handleChange(e)}
            name="cargo"
            type="text"
            placeholder="Cargo del colaborador"
          />
          <Form.Control
            onClick={() => setAlerta({ alerta: false, tipo: "", mensaje: "" })}
            onChange={(e) => handleChange(e)}
            name="telefono"
            type="text"
            placeholder="Teléfono del colaborador"
          />
        </Form.Group>
        <Button variant="primary" onClick={() => agregarColaborador()}>
          Agregar colaborador
        </Button>
        {alerta.alerta ? (
          <Alert key={alerta.tipo} variant={alerta.tipo}>
            {alerta.mensaje}
          </Alert>
        ) : null}
      </Form>
    </>
  );
}

export default FormDisabledExample;
