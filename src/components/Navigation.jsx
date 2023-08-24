import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navigation.css";

function Navigation({ theme, changeTheme }) {
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-secondary font-monospace sticky-top fw-bolder"
      >
        <Container>
          <Navbar.Brand href="#home">Hundera Awoke</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-end gap-5  d-flex w-100">
              <Nav.Link href="#home" className="flex-item">
                Home
              </Nav.Link>
              <Nav.Link href="#about" className="flex-item">
                About
              </Nav.Link>
              <Nav.Link href="#services" className="flex-item">
                Services
              </Nav.Link>
              <Nav.Link href="#works" className="flex-item">
                Works
              </Nav.Link>
              <Nav.Link href="#blog" className="flex-item">
                Blog
              </Nav.Link>
              <div className="d-flex align-items-center">
                <input
                  type="checkbox"
                  name=""
                  onClick={changeTheme}
                  id="toggler"
                  className="ttt"
                  checked={theme == "dark"}
                />
                <label htmlFor="toggler" className="toggler"></label>
              </div>
              <div className="flex-item d-flex d-lg-none gap-5 icons-container">
                <a href="" className="text-black">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="" className="text-black">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="" className="text-black">
                  <i className="fa-brands fa-telegram"></i>
                </a>
                <a href="" className="text-black">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
