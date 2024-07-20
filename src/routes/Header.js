import { faCartShopping, faEye, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import { useNavigate } from "react-router";


function Header( {isScrolledPast} ) {
    let navigate = useNavigate();

    const goToLogin=()=> {
        navigate("/login");
    };

    const goToCart=()=> {
        navigate("/cart");
    };

    const goToViewed=()=> {
        navigate("/viewed");
    };

    const menuLeft = [
        "SM",
        "JYP",
        "YG",
        
    ];

    const menuRight = [
        {icon: <FontAwesomeIcon icon={faUser} />, text: ' 로그아웃', onclick: goToLogin  },
        {icon: <FontAwesomeIcon icon={faCartShopping} />, text: ' 장바구니', onclick: goToCart },
        {icon: <FontAwesomeIcon icon={faEye} />, text: ' 최근 본 상품', onclick:goToViewed },
        
    ];

    return (
        <>
            <div className="l-header__nav" style={{position:"fixed", zIndex:1,textAlign:"left", fontSize:'11px', fontFamily:'Helvetica_Bold,Arial,sans-serif', marginLeft:'14px', marginTop:'13px', display:'flex', justifyContent:'space-between', width:'100%'}}>
                <div className="left-nav">
                <div className={`l-header__logo ${isScrolledPast ? 'black-nav' : ''}`} >
                    <a href="/" className="l-header__link" aria-label="Saint laurent홈페이지로 이동">
                        All Goods
                    </a>
                </div>
                <div className="l-header__navcontainer" style={{height: 'calc(607px - var(--festivebannerheight, 0px))'}}>
                    <div id="mainmenu" className="c-nav__wrapper">
                        <nav className={`c-nav__container ${isScrolledPast ? 'black-nav' : ''}`} aria-label="메인 메뉴" role="navigation">
                            {menuLeft.map((menu) => (
                            <li><button>{menu}</button></li>
                            ))}
                        </nav>
                    </div>
                </div>
                </div>
                <div className="right-nav">
                    <div className="r-header__logo">
                        {/* 돋보기 검색기능 */}
                    </div>
                    <div className="r-header__navcontainer">
                        <div className="c-nav__wrapper">
                            <nav className={`c-nav__container ${isScrolledPast ? 'black-nav' : ''}`} aria-label="메인 메뉴" role="navigation">
                            {menuRight.map((item, index)=> (
                                <li>
                                    <button key={index} onClick={() => item.onclick(navigate)}>{item.icon}{item.text}</button>
                                </li>
                            ))}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            </>
    )
};

export default Header