import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import React from "react";
function BasicExample({ baseColaboradores, setBaseColaboradores }) {
  const [filtroColaboradores, setFiltroColaboradores] = React.useState(false);

  console.log(baseColaboradores);
  console.log(filtroColaboradores);

  const onChangeBusqueda = (e) => {
    setFiltroColaboradores(
      baseColaboradores.filter((el) => {
        return (
          el.correo.includes(e.target.value) ||
          el.cargo.includes(e.target.value) ||
          el.edad.includes(e.target.value) ||
          el.nombre.includes(e.target.value) ||
          el.telefono.includes(e.target.value)
        );
      })
    );
  };

  return (
    <>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            onChange={(e) => onChangeBusqueda(e)}
            type="text"
            placeholder="Busca un colaborador"
          />
        </Form.Group>
      </Form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {!filtroColaboradores
            ? baseColaboradores.map((colaborador, index) => (
                <tr key={index}>
                  <td>{colaborador.nombre}</td>
                  <td>{colaborador.correo}</td>
                  <td>{colaborador.edad}</td>
                  <td>{colaborador.cargo}</td>
                  <td>{colaborador.telefono}</td>
                </tr>
              ))
            : filtroColaboradores.map((colaborador, index) => (
                <tr key={index}>
                  <td>{colaborador.nombre}</td>
                  <td>{colaborador.correo}</td>
                  <td>{colaborador.edad}</td>
                  <td>{colaborador.cargo}</td>
                  <td>{colaborador.telefono}</td>
                </tr>
              ))}
        </tbody>
      </Table>
    </>
  );
}

export default BasicExample;
