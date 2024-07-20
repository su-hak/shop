import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useEffect, useState } from "react";
import React from "react";
import { Link, Outlet, BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Detail from "./routes/detail";
import Header from "./routes/Header";
import Footer from "./routes/Footer";
import FooterScript from "./routes/FooterScript";
import ProductAll from './page/ProductAll.js';
import Login from './page/Login.js';
import Viewed from './routes/Viewed.js';
import Cart from "./routes/Cart";
import ProductDetail from './page/ProductDetail.js';
import Pay from './page/Pay.js';
import PrivateRoute from './routes/PrivateRoute.js';
import Join from './page/Join.js';



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
    const [authenticate, setAuthenticate] = useState(false); // true=로그인 성공, false=로그인 실패
    const [isScrolledPast, setIsScrolledPast] = useState(false);
    const [isHome, setIsHome] = useState(false);
    const location = useLocation();

    useEffect(()=>{
        console.log("aaaa", authenticate)
    }, [authenticate])

    useEffect(() => {
        if (location.pathname !== "/") {
            setIsHome(false);
            setIsScrolledPast(false);
        }
    }, [location.pathname]);

    return (
        <div className="App">
            <Header isScrolledPast={isScrolledPast} isHome={isHome}/>
                <Routes>
                    <Route path="/" element={<ProductAll setIsScrolledPast={setIsScrolledPast} setIsHome={setIsHome}/>} />
                    <Route path='/products/:id' element={<ProductDetail />} />
                    <Route path="*" element={<div>404 페이지</div>} />

                    <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>} />
                    <Route path="/join" element={<Join />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/viewed" element={<Viewed />} />
                    <Route path="/pay" element={<PrivateRoute authenticate={authenticate}/>} />

                    <Route path="/about" element={<About />}>
                        <Route path="member" element={<div>경영진 소개</div>} />
                        <Route path="loc" element={<div>오시는길</div>} />
                    </Route>
                    <Route path="/event" element={<Event />}>
                        <Route path="one" element={<Birth_Coupon />} />
                        <Route path="two" element={<First_Order />} />
                    </Route>
                </Routes>
            <Footer />
            <FooterScript />
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
            <h1>Event !!!</h1><br />
            <Outlet>
            </Outlet><br />
            <Button path="/event/one">생일 쿠폰</Button><br /><br />
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