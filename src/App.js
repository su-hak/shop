import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import bg from './bg_main.avif'
import ex from './data.js';
import data from "./data.js";
import {useState} from "react";
import React from "react";

function App() {

    let [items] = useState(data);
    return (
        <div className="App">
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

            <div className="main-bg"></div>

            <div className="container">
                <div className="row">
                    {/*
                    1. 상품 목록을 컴포넌트화 하기
                    2. 컴포넌트 > 데이터 바인딩
                    3. 3개 상품 map으로 반복
                    */}

                    {
                        items.map((item, index) => {
                            return(
                                <Card item={item} index={index+1}></Card>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

function Card(props) {
    console.log(props.item.title);
    return (
        <div className="col-md-3">
            <div className="image-box">
                <img className="image-thumbnail" src={process.env.PUBLIC_URL+'/item'+(props.index)+ '.jpg'}></img>
            </div>

            <h6>{props.item.title}</h6>
        </div>
    )
}

export default App;
