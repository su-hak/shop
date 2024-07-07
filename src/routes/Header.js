import React from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

function Header() {
    return (
        <>
            <div className="l-header__nav" style={{position:"fixed", zIndex:1,textAlign:"left", fontSize:'11px', fontFamily:'Helvetica_Bold,Arial,sans-serif', marginLeft:'14px', marginTop:'13px', display:'flex', justifyContent:'space-between', width:'100%'}}>
                <div className="left-nav">
                <div className="l-header__logo" >
                    <a href="https://www.ysl.com/ko-kr" className="l-header__link" aria-label="Saint laurent홈페이지로 이동">
                        SAINT LAURENT
                    </a>
                </div>
                <div className="l-header__navcontainer" style={{height: 'calc(607px - var(--festivebannerheight, 0px))'}}>
                    <div id="mainmenu" className="c-nav__wrapper">
                        <nav className="c-nav__container" aria-label="메인 메뉴" role="navigation">
                            <li style={{marginBottom: '-7px'}}>
                                <button>
                                    여성쇼핑
                                </button>
                            </li>
                            <li>
                                <button>
                                    남성쇼핑
                                </button>
                            </li>
                            <li style={{margin:'7px 0'}}>
                                <button>
                                    SUMMER 24 HIGHLIGHT
                                </button>
                            </li>
                            <li style={{marginBottom: '-7px'}}>
                                <button>
                                    컬렉션
                                </button>
                            </li>
                            <li style={{marginBottom: '-7px'}}>
                                <button>
                                    LA MASION
                                </button>
                            </li>
                            <li style={{marginBottom: '-7px'}}>
                                <button>
                                    CAI GUO-QIANG
                                </button>
                            </li>
                            <li style={{marginBottom: '-7px'}}>
                                <button>
                                    SAINT LAURENT SELF
                                </button>
                            </li>
                            <li style={{marginBottom: '-7px'}}>
                                <button>
                                    SAINT LAURENT
                                </button>
                            </li>
                            <li style={{marginBottom: '-7px'}}>
                                <button>
                                    PRODUCTIONS
                                </button>
                            </li>
                            <li style={{marginBottom: '15px'}}>
                                <button>
                                    매장 위치 찾기
                                </button>
                            </li>
                            <li>
                                <button>
                                    RIVE DROITE
                                </button>
                            </li>
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
                            <nav className="c-nav__container" aria-label="메인 메뉴" role="navigation">
                            <li style={{marginBottom: '-3px'}}>
                                <button>
                                    장바구니
                                </button>
                            </li>
                            <li className="login-btn" style={{marginBottom: '-3px'}}>
                                <button>
                                    로그인
                                </button>
                            </li>
                            <li style={{marginBottom: '-3px'}}>
                                <button>
                                    고객 서비스
                                </button>
                            </li>
                            <li style={{marginBottom: '-3px'}}>
                                <button>
                                    지속 가능성
                                </button>
                            </li>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            </>
    )
};

export default Header