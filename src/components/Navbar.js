import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Navbar.css";

export const Navbar = () => {
    return (
        <header className="p-3">
            <Container sticky="top">
                <Row>
                    <Col className='p-0'>
                        <h1 className="">Logo</h1>
                    </Col>
                    <Col>
                        <Nav className="justify-content-end p-0 m-0" variant="pills" activeKey="/home">
                            <Nav.Item>
                                <Nav.Link href="/home">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-1">Contacto</Nav.Link>
                            </Nav.Item>
                            <Nav />
                            <NavDropdown title="Mi Carro" id="nav-dropdown">
                                <NavDropdown.Item eventKey="4.1">Item 1</NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.2">Item 2</NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.3">Item 3</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item eventKey="4.4">Comprar</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}