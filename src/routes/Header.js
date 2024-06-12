import React from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

function Header() {
    return(
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home" className="main-title">SAINT LAURENT</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">여성 쇼핑</Nav.Link>
                            <Nav.Link href="#link">남성 쇼핑</Nav.Link>
                            <NavDropdown title="카테고리" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">컬렉션</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    LA MAISON
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">CAI GUO-QIANG</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="#action/3.4">
                                    SAINT LAURENT SELF
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">
                                    SAINT LAURENT
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">
                                    PRODUCTIONS
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">
                                    매장 위치 찾기
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;