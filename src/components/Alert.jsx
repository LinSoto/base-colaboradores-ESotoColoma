import Alert from 'react-bootstrap/Alert';

function AlertComponent() {
  return (
    <>
        <Alert key="danger" variant="danger">
          Completa todos los campos!
        </Alert>
    </>
  );
}

export default AlertComponent;