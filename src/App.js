import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import bg from './bg_main.avif'
import ex from './data.js';
import data from "./data.js";
import {useState} from "react";
import React from "react";
import {Link, Outlet, Route, Routes, useNavigate} from "react-router-dom";
import Detail from "./routes/detail";
import Cart from "./routes/Cart";
import axios from "axios";

function App() {

    let [items] = useState(data);
    let navigate = useNavigate();
    let [stock, setStock] = useState([7, 8, 9]);


/*    // post 요청
    axios.post('요청 할 URL', {name: 'kim'})

    //
    let param = {id: 0, pass: "1231sd"}

    async function getAPI() {
        try {

        } catch (e) {

        }
    }*/
/*    axios({
        method: "get",
        url: "url",
        responseType: "type",
        data: JSON.stringify(param)
    }).then(function (res) {

    }).catch(function () {

    });

    // 동시에 여러 Ajax 요청 날리기
    Promise.all([axios.get('URL1'), axios.get('URL2')])
        .then()*/

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


            <Routes>
                <Route path="*" element={<div>404 페이지</div>}/>
                <Route path="/" element={
                    <>
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
                                        return (
                                            <Card item={item} index={index + 1}></Card>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </>
                }/>

                <Route path="/detail/:id" element={
                    <Context1.Provider value = {{stock, items}}>
                        <Detail/>
                    </Context1.Provider>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/about" element={<About/>}>
                    <Route path="member" element={<div>경영진 소개</div>}/>
                    <Route path="loc" element={<div>오시는길</div>}/>
                </Route>
                <Route path="/event" element={<Event/>}>
                    <Route path="one" element={<Birth_Coupon/>}/>
                    <Route path="two" element={<First_Order/>}/>
                </Route>
                {/*
                    1. /event/one 페이지 접속 시 생일 축하 쿠폰 이벤트 표시
                    2. /event/two 페이지 접속 시 첫 주문 배송비 무료 이벤트 표시

                */}
            </Routes>

            <button onClick={() => {
                axios.get("https://korea-webtoon-api.herokuapp.com/search?keyword=갓오브하이스쿨")
                    .then((data) => {
                        console.log(data); // 요청 성공시
                        let copy = {...items, ...data.data.webtoons}
                        // copy = [ 기존 array, 가져온 data ]
                        // [{}, {}, {}, {}, {}, {}]
                    }).catch(() => {
                    console.log("axios 요청 실패"); // 요청 실패시
                }).finally(() => {
                    // 요청 성공여부에 상관없이 항상 실행 할 코드
                })
            }}>ajax 요청
            </button>
        </div>
    );
}

function About() {
    return (
        <div>
            <h2>about 페이지</h2>
            <Outlet>
            </Outlet>
        </div>
    )
}

function Event() {
    return (
        <div>
            <h1>Event !!!</h1><br/>
            <Outlet>
            </Outlet><br/>
            <Button path="/event/one">생일 쿠폰</Button><br/><br/>
            <Button path="/event/two">첫 주문 할인 쿠폰</Button>
        </div>
    )
}

function Birth_Coupon() {
    return (
        <div>
            <h3>생일 축하합니다!</h3>
            <Outlet>
            </Outlet>
            <dl className="coupon">
                <dt>생일 쿠폰</dt>
                <dd>10% 할인</dd>
                <dd>기한 : 7일</dd>
            </dl>
        </div>
    )
}

function First_Order() {
    return (
        <div>
        <h3>첫 주문 감사 할인</h3>
            <Outlet>
            </Outlet>

            <dl className="coupon">
                <dt>첫 주문 쿠폰</dt>
                <dd>5% 할인</dd>
                <dd>기한 : 바로 사용</dd>
            </dl>
        </div>
    )
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

class Detail2 extends React.Component {
    componentDidMount() {
        // 컴포넌트가 로드되고 나서 실행할 코드
    }
    componentDidMount(prevProps, prevState, snapshot) {
        // 컴포넌트가 업데이트 되고 나서 실행할 코드
    }

    componentWillUnmount() {
        // 컴포넌트가 삭제되기전 실행할 코드
    }
}

export default App;
export let Context1 = React.createContext();