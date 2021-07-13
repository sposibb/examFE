import styles from "./TopHeader.module.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const TopHeader = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Brand href="#home">
        {" "}
        <img
          alt=""
          src="./images/logo.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        Birthday Service®
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#how_it_works">How it works</Nav.Link>
          <NavDropdown title="Who we are" id="basic-nav-dropdown">
            <NavDropdown.Item href="#about_us">About Us</NavDropdown.Item>
            <NavDropdown.Item href="#what_we_do">What we do</NavDropdown.Item>
            <NavDropdown.Item href="#contact_us">Contact us</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#get_help">Get Help</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopHeader;
