import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center overflow-auto"
      style={{ flexDirection: "column" }}
    >
      <div
        style={{
          width: "110%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "2%",
          backgroundColor: "#F33",
          justifyContent: "center",
        }}
      >
        <span className="text-light">Estamos atendendo</span>
        <span style={{ marginRight: "10px" }} />
      </div>

      <Row className="shadow " style={{ position: "relative" }}></Row>
    </Container>
  );
}

export default App;
