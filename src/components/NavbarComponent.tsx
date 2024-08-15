import { Container, Navbar } from "react-bootstrap";

export function NavbarComponent() {
  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <img
              alt=""
              src="/tankstellenlogo.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
            <h2>Spritpreisrechner</h2>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}
