import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {useState} from "react";
import React from "react";
import {Link, Outlet, HashRouter as Router, Route, Routes, useNavigate, BrowserRouter} from "react-router-dom";
import Detail from "./routes/detail";
import Cart from "./routes/Cart";
import axios from "axios";
import Header from "./routes/Header";
import Footer from "./routes/Footer";
import FooterScript from "./routes/FooterScript";
import ProductAll from './page/ProductAll.js';
import Login from './page/Login.js';
import ProductDetail from './page/ProductDetail.js';


// 1. 전체 상품 페이지, 로그인, 상품 상세 페이지
// 1-1. 네비게이션 바
// 2. 전체 상품 페이지에서는 전체 상품을 볼 수 있다.
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
// 4. 상품 디테일을 눌렀으나, 로그인이 안 되어있을 경우에는 로그인 페이지가 먼저 나온다..
// 5. 로그인이 되어있을 경우엔 상품 디테일 페이지를 볼 수 있다.
// 6. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
// 7. 로그 아웃이 되면 상품 디테일 페이지를 볼 수 없다, 다시 로그인 페이지가 보인다.
// 8. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다.
// 9. 상품을 검색할 수 있다.

function App() {

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
            <Header/>
            <Routes>
                <Route path='/' element={<ProductAll/>}/>
                <Route path='login' element={<Login/>}/>
                <Route path='detail' element={<ProductDetail/>}/>
                <Route path="*" element={<div>404 페이지</div>}/>
                
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/about" element={<About/>}>
                    <Route path="member" element={<div>경영진 소개</div>}/>
                    <Route path="loc" element={<div>오시는길</div>}/>
                </Route>
                <Route path="/event" element={<Event/>}>
                    <Route path="one" element={<Birth_Coupon/>}/>
                    <Route path="two" element={<First_Order/>}/>
                </Route>

                    {/*1. /event/one 페이지 접속 시 생일 축하 쿠폰 이벤트 표시
                    2. /event/two 페이지 접속 시 첫 주문 배송비 무료 이벤트 표시*/}

            </Routes>
            <Footer/>
            <FooterScript/>

            {/*<button onClick={() => {
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
            </button>*/}
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