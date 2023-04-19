import "./NavBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import img from "../assets/world-news-logo.png";
export default function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="fixed-top">
        <Container className="d-flex ">
          <div>
            <Navbar.Brand href="/" className="customNavBarBrand">
              <img
                src={img}
                width="110"
                height="70"
                className="me-2"
                alt="React Bootstrap logo"
              />
              <Navbar.Brand className="title" href="/">
                World news
              </Navbar.Brand>
            </Navbar.Brand>
          </div>
          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/readLater">Read Later</Nav.Link>
                <Nav.Link href="/aboutUs">About Us</Nav.Link>
                <NavDropdown title="Channels" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/">Washington News</NavDropdown.Item>
                  <NavDropdown.Item href="/aljazeera">
                    Aljazeera News
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/bbcnews">BBC News</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </>
  );
}
