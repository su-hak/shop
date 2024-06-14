import React from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

function Header() {
    return (
        <>
            <div className="l-header__nav" style={{position:"fixed", zIndex:1,textAlign:"left", fontSize:'11px', fontFamily:'Helvetica_Bold,Arial,sans-serif', marginLeft:'14px', marginTop:'13px'}}>
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
                            </li >
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
            {/*<Navbar expand="lg" className="bg-body-tertiary">
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
            </Navbar>*/}

            {/* <div className="l-header__nav">
                <div className="l-header__logo" data-ref="headerLogo">
                    <a href="/ko-kr" className="l-header__link" data-qa="Home-Show" title="Saint laurent홈페이지로 이동"
                       aria-label="Saint laurent홈페이지로 이동">
                        <img src="https://www.ysl.com/on/demandware.static/-/Library-Sites-Library-SLP/default/dw92d63088/images/logo.svg"
                             alt="Saint laurent홈페이지로 이동"/>
                    </a>
                </div>

                <div data-ref="menuContainer" className="l-header__navcontainer"
                     style={{height: 'calc(607px - var(--festivebannerheight, 0px))'}}>
                    <div data-ref="menu" id="mainmenu" className="c-nav__wrapper">
                        <nav className="c-nav__container" aria-label="메인 메뉴" role="navigation">
                            <p role="heading" aria-level="1" className="u-sronly u-show--none@lg">
                                메뉴
                            </p>
                            <div data-ref="panel" className="c-nav__panel" data-context="YSL"
                                 id="navigation-1718335093617-yl3x8wmrl">

                                <ul data-ref="navlist" className="c-nav__list c-nav__level1">

                                    <li data-ref="item" className="c-nav__item" data-cgid="shop-women"
                                        data-level1="true" data-haschildren="true">

                                        <button data-ref="link" className="c-nav__link "
                                                id="navigation-1718335093617-zyr1taeoe"
                                                aria-controls="navigation-1718335093617-64p3mixwm"
                                                aria-expanded="false">

                                            여성 쇼핑


                                        </button>

                                        <div data-ref="subnav" className="c-nav__subnav"
                                             id="navigation-1718335093617-64p3mixwm" aria-hidden="true">
                                            <ul className="c-nav__list c-nav__level2" data-ref="navlist">

                                                <li data-ref="item" className="c-nav__item" data-level2="true"
                                                    data-cgid="new-arrivals-women-summer">

                                                    <a data-ref="link" className="c-nav__link "
                                                       data-cgid="new-arrivals-women-summer" data-fdid=""
                                                       href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/new---summer"
                                                       id="navigation-1718335093618-3qcx5ojjk">

                                                        NEW - SUMMER 24


                                                    </a>


                                                </li>

                                                <li data-ref="item" className="c-nav__item" data-level2="true"
                                                    data-cgid="new-arrivals-women-spring">

                                                    <a data-ref="link"
                                                       className="c-nav__link c-nav__link--withlinebreak"
                                                       data-cgid="new-arrivals-women-spring" data-fdid=""
                                                       href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/new---spring"
                                                       id="navigation-1718335093618-65znwsnqe">

                                                        NEW - SPRING 24


                                                    </a>


                                                </li>

                                                <li data-ref="item" className="c-nav__item" data-level2="true"
                                                    data-cgid="gifts-selection-for-her">

                                                    <a data-ref="link"
                                                       className="c-nav__link c-nav__link--withlinebreak"
                                                       data-cgid="gifts-selection-for-her" data-fdid=""
                                                       href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%EA%B7%B8%EB%85%80%EB%A5%BC-%EC%9C%84%ED%95%9C"
                                                       id="navigation-1718335093618-1k296z9lg">

                                                        그녀를 위한


                                                    </a>


                                                </li>

                                                <li data-ref="item" className="c-nav__item" data-level2="true"
                                                    data-cgid="new-resort-women">

                                                    <a data-ref="link"
                                                       className="c-nav__link c-nav__link--withlinebreak"
                                                       data-cgid="new-resort-women" data-fdid=""
                                                       href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/resort"
                                                       id="navigation-1718335093618-gbscngzn5">

                                                        RESORT


                                                    </a>


                                                </li>

                                                <li data-ref="item" className="c-nav__item" data-level2="true"
                                                    data-cgid="handbags-women" data-haschildren="true">

                                                    <button data-ref="link" className="c-nav__link "
                                                            id="navigation-1718335093618-c2lkhz6ls"
                                                            aria-controls="navigation-1718335093618-qtkbimqx0"
                                                            aria-expanded="false">

                                                        핸드백


                                                    </button>


                                                    <div className="c-nav__subnav" data-ref="subnav"
                                                         id="navigation-1718335093618-qtkbimqx0" aria-hidden="true">
                                                        <ul data-ref="navlist" className="c-nav__list c-nav__level3">

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true"
                                                                data-cgid="new-arrivals-handbags-women">

                                                                <a data-ref="link"
                                                                   className="c-nav__link c-nav__link--withlinebreak"
                                                                   data-cgid="new-arrivals-handbags-women" data-fdid=""
                                                                   href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%ED%95%B8%EB%93%9C%EB%B0%B1/%EC%8B%A0%EC%83%81%ED%92%88"
                                                                   id="navigation-1718335093618-67skvqkrf">

                                                                    신상품


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true"
                                                                data-cgid="saint-laurent-jamie-page-selection">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="saint-laurent-jamie-page-selection"
                                                                   data-fdid="saint-laurent-jamie-pochon"
                                                                   href="https://www.ysl.com/ko-kr/displayname-saint-laurent-jamie-pochon"
                                                                   id="navigation-1718335093618-clclmsmy6">

                                                                    JAMIE


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true"
                                                                data-cgid="calypso-handbags-women-page">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="calypso-handbags-women-page"
                                                                   data-fdid="saint-laurent-calypso"
                                                                   href="https://www.ysl.com/ko-kr/displayname-saint-laurent-calypso"
                                                                   id="navigation-1718335093618-kufmpggj4">

                                                                    CALYPSO


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="le-5A7-handbags-women">

                                                                <a data-ref="link"
                                                                   className="c-nav__link c-nav__link--withlinebreak"
                                                                   data-cgid="le-5A7-handbags-women" data-fdid=""
                                                                   href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%ED%95%B8%EB%93%9C%EB%B0%B1/le-5-a-7"
                                                                   id="navigation-1718335093618-b4l69414v">

                                                                    LE 5 à 7


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="by-line-handbags-women"
                                                                data-haschildren="true">

                                                                <button data-ref="link"
                                                                        className="c-nav__link c-nav__link--withlinebreak"
                                                                        id="navigation-1718335093618-bl68i1rlr"
                                                                        aria-controls="navigation-1718335093618-kaekypbhk"
                                                                        aria-expanded="false">

                                                                    다른 제품 라인


                                                                </button>


                                                                <div className="c-nav__subnav" data-ref="subnav"
                                                                     id="navigation-1718335093618-kaekypbhk"
                                                                     aria-hidden="true">
                                                                    <ul data-ref="navlist"
                                                                        className="c-nav__list c-nav__level4">

                                                                        <li data-ref="item"
                                                                            className="c-nav__item c-nav__item--withslot"
                                                                            data-level4="true"
                                                                            data-cgid="college-handbags-women">

                                                                            <a data-ref="link" className="c-nav__link "
                                                                               data-cgid="college-handbags-women"
                                                                               data-fdid=""
                                                                               href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%ED%95%B8%EB%93%9C%EB%B0%B1/%EB%9D%BC%EC%9D%B8/college"
                                                                               id="navigation-1718335093618-whodkutm5">

                                                                                COLLEGE


                                                                            </a>


                                                                        </li>

                                                                        <li data-ref="item"
                                                                            className="c-nav__item c-nav__item--withslot"
                                                                            data-level4="true"
                                                                            data-cgid="envelope-handbags-women">

                                                                            <a data-ref="link" className="c-nav__link "
                                                                               data-cgid="envelope-handbags-women"
                                                                               data-fdid=""
                                                                               href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%ED%95%B8%EB%93%9C%EB%B0%B1/%EB%9D%BC%EC%9D%B8/envelope"
                                                                               id="navigation-1718335093619-2kcoh15yk">

                                                                                ENVELOPE


                                                                            </a>


                                                                        </li>

                                                                        <li data-ref="item"
                                                                            className="c-nav__item c-nav__item--withslot"
                                                                            data-level4="true"
                                                                            data-cgid="gaby-handbags-women">

                                                                            <a data-ref="link" className="c-nav__link "
                                                                               data-cgid="gaby-handbags-women"
                                                                               data-fdid=""
                                                                               href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%ED%95%B8%EB%93%9C%EB%B0%B1/%EB%9D%BC%EC%9D%B8/gaby"
                                                                               id="navigation-1718335093619-1zru3xgz4">

                                                                                GABY


                                                                            </a>


                                                                        </li>

                                                                        <li data-ref="item"
                                                                            className="c-nav__item c-nav__item--withslot"
                                                                            data-level4="true"
                                                                            data-cgid="icare-handbags-women">

                                                                            <a data-ref="link" className="c-nav__link "
                                                                               data-cgid="icare-handbags-women"
                                                                               data-fdid=""
                                                                               href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%ED%95%B8%EB%93%9C%EB%B0%B1/%EB%9D%BC%EC%9D%B8/icare"
                                                                               id="navigation-1718335093619-2rxs3f2us">

                                                                                ICARE


                                                                            </a>


                                                                        </li>

                                                                        <li data-ref="item"
                                                                            className="c-nav__item c-nav__item--withslot"
                                                                            data-level4="true"
                                                                            data-cgid="kate-handbags-women">

                                                                            <a data-ref="link" className="c-nav__link "
                                                                               data-cgid="kate-handbags-women"
                                                                               data-fdid=""
                                                                               href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%ED%95%B8%EB%93%9C%EB%B0%B1/%EB%9D%BC%EC%9D%B8/kate"
                                                                               id="navigation-1718335093619-knjr6f1ui">

                                                                                KATE


                                                                            </a>


                                                                        </li>

                                                                        <li data-ref="item"
                                                                            className="c-nav__item c-nav__item--withslot"
                                                                            data-level4="true"
                                                                            data-cgid="le-37-handbags-women">

                                                                            <a data-ref="link" className="c-nav__link "
                                                                               data-cgid="le-37-handbags-women"
                                                                               data-fdid=""
                                                                               href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%ED%95%B8%EB%93%9C%EB%B0%B1/%EB%9D%BC%EC%9D%B8/le-37-handbags"
                                                                               id="navigation-1718335093619-gyxh7imbc">

                                                                                LE 37


                                                                            </a>


                                                                        </li>

                                                                        <li data-ref="item"
                                                                            className="c-nav__item c-nav__item--withslot"
                                                                            data-level4="true"
                                                                            data-cgid="lou-handbags-women">

                                                                            <a data-ref="link" className="c-nav__link "
                                                                               data-cgid="lou-handbags-women"
                                                                               data-fdid=""
                                                                               href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%ED%95%B8%EB%93%9C%EB%B0%B1/%EB%9D%BC%EC%9D%B8/lou"
                                                                               id="navigation-1718335093619-frt0aqrf8">

                                                                                LOU


                                                                            </a>


                                                                        </li>

                                                                        <li data-ref="item"
                                                                            className="c-nav__item c-nav__item--withslot"
                                                                            data-level4="true"
                                                                            data-cgid="loulou-handbags-women">

                                                                            <a data-ref="link" className="c-nav__link "
                                                                               data-cgid="loulou-handbags-women"
                                                                               data-fdid=""
                                                                               href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%ED%95%B8%EB%93%9C%EB%B0%B1/%EB%9D%BC%EC%9D%B8/loulou"
                                                                               id="navigation-1718335093619-rfdf12jv6">

                                                                                LOULOU


                                                                            </a>


                                                                        </li>

                                                                        <li data-ref="item"
                                                                            className="c-nav__item c-nav__item--withslot"
                                                                            data-level4="true"
                                                                            data-cgid="manhattan-handbags-women">

                                                                            <a data-ref="link" className="c-nav__link "
                                                                               data-cgid="manhattan-handbags-women"
                                                                               data-fdid=""
                                                                               href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%ED%95%B8%EB%93%9C%EB%B0%B1/%EB%9D%BC%EC%9D%B8/manhattan"
                                                                               id="navigation-1718335093619-ebl8tjmgc">

                                                                                MANHATTAN


                                                                            </a>


                                                                        </li>

                                                                        <li data-ref="item"
                                                                            className="c-nav__item c-nav__item--withslot"
                                                                            data-level4="true"
                                                                            data-cgid="niki-handbags-women">

                                                                            <a data-ref="link" className="c-nav__link "
                                                                               data-cgid="niki-handbags-women"
                                                                               data-fdid=""
                                                                               href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%ED%95%B8%EB%93%9C%EB%B0%B1/%EB%9D%BC%EC%9D%B8/niki"
                                                                               id="navigation-1718335093619-b0h5blrqs">

                                                                                NIKI


                                                                            </a>


                                                                        </li>

                                                                        <li data-ref="item"
                                                                            className="c-nav__item c-nav__item--withslot"
                                                                            data-level4="true"
                                                                            data-cgid="puffer-handbags-women">

                                                                            <a data-ref="link" className="c-nav__link "
                                                                               data-cgid="puffer-handbags-women"
                                                                               data-fdid=""
                                                                               href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%ED%95%B8%EB%93%9C%EB%B0%B1/%EB%9D%BC%EC%9D%B8/puffer"
                                                                               id="navigation-1718335093619-4funi06eu">

                                                                                PUFFER


                                                                            </a>


                                                                        </li>

                                                                        <li data-ref="item"
                                                                            className="c-nav__item c-nav__item--withslot"
                                                                            data-level4="true"
                                                                            data-cgid="sac-de-jour-handbags-women">

                                                                            <a data-ref="link" className="c-nav__link "
                                                                               data-cgid="sac-de-jour-handbags-women"
                                                                               data-fdid=""
                                                                               href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%ED%95%B8%EB%93%9C%EB%B0%B1/%EB%9D%BC%EC%9D%B8/sac-de-jour"
                                                                               id="navigation-1718335093619-381b2hnd4">

                                                                                SAC DE JOUR


                                                                            </a>


                                                                        </li>

                                                                        <li data-ref="item"
                                                                            className="c-nav__item c-nav__item--withslot"
                                                                            data-level4="true"
                                                                            data-cgid="sunset-handbags-women">

                                                                            <a data-ref="link" className="c-nav__link "
                                                                               data-cgid="sunset-handbags-women"
                                                                               data-fdid=""
                                                                               href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%ED%95%B8%EB%93%9C%EB%B0%B1/%EB%9D%BC%EC%9D%B8/sunset"
                                                                               id="navigation-1718335093619-p2glarglt">

                                                                                SUNSET


                                                                            </a>


                                                                        </li>

                                                                    </ul>
                                                                </div>

                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="crossbody-handbags-women">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="crossbody-handbags-women" data-fdid=""
                                                                   href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%ED%95%B8%EB%93%9C%EB%B0%B1/%ED%81%AC%EB%A1%9C%EC%8A%A4%EB%B0%94%EB%94%94-%EB%B0%B1"
                                                                   id="navigation-1718335093619-vft2houlx">

                                                                    크로스바디 백


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true"
                                                                data-cgid="shoulder-bags-handbags-women">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="shoulder-bags-handbags-women" data-fdid=""
                                                                   href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%ED%95%B8%EB%93%9C%EB%B0%B1/%EC%88%84%EB%8D%94-%EB%B0%B1"
                                                                   id="navigation-1718335093619-7uarij8jc">

                                                                    숄더 백


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true"
                                                                data-cgid="top-handles-handbags-women">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="top-handles-handbags-women" data-fdid=""
                                                                   href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%ED%95%B8%EB%93%9C%EB%B0%B1/%ED%83%91-%ED%95%B8%EB%93%A4%EB%B0%B1"
                                                                   id="navigation-1718335093619-1kzw3al6c">

                                                                    탑 핸들백


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="maxi-handbags-women">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="maxi-handbags-women" data-fdid=""
                                                                   href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%ED%95%B8%EB%93%9C%EB%B0%B1/%EB%A7%A5%EC%8B%9C-%EB%B0%B1"
                                                                   id="navigation-1718335093619-xy96kdb34">

                                                                    맥시 백


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="view-all-mini-bags-women">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="view-all-mini-bags-women" data-fdid=""
                                                                   href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%ED%95%B8%EB%93%9C%EB%B0%B1/%EB%AF%B8%EB%8B%88%EB%B0%B1"
                                                                   id="navigation-1718335093619-r160r21t1">

                                                                    미니백


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true"
                                                                data-cgid="satchel-and-bucket-bags-handbags-women">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="satchel-and-bucket-bags-handbags-women"
                                                                   data-fdid=""
                                                                   href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%ED%95%B8%EB%93%9C%EB%B0%B1/%EC%82%AC%EC%B2%BC-%EB%98%90%EB%8A%94-%EB%B2%84%ED%82%B7%EB%B0%B1"
                                                                   id="navigation-1718335093620-lun4sguuj">

                                                                    사첼 또는 버킷백


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="tote-bags-handbags-women">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="tote-bags-handbags-women" data-fdid=""
                                                                   href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%ED%95%B8%EB%93%9C%EB%B0%B1/%ED%86%A0%ED%8A%B8%EB%B0%B1"
                                                                   id="navigation-1718335093620-0v6w2e0i8">

                                                                    토트백


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true"
                                                                data-cgid="clutch-and-minaudieres-handbags-women">

                                                                <a data-ref="link"
                                                                   className="c-nav__link c-nav__link--withlinebreak"
                                                                   data-cgid="clutch-and-minaudieres-handbags-women"
                                                                   data-fdid=""
                                                                   href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%ED%95%B8%EB%93%9C%EB%B0%B1/%ED%81%B4%EB%9F%AC%EC%B9%98"
                                                                   id="navigation-1718335093620-ynv7iy1gs">

                                                                    클러치 및 이브닝


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="view-all-handbags-women">

                                                                <a data-ref="link"
                                                                   className="c-nav__link c-nav__link--withlinebreak"
                                                                   data-cgid="view-all-handbags-women" data-fdid=""
                                                                   href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%ED%95%B8%EB%93%9C%EB%B0%B1/%ED%95%B8%EB%93%9C%EB%B0%B1-%EB%AA%A8%EB%91%90-%EB%B3%B4%EA%B8%B0"
                                                                   id="navigation-1718335093620-gvdeip39o">

                                                                    핸드백 모두 보기


                                                                </a>


                                                            </li>

                                                        </ul>
                                                    </div>


                                                </li>

                                                <li data-ref="item" className="c-nav__item" data-level2="true"
                                                    data-cgid="slg-women" data-haschildren="true">

                                                    <button data-ref="link" className="c-nav__link "
                                                            id="navigation-1718335093620-515wxtzvy"
                                                            aria-controls="navigation-1718335093620-3ti7uwdjy"
                                                            aria-expanded="false">

                                                        가죽 소품


                                                    </button>


                                                    <div className="c-nav__subnav" data-ref="subnav"
                                                         id="navigation-1718335093620-3ti7uwdjy" aria-hidden="true">
                                                        <ul data-ref="navlist" className="c-nav__list c-nav__level3">

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="wallets-on-chain-women">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="wallets-on-chain-women" data-fdid=""
                                                                   href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%EA%B0%80%EC%A3%BD-%EC%86%8C%ED%92%88/%EC%B2%B4%EC%9D%B8-%EC%A7%80%EA%B0%91"
                                                                   id="navigation-1718335093620-fkxx0g1lr">

                                                                    체인 지갑


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="pouches-and-cases-women">

                                                                <a data-ref="link"
                                                                   className="c-nav__link c-nav__link--withlinebreak"
                                                                   data-cgid="pouches-and-cases-women" data-fdid=""
                                                                   href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%EA%B0%80%EC%A3%BD-%EC%86%8C%ED%92%88/%ED%8C%8C%EC%9A%B0%EC%B9%98-and-%EC%BC%80%EC%9D%B4%EC%8A%A4"
                                                                   id="navigation-1718335093620-54qm3opbm">

                                                                    파우치


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="card-cases-women">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="card-cases-women" data-fdid=""
                                                                   href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%EA%B0%80%EC%A3%BD-%EC%86%8C%ED%92%88/%EC%B9%B4%EB%93%9C-%EC%BC%80%EC%9D%B4%EC%8A%A4"
                                                                   id="navigation-1718335093620-lwi1qkzz6">

                                                                    카드 케이스


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="wallets-women">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="wallets-women" data-fdid=""
                                                                   href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%EA%B0%80%EC%A3%BD-%EC%86%8C%ED%92%88/%EC%A7%80%EA%B0%91"
                                                                   id="navigation-1718335093620-1bitlwfls">

                                                                    지갑


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true"
                                                                data-cgid="high-tech-and-travel-accessories">

                                                                <a data-ref="link"
                                                                   className="c-nav__link c-nav__link--withlinebreak"
                                                                   data-cgid="high-tech-and-travel-accessories"
                                                                   data-fdid=""
                                                                   href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%EA%B0%80%EC%A3%BD-%EC%86%8C%ED%92%88/high-tech-and-travel"
                                                                   id="navigation-1718335093620-ebcnwbbu3">

                                                                    스몰 액세서리


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="view-all-slg-women">

                                                                <a data-ref="link"
                                                                   className="c-nav__link c-nav__link--withlinebreak"
                                                                   data-cgid="view-all-slg-women" data-fdid=""
                                                                   href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%EA%B0%80%EC%A3%BD-%EC%86%8C%ED%92%88/%EA%B0%80%EC%A3%BD-%EC%86%8C%ED%92%88-%EB%AA%A8%EB%91%90-%EB%B3%B4%EA%B8%B0"
                                                                   id="navigation-1718335093620-bdnjuly1y">

                                                                    가죽 소품 모두 보기


                                                                </a>


                                                            </li>

                                                        </ul>
                                                    </div>


                                                </li>

                                                <li data-ref="item" className="c-nav__item" data-level2="true"
                                                    data-cgid="ready-to-wear-women" data-haschildren="true">

                                                    <button data-ref="link" className="c-nav__link "
                                                            id="navigation-1718335093620-9mkc9t4c8"
                                                            aria-controls="navigation-1718335093620-clrsr2mlh"
                                                            aria-expanded="false">

                                                        레디 투 웨어


                                                    </button>


                                                    <div className="c-nav__subnav" data-ref="subnav"
                                                         id="navigation-1718335093620-clrsr2mlh" aria-hidden="true">
                                                        <ul data-ref="navlist" className="c-nav__list c-nav__level3">

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="women-summer-24-looks">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="women-summer-24-looks" data-fdid=""
                                                                   href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%EB%A0%88%EB%94%94-%ED%88%AC-%EC%9B%A8%EC%96%B4/summer-24-looks"
                                                                   id="navigation-1718335093620-rjzusvpz3">

                                                                    SUMMER 24 LOOKS


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="w-spring-24-looks">

                                                                <a data-ref="link"
                                                                   className="c-nav__link c-nav__link--withlinebreak"
                                                                   data-cgid="w-spring-24-looks" data-fdid=""
                                                                   href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%EB%A0%88%EB%94%94-%ED%88%AC-%EC%9B%A8%EC%96%B4/spring-24-looks-1"
                                                                   id="navigation-1718335093620-iyth48x2i">

                                                                    SPRING 24 LOOKS


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true"
                                                                data-cgid="jackets-and-trousers-women">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="jackets-and-trousers-women" data-fdid=""
                                                                   href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%EB%A0%88%EB%94%94-%ED%88%AC-%EC%9B%A8%EC%96%B4/%EC%9E%AC%ED%82%B7-%EB%B0%8F-%ED%8C%AC%EC%B8%A0"
                                                                   id="navigation-1718335093620-iw5lr71gr">

                                                                    재킷 및 팬츠


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="smoking-women">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="smoking-women" data-fdid=""
                                                                   href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%EB%A0%88%EB%94%94-%ED%88%AC-%EC%9B%A8%EC%96%B4/smoking-women"
                                                                   id="navigation-1718335093620-enoaecqw5">

                                                                    SMOKING


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="dresses-and-skirts-women">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="dresses-and-skirts-women" data-fdid=""
                                                                   href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%EB%A0%88%EB%94%94-%ED%88%AC-%EC%9B%A8%EC%96%B4/%EB%93%9C%EB%A0%88%EC%8A%A4-and-%EC%8A%A4%EC%BB%A4%ED%8A%B8"
                                                                   id="navigation-1718335093620-rhcwt48jp">

                                                                    드레스


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="skirts-women">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="skirts-women" data-fdid=""
                                                                   href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%EB%A0%88%EB%94%94-%ED%88%AC-%EC%9B%A8%EC%96%B4/%EC%8A%A4%EC%BB%A4%ED%8A%B8"
                                                                   id="navigation-1718335093621-1mgtdzs06">

                                                                    스커트


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="jumpsuits-women">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="jumpsuits-women" data-fdid=""
                                                                   href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%EB%A0%88%EB%94%94-%ED%88%AC-%EC%9B%A8%EC%96%B4/jumpsuits"
                                                                   id="navigation-1718335093621-j8lr8zhdp">

                                                                    JUMPSUITS


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="shirts-and-blouses-women">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="shirts-and-blouses-women" data-fdid=""
                                                                   href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%EB%A0%88%EB%94%94-%ED%88%AC-%EC%9B%A8%EC%96%B4/%EC%85%94%EC%B8%A0"
                                                                   id="navigation-1718335093621-z25w8hu1d">

                                                                    SHIRTS AND TOPS


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="lingerie-women">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="lingerie-women" data-fdid=""
                                                                   href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%EB%A0%88%EB%94%94-%ED%88%AC-%EC%9B%A8%EC%96%B4/%EB%9E%80%EC%A0%9C%EB%A6%AC"
                                                                   id="navigation-1718335093621-mx4d2gf96">

                                                                    LINGERIE AND SWIMWEAR


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="denim-women">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="denim-women" data-fdid=""
                                                                   href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%EB%A0%88%EB%94%94-%ED%88%AC-%EC%9B%A8%EC%96%B4/%EB%8D%B0%EB%8B%98"
                                                                   id="navigation-1718335093621-2gm5zn5dn">

                                                                    데님


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true"
                                                                data-cgid="tshirts-and-sweatshirts-women">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="tshirts-and-sweatshirts-women"
                                                                   data-fdid=""
                                                                   href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%EB%A0%88%EB%94%94-%ED%88%AC-%EC%9B%A8%EC%96%B4/%ED%8B%B0%EC%85%94%EC%B8%A0-and-%EC%8A%A4%EC%9B%BB%EC%85%94%EC%B8%A0"
                                                                   id="navigation-1718335093621-p1w0bg5do">

                                                                    티셔츠 &amp; 스웻셔츠


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="knitwear-women">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="knitwear-women" data-fdid=""
                                                                   href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%EB%A0%88%EB%94%94-%ED%88%AC-%EC%9B%A8%EC%96%B4/%EB%8B%88%ED%8A%B8%EC%9B%A8%EC%96%B4"
                                                                   id="navigation-1718335093621-8goboebzh">

                                                                    니트웨어


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="leather-and-fur-women">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="leather-and-fur-women" data-fdid=""
                                                                   href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%EB%A0%88%EB%94%94-%ED%88%AC-%EC%9B%A8%EC%96%B4/%EB%A0%88%EB%8D%94"
                                                                   id="navigation-1718335093621-vfvd5h57y">

                                                                    레더


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="outerwear-women">

                                                                <a data-ref="link"
                                                                   className="c-nav__link c-nav__link--withlinebreak"
                                                                   data-cgid="outerwear-women" data-fdid=""
                                                                   href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%EB%A0%88%EB%94%94-%ED%88%AC-%EC%9B%A8%EC%96%B4/%EC%95%84%EC%9A%B0%ED%84%B0%EC%9B%A8%EC%96%B4"
                                                                   id="navigation-1718335093621-rotq4ahbe">

                                                                    Coats


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="view-all-ready-to-wear">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="view-all-ready-to-wear" data-fdid=""
                                                                   href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%EB%A0%88%EB%94%94-%ED%88%AC-%EC%9B%A8%EC%96%B4/%EB%A0%88%EB%94%94-%ED%88%AC-%EC%9B%A8%EC%96%B4-%EB%AA%A8%EB%91%90-%EB%B3%B4%EA%B8%B0"
                                                                   id="navigation-1718335093621-3l2zl7gnx">

                                                                    레디 투 웨어 모두 보기


                                                                </a>


                                                            </li>

                                                        </ul>
                                                    </div>


                                                </li>

                                                <li data-ref="item" className="c-nav__item" data-level2="true"
                                                    data-cgid="shoes-women" data-haschildren="true">

                                                    <button data-ref="link" className="c-nav__link "
                                                            id="navigation-1718335093621-kommzn37g"
                                                            aria-controls="navigation-1718335093621-y90n15w2x"
                                                            aria-expanded="false">

                                                        슈즈


                                                    </button>


                                                    <div className="c-nav__subnav" data-ref="subnav"
                                                         id="navigation-1718335093621-y90n15w2x" aria-hidden="true">
                                                        <ul data-ref="navlist" className="c-nav__list c-nav__level3">

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="new-arrivals-shoes">

                                                                <a data-ref="link"
                                                                   className="c-nav__link c-nav__link--withlinebreak"
                                                                   data-cgid="new-arrivals-shoes" data-fdid=""
                                                                   href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%EC%8A%88%EC%A6%88/%EC%8B%A0%EC%83%81%ED%92%88"
                                                                   id="navigation-1718335093621-8l4diw7u8">

                                                                    신상품


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="flats-women">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="flats-women" data-fdid=""
                                                                   href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%EC%8A%88%EC%A6%88/%ED%94%8C%EB%9E%AB"
                                                                   id="navigation-1718335093621-tw18hneli">

                                                                    플랫


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true"
                                                                data-cgid="loafers-and-derbies-women">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="loafers-and-derbies-women" data-fdid=""
                                                                   href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%EC%8A%88%EC%A6%88/%EB%A1%9C%ED%8D%BC%EC%99%80-%EB%B0%9C%EB%A0%88%EB%A6%AC%EB%82%98-%EC%8A%88%EC%A6%88"
                                                                   id="navigation-1718335093621-cgd3xapt3">

                                                                    로퍼


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="sandals-women"
                                                                data-haschildren="true">

                                                                <button data-ref="link" className="c-nav__link "
                                                                        id="navigation-1718335093621-oju5cv2ee"
                                                                        aria-controls="navigation-1718335093621-ueg6tobew"
                                                                        aria-expanded="false">

                                                                    샌들


                                                                </button>


                                                                <div className="c-nav__subnav" data-ref="subnav"
                                                                     id="navigation-1718335093621-ueg6tobew"
                                                                     aria-hidden="true">
                                                                    <ul data-ref="navlist"
                                                                        className="c-nav__list c-nav__level4">

                                                                        <li data-ref="item"
                                                                            className="c-nav__item c-nav__item--withslot"
                                                                            data-level4="true"
                                                                            data-cgid="high-heels-sandals-women">

                                                                            <a data-ref="link" className="c-nav__link "
                                                                               data-cgid="high-heels-sandals-women"
                                                                               data-fdid=""
                                                                               href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%EC%8A%88%EC%A6%88/%EC%83%8C%EB%93%A4/%ED%95%98%EC%9D%B4%ED%9E%90-%EC%83%8C%EB%93%A4"
                                                                               id="navigation-1718335093621-ou16dyoa3">

                                                                                하이힐 샌들


                                                                            </a>


                                                                        </li>

                                                                        <li data-ref="item"
                                                                            className="c-nav__item c-nav__item--withslot"
                                                                            data-level4="true"
                                                                            data-cgid="flat-sandals-women">

                                                                            <a data-ref="link" className="c-nav__link "
                                                                               data-cgid="flat-sandals-women"
                                                                               data-fdid=""
                                                                               href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%EC%8A%88%EC%A6%88/%EC%83%8C%EB%93%A4/%ED%94%8C%EB%9E%AB-%EC%83%8C%EB%93%A4"
                                                                               id="navigation-1718335093622-9th7q34d6">

                                                                                플랫 샌들


                                                                            </a>


                                                                        </li>

                                                                        <li data-ref="item"
                                                                            className="c-nav__item c-nav__item--withslot"
                                                                            data-level4="true" data-cgid="mules-women">

                                                                            <a data-ref="link" className="c-nav__link "
                                                                               data-cgid="mules-women" data-fdid=""
                                                                               href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%EC%8A%88%EC%A6%88/%EC%83%8C%EB%93%A4/%EB%AE%AC"
                                                                               id="navigation-1718335093622-whi0b0k5c">

                                                                                뮬


                                                                            </a>


                                                                        </li>

                                                                    </ul>
                                                                </div>

                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="pumps-women">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="pumps-women" data-fdid=""
                                                                   href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%EC%8A%88%EC%A6%88/%ED%8E%8C%ED%94%84%EC%8A%A4"
                                                                   id="navigation-1718335093622-9kw6pzkdk">

                                                                    펌프스


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="slingbacks-women">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="slingbacks-women" data-fdid=""
                                                                   href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%EC%8A%88%EC%A6%88/%EC%8A%AC%EB%A7%81%EB%B0%B1"
                                                                   id="navigation-1718335093622-ep27i3zpc">

                                                                    슬링백


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="sneakers-women">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="sneakers-women" data-fdid=""
                                                                   href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%EC%8A%88%EC%A6%88/%EC%8A%A4%EB%8B%88%EC%BB%A4%EC%A6%88"
                                                                   id="navigation-1718335093622-y68y2asqv">

                                                                    스니커즈


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="boots-women">

                                                                <a data-ref="link"
                                                                   className="c-nav__link c-nav__link--withlinebreak"
                                                                   data-cgid="boots-women" data-fdid=""
                                                                   href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%EC%8A%88%EC%A6%88/%EB%B6%80%EC%B8%A0"
                                                                   id="navigation-1718335093622-pu7ijp1zp">

                                                                    부츠


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="view-all-shoes-women">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="view-all-shoes-women" data-fdid=""
                                                                   href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%EC%8A%88%EC%A6%88/%EC%8A%88%EC%A6%88-%EB%AA%A8%EB%91%90-%EB%B3%B4%EA%B8%B0"
                                                                   id="navigation-1718335093622-cecanhl2a">

                                                                    슈즈 모두 보기


                                                                </a>


                                                            </li>

                                                        </ul>
                                                    </div>


                                                </li>

                                                <li data-ref="item" className="c-nav__item" data-level2="true"
                                                    data-cgid="belts-and-belt-bags-women">

                                                    <a data-ref="link" className="c-nav__link "
                                                       data-cgid="belts-and-belt-bags-women" data-fdid=""
                                                       href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%EB%B2%A8%ED%8A%B8%EC%99%80-%EB%B2%A8%ED%8A%B8-%EB%B0%B1"
                                                       id="navigation-1718335093622-fetiwbqpl">

                                                        벨트


                                                    </a>


                                                </li>

                                                <li data-ref="item" className="c-nav__item" data-level2="true"
                                                    data-cgid="accessories-women" data-haschildren="true">

                                                    <button data-ref="link" className="c-nav__link "
                                                            id="navigation-1718335093622-tlmhu2gge"
                                                            aria-controls="navigation-1718335093622-diogyv3n7"
                                                            aria-expanded="false">

                                                        액세서리


                                                    </button>


                                                    <div className="c-nav__subnav" data-ref="subnav"
                                                         id="navigation-1718335093622-diogyv3n7" aria-hidden="true">
                                                        <ul data-ref="navlist" className="c-nav__list c-nav__level3">

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="square-scarves-women">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="square-scarves-women" data-fdid=""
                                                                   href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%EC%95%A1%EC%84%B8%EC%84%9C%EB%A6%AC/%EC%8A%A4%ED%80%98%EC%96%B4-%EC%8A%A4%EC%B9%B4%ED%94%84"
                                                                   id="navigation-1718335093622-flrm4frj5">

                                                                    스퀘어 스카프


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="scarves-women">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="scarves-women" data-fdid=""
                                                                   href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%EC%95%A1%EC%84%B8%EC%84%9C%EB%A6%AC/%EC%8A%A4%EC%B9%B4%ED%94%84"
                                                                   id="navigation-1718335093622-grefpbvvx">

                                                                    스카프


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="hats-and-gloves-women">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="hats-and-gloves-women" data-fdid=""
                                                                   href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%EC%95%A1%EC%84%B8%EC%84%9C%EB%A6%AC/%EB%AA%A8%EC%9E%90-and-%EC%9E%A5%EA%B0%91"
                                                                   id="navigation-1718335093622-eeuxqbp40">

                                                                    모자 &amp; 장갑


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="other-accessories-women">

                                                                <a data-ref="link"
                                                                   className="c-nav__link c-nav__link--withlinebreak"
                                                                   data-cgid="other-accessories-women" data-fdid=""
                                                                   href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%EC%95%A1%EC%84%B8%EC%84%9C%EB%A6%AC/%EA%B8%B0%ED%83%80-%EC%A7%80%EA%B0%91"
                                                                   id="navigation-1718335093622-c10rtaadz">

                                                                    기타 지갑


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true"
                                                                data-cgid="view-all-accessories-women">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="view-all-accessories-women" data-fdid=""
                                                                   href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%EC%95%A1%EC%84%B8%EC%84%9C%EB%A6%AC/%EC%95%A1%EC%84%B8%EC%84%9C%EB%A6%AC-%EB%AA%A8%EB%91%90-%EB%B3%B4%EA%B8%B0"
                                                                   id="navigation-1718335093622-nrhi7jrpx">

                                                                    액세서리 모두 보기


                                                                </a>


                                                            </li>

                                                        </ul>
                                                    </div>


                                                </li>

                                                <li data-ref="item" className="c-nav__item" data-level2="true"
                                                    data-cgid="sunglasses-women">

                                                    <a data-ref="link" className="c-nav__link "
                                                       data-cgid="sunglasses-women" data-fdid=""
                                                       href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%EC%84%A0%EA%B8%80%EB%9D%BC%EC%8A%A4"
                                                       id="navigation-1718335093622-jy3hcm3wo">

                                                        선글라스


                                                    </a>


                                                </li>

                                                <li data-ref="item" className="c-nav__item" data-level2="true"
                                                    data-cgid="jewellry-women" data-haschildren="true">

                                                    <button data-ref="link" className="c-nav__link "
                                                            id="navigation-1718335093622-nea6w3lti"
                                                            aria-controls="navigation-1718335093622-dig4wwys8"
                                                            aria-expanded="false">

                                                        주얼리


                                                    </button>


                                                    <div className="c-nav__subnav" data-ref="subnav"
                                                         id="navigation-1718335093622-dig4wwys8" aria-hidden="true">
                                                        <ul data-ref="navlist" className="c-nav__list c-nav__level3">

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true"
                                                                data-cgid="new-arrivals-jewellery-women">

                                                                <a data-ref="link"
                                                                   className="c-nav__link c-nav__link--withlinebreak"
                                                                   data-cgid="new-arrivals-jewellery-women" data-fdid=""
                                                                   href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%EC%A3%BC%EC%96%BC%EB%A6%AC/%EC%8B%A0%EC%83%81%ED%92%88"
                                                                   id="navigation-1718335093622-32oyd9vvt">

                                                                    신상품


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="cuffs-and-bracelet-women">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="cuffs-and-bracelet-women" data-fdid=""
                                                                   href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%EC%A3%BC%EC%96%BC%EB%A6%AC/%EC%BB%A4%ED%94%84-and-%EB%B1%85%EA%B8%80"
                                                                   id="navigation-1718335093623-2get419kj">

                                                                    커프 &amp; 뱅글


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="leather-bracelet-women">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="leather-bracelet-women" data-fdid=""
                                                                   href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%EC%A3%BC%EC%96%BC%EB%A6%AC/%EA%B0%80%EC%A3%BD-%ED%8C%94%EC%B0%8C"
                                                                   id="navigation-1718335093623-1o5lxyo3j">

                                                                    가죽 팔찌


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="earrings-women">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="earrings-women" data-fdid=""
                                                                   href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%EC%A3%BC%EC%96%BC%EB%A6%AC/%EC%9D%B4%EC%96%B4%EB%A7%81"
                                                                   id="navigation-1718335093623-ckt1xmf69">

                                                                    이어링


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="necklaces-women">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="necklaces-women" data-fdid=""
                                                                   href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%EC%A3%BC%EC%96%BC%EB%A6%AC/%EB%84%A4%ED%81%AC%EB%A6%AC%EC%8A%A4"
                                                                   id="navigation-1718335093623-90v7hce40">

                                                                    네크리스


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="brooches-women">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="brooches-women" data-fdid=""
                                                                   href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%EC%A3%BC%EC%96%BC%EB%A6%AC/%EB%B8%8C%EB%A1%9C%EC%B9%98"
                                                                   id="navigation-1718335093623-zamui0rqq">

                                                                    브로치


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="rings-women">

                                                                <a data-ref="link"
                                                                   className="c-nav__link c-nav__link--withlinebreak"
                                                                   data-cgid="rings-women" data-fdid=""
                                                                   href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%EC%A3%BC%EC%96%BC%EB%A6%AC/%EB%B0%98%EC%A7%80"
                                                                   id="navigation-1718335093623-8mf69a3qt">

                                                                    반지


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="view-all-jewellry-women">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="view-all-jewellry-women" data-fdid=""
                                                                   href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%EC%A3%BC%EC%96%BC%EB%A6%AC/%EC%A3%BC%EC%96%BC%EB%A6%AC-%EB%AA%A8%EB%91%90-%EB%B3%B4%EA%B8%B0"
                                                                   id="navigation-1718335093623-jn5741o1n">

                                                                    주얼리 모두 보기


                                                                </a>


                                                            </li>

                                                        </ul>
                                                    </div>


                                                </li>

                                                <li data-ref="item" className="c-nav__item" data-level2="true"
                                                    data-cgid="fine-jewelry">

                                                    <a data-ref="link"
                                                       className="c-nav__link c-nav__link--withlinebreak"
                                                       data-cgid="fine-jewelry" data-fdid=""
                                                       href="/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%ED%8C%8C%EC%9D%B8-%EC%A3%BC%EC%96%BC%EB%A6%AC"
                                                       id="navigation-1718335093623-dt2ichxow">

                                                        파인 주얼리


                                                    </a>


                                                </li>


                                            </ul>
                                        </div>
                                    </li>

                                    <li data-ref="item" className="c-nav__item" data-cgid="shop-men" data-level1="true"
                                        data-haschildren="true">

                                        <button data-ref="link" className="c-nav__link c-nav__link--withlinebreak"
                                                id="navigation-1718335093623-03nxqm5vw"
                                                aria-controls="navigation-1718335093623-hs6pefph4"
                                                aria-expanded="false">

                                            남성 쇼핑


                                        </button>


                                        <div data-ref="subnav" className="c-nav__subnav"
                                             id="navigation-1718335093623-hs6pefph4" aria-hidden="true">
                                            <ul className="c-nav__list c-nav__level2" data-ref="navlist">

                                                <li data-ref="item" className="c-nav__item" data-level2="true"
                                                    data-cgid="new-arrivals-men-spring">

                                                    <a data-ref="link"
                                                       className="c-nav__link c-nav__link--withlinebreak"
                                                       data-cgid="new-arrivals-men-spring" data-fdid=""
                                                       href="/ko-kr/%EB%82%A8%EC%84%B1-%EC%87%BC%ED%95%91/new---spring-summer"
                                                       id="navigation-1718335093623-xtzeo7czt">

                                                        NEW - SPRING SUMMER 24


                                                    </a>


                                                </li>

                                                <li data-ref="item" className="c-nav__item" data-level2="true"
                                                    data-cgid="gifts-selection-for-him">

                                                    <a data-ref="link"
                                                       className="c-nav__link c-nav__link--withlinebreak"
                                                       data-cgid="gifts-selection-for-him" data-fdid=""
                                                       href="/ko-kr/%EB%82%A8%EC%84%B1-%EC%87%BC%ED%95%91/%EA%B7%B8%EB%A5%BC-%EC%9C%84%ED%95%9C"
                                                       id="navigation-1718335093623-0u3aw7eo7">

                                                        그를 위한


                                                    </a>


                                                </li>

                                                <li data-ref="item" className="c-nav__item" data-level2="true"
                                                    data-cgid="ready-to-wear-men" data-haschildren="true">

                                                    <button data-ref="link" className="c-nav__link "
                                                            id="navigation-1718335093623-1ud8t0jpw"
                                                            aria-controls="navigation-1718335093623-f7sfecftp"
                                                            aria-expanded="false">

                                                        레디 투 웨어


                                                    </button>


                                                    <div className="c-nav__subnav" data-ref="subnav"
                                                         id="navigation-1718335093623-f7sfecftp" aria-hidden="true">
                                                        <ul data-ref="navlist" className="c-nav__list c-nav__level3">

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true"
                                                                data-cgid="men-spring-summer-24-looks">

                                                                <a data-ref="link"
                                                                   className="c-nav__link c-nav__link--withlinebreak"
                                                                   data-cgid="men-spring-summer-24-looks" data-fdid=""
                                                                   href="/ko-kr/%EB%82%A8%EC%84%B1-%EC%87%BC%ED%95%91/%EB%A0%88%EB%94%94-%ED%88%AC-%EC%9B%A8%EC%96%B4/spring-summer-24-looks"
                                                                   id="navigation-1718335093623-v75boni5o">

                                                                    SPRING SUMMER 24 LOOKS


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="jackets-and-pants">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="jackets-and-pants" data-fdid=""
                                                                   href="/ko-kr/%EB%82%A8%EC%84%B1-%EC%87%BC%ED%95%91/%EB%A0%88%EB%94%94-%ED%88%AC-%EC%9B%A8%EC%96%B4/%EB%B8%94%EB%A0%88%EC%9D%B4%EC%A0%80-and-%ED%8C%AC%EC%B8%A0"
                                                                   id="navigation-1718335093623-xqyievbev">

                                                                    블레이저 &amp; 팬츠


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="smoking-men">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="smoking-men" data-fdid=""
                                                                   href="/ko-kr/%EB%82%A8%EC%84%B1-%EC%87%BC%ED%95%91/%EB%A0%88%EB%94%94-%ED%88%AC-%EC%9B%A8%EC%96%B4/smoking"
                                                                   id="navigation-1718335093623-wbxjx5rd2">

                                                                    SMOKING


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="outerwear-men">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="outerwear-men" data-fdid=""
                                                                   href="/ko-kr/%EB%82%A8%EC%84%B1-%EC%87%BC%ED%95%91/%EB%A0%88%EB%94%94-%ED%88%AC-%EC%9B%A8%EC%96%B4/%EC%95%84%EC%9A%B0%ED%84%B0%EC%9B%A8%EC%96%B4"
                                                                   id="navigation-1718335093623-uhmmlkxc9">

                                                                    아우터웨어


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="coats-men">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="coats-men" data-fdid=""
                                                                   href="/ko-kr/%EB%82%A8%EC%84%B1-%EC%87%BC%ED%95%91/%EB%A0%88%EB%94%94-%ED%88%AC-%EC%9B%A8%EC%96%B4/%EC%BD%94%ED%8A%B8"
                                                                   id="navigation-1718335093624-9nox4k2e2">

                                                                    코트


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="leather-men">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="leather-men" data-fdid=""
                                                                   href="/ko-kr/%EB%82%A8%EC%84%B1-%EC%87%BC%ED%95%91/%EB%A0%88%EB%94%94-%ED%88%AC-%EC%9B%A8%EC%96%B4/%EB%A0%88%EB%8D%94"
                                                                   id="navigation-1718335093624-v07qgb14t">

                                                                    레더


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="knitwear-men">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="knitwear-men" data-fdid=""
                                                                   href="/ko-kr/%EB%82%A8%EC%84%B1-%EC%87%BC%ED%95%91/%EB%A0%88%EB%94%94-%ED%88%AC-%EC%9B%A8%EC%96%B4/%EB%8B%88%ED%8A%B8%EC%9B%A8%EC%96%B4"
                                                                   id="navigation-1718335093624-qancrpzad">

                                                                    니트웨어


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="shirts-men">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="shirts-men" data-fdid=""
                                                                   href="/ko-kr/%EB%82%A8%EC%84%B1-%EC%87%BC%ED%95%91/%EB%A0%88%EB%94%94-%ED%88%AC-%EC%9B%A8%EC%96%B4/%EC%85%94%EC%B8%A0"
                                                                   id="navigation-1718335093624-nykfll32l">

                                                                    셔츠


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="denim-men">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="denim-men" data-fdid=""
                                                                   href="/ko-kr/%EB%82%A8%EC%84%B1-%EC%87%BC%ED%95%91/%EB%A0%88%EB%94%94-%ED%88%AC-%EC%9B%A8%EC%96%B4/%EB%8D%B0%EB%8B%98"
                                                                   id="navigation-1718335093624-he5vrivvh">

                                                                    데님


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true"
                                                                data-cgid="t-shirt-and-sweatshirt-men">

                                                                <a data-ref="link"
                                                                   className="c-nav__link c-nav__link--withlinebreak"
                                                                   data-cgid="t-shirt-and-sweatshirt-men" data-fdid=""
                                                                   href="/ko-kr/%EB%82%A8%EC%84%B1-%EC%87%BC%ED%95%91/%EB%A0%88%EB%94%94-%ED%88%AC-%EC%9B%A8%EC%96%B4/%ED%8B%B0%EC%85%94%EC%B8%A0-and-%EC%8A%A4%EC%9B%BB%EC%85%94%EC%B8%A0"
                                                                   id="navigation-1718335093624-3jio5ket3">

                                                                    티셔츠 &amp; 스웻셔츠


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="view-all-rtw-men">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="view-all-rtw-men" data-fdid=""
                                                                   href="/ko-kr/%EB%82%A8%EC%84%B1-%EC%87%BC%ED%95%91/%EB%A0%88%EB%94%94-%ED%88%AC-%EC%9B%A8%EC%96%B4/%EB%A0%88%EB%94%94-%ED%88%AC-%EC%9B%A8%EC%96%B4-%EB%AA%A8%EB%91%90-%EB%B3%B4%EA%B8%B0"
                                                                   id="navigation-1718335093624-lhl96abow">

                                                                    레디 투 웨어 모두 보기


                                                                </a>


                                                            </li>

                                                        </ul>
                                                    </div>


                                                </li>

                                                <li data-ref="item" className="c-nav__item" data-level2="true"
                                                    data-cgid="shoes-men" data-haschildren="true">

                                                    <button data-ref="link" className="c-nav__link "
                                                            id="navigation-1718335093624-t64mv496f"
                                                            aria-controls="navigation-1718335093624-daus5vk80"
                                                            aria-expanded="false">

                                                        슈즈


                                                    </button>


                                                    <div className="c-nav__subnav" data-ref="subnav"
                                                         id="navigation-1718335093624-daus5vk80" aria-hidden="true">
                                                        <ul data-ref="navlist" className="c-nav__list c-nav__level3">

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="new-arrivals-shoes-men">

                                                                <a data-ref="link"
                                                                   className="c-nav__link c-nav__link--withlinebreak"
                                                                   data-cgid="new-arrivals-shoes-men" data-fdid=""
                                                                   href="/ko-kr/%EB%82%A8%EC%84%B1-%EC%87%BC%ED%95%91/%EC%8A%88%EC%A6%88/%EC%8B%A0%EC%83%81%ED%92%88"
                                                                   id="navigation-1718335093624-92aqx8xyx">

                                                                    신상품


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="sneakers-men">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="sneakers-men" data-fdid=""
                                                                   href="/ko-kr/%EB%82%A8%EC%84%B1-%EC%87%BC%ED%95%91/%EC%8A%88%EC%A6%88/%EC%8A%A4%EB%8B%88%EC%BB%A4%EC%A6%88"
                                                                   id="navigation-1718335093624-eduiuhzfx">

                                                                    스니커즈


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="loafers-and-derbies-men">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="loafers-and-derbies-men" data-fdid=""
                                                                   href="/ko-kr/%EB%82%A8%EC%84%B1-%EC%87%BC%ED%95%91/%EC%8A%88%EC%A6%88/%EB%A1%9C%ED%8D%BC-and-%EB%A0%88%EC%9D%B4%EC%8A%A4%EC%97%85"
                                                                   id="navigation-1718335093624-t0gmatw1g">

                                                                    로퍼 &amp; 레이스업


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true"
                                                                data-cgid="espadrilles-and-sandals-men">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="espadrilles-and-sandals-men" data-fdid=""
                                                                   href="/ko-kr/%EB%82%A8%EC%84%B1-%EC%87%BC%ED%95%91/%EC%8A%88%EC%A6%88/%EC%97%90%EC%8A%A4%ED%8C%8C%EB%93%9C%EB%A6%AC%EC%9C%A0-and-%EC%83%8C%EB%93%A4"
                                                                   id="navigation-1718335093624-nxwyad7ta">

                                                                    에스파드리유 &amp; 샌들


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="boots-men">

                                                                <a data-ref="link"
                                                                   className="c-nav__link c-nav__link--withlinebreak"
                                                                   data-cgid="boots-men" data-fdid=""
                                                                   href="/ko-kr/%EB%82%A8%EC%84%B1-%EC%87%BC%ED%95%91/%EC%8A%88%EC%A6%88/%EB%B6%80%EC%B8%A0"
                                                                   id="navigation-1718335093624-3usu6t0z0">

                                                                    부츠


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="view-all-shoes-men">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="view-all-shoes-men" data-fdid=""
                                                                   href="/ko-kr/%EB%82%A8%EC%84%B1-%EC%87%BC%ED%95%91/%EC%8A%88%EC%A6%88/%EC%8A%88%EC%A6%88-%EB%AA%A8%EB%91%90-%EB%B3%B4%EA%B8%B0"
                                                                   id="navigation-1718335093624-omkcxwccp">

                                                                    슈즈 모두 보기


                                                                </a>


                                                            </li>

                                                        </ul>
                                                    </div>


                                                </li>

                                                <li data-ref="item" className="c-nav__item" data-level2="true"
                                                    data-cgid="luggages-men" data-haschildren="true">

                                                    <button data-ref="link" className="c-nav__link "
                                                            id="navigation-1718335093624-66uo2g6wx"
                                                            aria-controls="navigation-1718335093624-7ge49bbyt"
                                                            aria-expanded="false">

                                                        백


                                                    </button>


                                                    <div className="c-nav__subnav" data-ref="subnav"
                                                         id="navigation-1718335093624-7ge49bbyt" aria-hidden="true">
                                                        <ul data-ref="navlist" className="c-nav__list c-nav__level3">

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true"
                                                                data-cgid="new-arrivals-luggages-men">

                                                                <a data-ref="link"
                                                                   className="c-nav__link c-nav__link--withlinebreak"
                                                                   data-cgid="new-arrivals-luggages-men" data-fdid=""
                                                                   href="/ko-kr/%EB%82%A8%EC%84%B1-%EC%87%BC%ED%95%91/%EB%B0%B1/%EC%8B%A0%EC%83%81%ED%92%88"
                                                                   id="navigation-1718335093624-56ry9j5nm">

                                                                    신상품


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="niki-bags-men">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="niki-bags-men" data-fdid=""
                                                                   href="/ko-kr/%EB%82%A8%EC%84%B1-%EC%87%BC%ED%95%91/%EB%B0%B1/niki-men"
                                                                   id="navigation-1718335093624-cd2tyoqtn">

                                                                    NIKI


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="sac-de-jour-men">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="sac-de-jour-men" data-fdid=""
                                                                   href="/ko-kr/%EB%82%A8%EC%84%B1-%EC%87%BC%ED%95%91/%EB%B0%B1/sac-de-jour"
                                                                   id="navigation-1718335093625-8puu2rc2d">

                                                                    SAC DE JOUR


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="solferino-bags-men">

                                                                <a data-ref="link"
                                                                   className="c-nav__link c-nav__link--withlinebreak"
                                                                   data-cgid="solferino-bags-men" data-fdid=""
                                                                   href="/ko-kr/%EB%82%A8%EC%84%B1-%EC%87%BC%ED%95%91/%EB%B0%B1/solferino-men"
                                                                   id="navigation-1718335093625-v4vgk19vt">

                                                                    SOLFERINO


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="backpacks-men">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="backpacks-men" data-fdid=""
                                                                   href="/ko-kr/%EB%82%A8%EC%84%B1-%EC%87%BC%ED%95%91/%EB%B0%B1/%EB%B0%B1%ED%8C%A9"
                                                                   id="navigation-1718335093625-n93h28oju">

                                                                    백팩


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="shopping-bag-men">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="shopping-bag-men" data-fdid=""
                                                                   href="/ko-kr/%EB%82%A8%EC%84%B1-%EC%87%BC%ED%95%91/%EB%B0%B1/%ED%86%A0%ED%8A%B8%EB%B0%B1"
                                                                   id="navigation-1718335093625-9gq4alwd1">

                                                                    토트백


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="messengers-bags-men">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="messengers-bags-men" data-fdid=""
                                                                   href="/ko-kr/%EB%82%A8%EC%84%B1-%EC%87%BC%ED%95%91/%EB%B0%B1/%EB%A9%94%EC%8B%A0%EC%A0%80%EB%B0%B1"
                                                                   id="navigation-1718335093625-58c5un78b">

                                                                    메신저백


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="travel-bags-men">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="travel-bags-men" data-fdid=""
                                                                   href="/ko-kr/%EB%82%A8%EC%84%B1-%EC%87%BC%ED%95%91/%EB%B0%B1/%ED%8A%B8%EB%9E%98%EB%B8%94"
                                                                   id="navigation-1718335093625-mnqhqn5sg">

                                                                    트래블


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="business-bags-men">

                                                                <a data-ref="link"
                                                                   className="c-nav__link c-nav__link--withlinebreak"
                                                                   data-cgid="business-bags-men" data-fdid=""
                                                                   href="/ko-kr/%EB%82%A8%EC%84%B1-%EC%87%BC%ED%95%91/%EB%B0%B1/%EB%B8%8C%EB%A6%AC%ED%94%84%EC%BC%80%EC%9D%B4%EC%8A%A4"
                                                                   id="navigation-1718335093625-tm6ry10ak">

                                                                    브리프케이스


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="view-all-luggages-men">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="view-all-luggages-men" data-fdid=""
                                                                   href="/ko-kr/%EB%82%A8%EC%84%B1-%EC%87%BC%ED%95%91/%EB%B0%B1/%EB%B0%B1-%EB%AA%A8%EB%91%90-%EB%B3%B4%EA%B8%B0"
                                                                   id="navigation-1718335093625-ynkgwso90">

                                                                    백 모두 보기


                                                                </a>


                                                            </li>

                                                        </ul>
                                                    </div>


                                                </li>

                                                <li data-ref="item" className="c-nav__item" data-level2="true"
                                                    data-cgid="slg-men" data-haschildren="true">

                                                    <button data-ref="link" className="c-nav__link "
                                                            id="navigation-1718335093625-iiszthj5o"
                                                            aria-controls="navigation-1718335093625-j7qfq4m6l"
                                                            aria-expanded="false">

                                                        가죽 소품


                                                    </button>


                                                    <div className="c-nav__subnav" data-ref="subnav"
                                                         id="navigation-1718335093625-j7qfq4m6l" aria-hidden="true">
                                                        <ul data-ref="navlist" className="c-nav__list c-nav__level3">

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="card-cases-men">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="card-cases-men" data-fdid=""
                                                                   href="/ko-kr/%EB%82%A8%EC%84%B1-%EC%87%BC%ED%95%91/%EA%B0%80%EC%A3%BD-%EC%86%8C%ED%92%88/%EC%B9%B4%EB%93%9C-%EC%BC%80%EC%9D%B4%EC%8A%A4"
                                                                   id="navigation-1718335093625-5oprv7bt1">

                                                                    카드 케이스


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="small-wallets-men">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="small-wallets-men" data-fdid=""
                                                                   href="/ko-kr/%EB%82%A8%EC%84%B1-%EC%87%BC%ED%95%91/%EA%B0%80%EC%A3%BD-%EC%86%8C%ED%92%88/%EC%8A%A4%EB%AA%B0%EC%82%AC%EC%9D%B4%EC%A6%88-%EB%8D%94%EB%B8%94%EC%A7%80%EA%B0%91"
                                                                   id="navigation-1718335093625-9yn980om4">

                                                                    스몰사이즈 더블지갑


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="pouches-men">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="pouches-men" data-fdid=""
                                                                   href="/ko-kr/%EB%82%A8%EC%84%B1-%EC%87%BC%ED%95%91/%EA%B0%80%EC%A3%BD-%EC%86%8C%ED%92%88/%EC%BC%80%EC%9D%B4%EC%8A%A4"
                                                                   id="navigation-1718335093625-4j8q2s9xz">

                                                                    케이스


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true"
                                                                data-cgid="other-accessories-slg-men">

                                                                <a data-ref="link"
                                                                   className="c-nav__link c-nav__link--withlinebreak"
                                                                   data-cgid="other-accessories-slg-men" data-fdid=""
                                                                   href="/ko-kr/%EB%82%A8%EC%84%B1-%EC%87%BC%ED%95%91/%EA%B0%80%EC%A3%BD-%EC%86%8C%ED%92%88/%EA%B8%B0%ED%83%80-%EC%A7%80%EA%B0%91"
                                                                   id="navigation-1718335093625-syitma26i">

                                                                    기타 지갑


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="view-all-slg-men">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="view-all-slg-men" data-fdid=""
                                                                   href="/ko-kr/%EB%82%A8%EC%84%B1-%EC%87%BC%ED%95%91/%EA%B0%80%EC%A3%BD-%EC%86%8C%ED%92%88/%EA%B0%80%EC%A3%BD-%EC%86%8C%ED%92%88-%EB%AA%A8%EB%91%90-%EB%B3%B4%EA%B8%B0"
                                                                   id="navigation-1718335093625-wcq9bs448">

                                                                    가죽 소품 모두 보기


                                                                </a>


                                                            </li>

                                                        </ul>
                                                    </div>


                                                </li>

                                                <li data-ref="item" className="c-nav__item" data-level2="true"
                                                    data-cgid="belts-and-belt-bags-men">

                                                    <a data-ref="link" className="c-nav__link "
                                                       data-cgid="belts-and-belt-bags-men" data-fdid=""
                                                       href="/ko-kr/%EB%82%A8%EC%84%B1-%EC%87%BC%ED%95%91/%EB%B2%A8%ED%8A%B8%EC%99%80-%EB%B2%A8%ED%8A%B8-%EB%B0%B1"
                                                       id="navigation-1718335093625-f1np0aa7h">

                                                        벨트와 벨트 백


                                                    </a>


                                                </li>

                                                <li data-ref="item" className="c-nav__item" data-level2="true"
                                                    data-cgid="jewellry-men" data-haschildren="true">

                                                    <button data-ref="link" className="c-nav__link "
                                                            id="navigation-1718335093625-6ahvlnwa5"
                                                            aria-controls="navigation-1718335093625-pdy1qabbm"
                                                            aria-expanded="false">

                                                        주얼리


                                                    </button>


                                                    <div className="c-nav__subnav" data-ref="subnav"
                                                         id="navigation-1718335093625-pdy1qabbm" aria-hidden="true">
                                                        <ul data-ref="navlist" className="c-nav__list c-nav__level3">

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="necklaces-men">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="necklaces-men" data-fdid=""
                                                                   href="/ko-kr/%EB%82%A8%EC%84%B1-%EC%87%BC%ED%95%91/%EC%A3%BC%EC%96%BC%EB%A6%AC/%EB%84%A4%ED%81%AC%EB%A6%AC%EC%8A%A4"
                                                                   id="navigation-1718335093626-r7kkjc2qj">

                                                                    네크리스


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="cuffs-and-bracelet-men">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="cuffs-and-bracelet-men" data-fdid=""
                                                                   href="/ko-kr/%EB%82%A8%EC%84%B1-%EC%87%BC%ED%95%91/%EC%A3%BC%EC%96%BC%EB%A6%AC/%EC%BB%A4%ED%94%84"
                                                                   id="navigation-1718335093626-9xhz090db">

                                                                    커프


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="leather-bracelet-men">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="leather-bracelet-men" data-fdid=""
                                                                   href="/ko-kr/%EB%82%A8%EC%84%B1-%EC%87%BC%ED%95%91/%EC%A3%BC%EC%96%BC%EB%A6%AC/%EA%B0%80%EC%A3%BD-%ED%8C%94%EC%B0%8C"
                                                                   id="navigation-1718335093626-qg7bicad7">

                                                                    가죽 팔찌


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="brooches-and-rings-men">

                                                                <a data-ref="link"
                                                                   className="c-nav__link c-nav__link--withlinebreak"
                                                                   data-cgid="brooches-and-rings-men" data-fdid=""
                                                                   href="/ko-kr/%EB%82%A8%EC%84%B1-%EC%87%BC%ED%95%91/%EC%A3%BC%EC%96%BC%EB%A6%AC/%EB%B8%8C%EB%A1%9C%EC%B9%98-%EB%B0%98%EC%A7%80"
                                                                   id="navigation-1718335093626-odh63no0q">

                                                                    브로치 / 반지


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="view-all-jewellry-men">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="view-all-jewellry-men" data-fdid=""
                                                                   href="/ko-kr/%EB%82%A8%EC%84%B1-%EC%87%BC%ED%95%91/%EC%A3%BC%EC%96%BC%EB%A6%AC/%EC%A3%BC%EC%96%BC%EB%A6%AC-%EB%AA%A8%EB%91%90-%EB%B3%B4%EA%B8%B0"
                                                                   id="navigation-1718335093626-l202wav80">

                                                                    주얼리 모두 보기


                                                                </a>


                                                            </li>

                                                        </ul>
                                                    </div>


                                                </li>

                                                <li data-ref="item" className="c-nav__item" data-level2="true"
                                                    data-cgid="accessories-men" data-haschildren="true">

                                                    <button data-ref="link" className="c-nav__link "
                                                            id="navigation-1718335093626-cwajjps99"
                                                            aria-controls="navigation-1718335093626-ef2antvoz"
                                                            aria-expanded="false">

                                                        액세서리


                                                    </button>


                                                    <div className="c-nav__subnav" data-ref="subnav"
                                                         id="navigation-1718335093626-ef2antvoz" aria-hidden="true">
                                                        <ul data-ref="navlist" className="c-nav__list c-nav__level3">

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="hats-men">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="hats-men" data-fdid=""
                                                                   href="/ko-kr/%EB%82%A8%EC%84%B1-%EC%87%BC%ED%95%91/%EC%95%A1%EC%84%B8%EC%84%9C%EB%A6%AC/%EB%AA%A8%EC%9E%90"
                                                                   id="navigation-1718335093626-9uzulqfnq">

                                                                    모자


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="textile-accessories-men">

                                                                <a data-ref="link"
                                                                   className="c-nav__link c-nav__link--withlinebreak"
                                                                   data-cgid="textile-accessories-men" data-fdid=""
                                                                   href="/ko-kr/%EB%82%A8%EC%84%B1-%EC%87%BC%ED%95%91/%EC%95%A1%EC%84%B8%EC%84%9C%EB%A6%AC/%ED%85%8D%EC%8A%A4%ED%83%80%EC%9D%BC-%EC%95%85%EC%84%B8%EC%84%9C%EB%A6%AC"
                                                                   id="navigation-1718335093626-yc3om17b9">

                                                                    텍스타일 악세서리


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="view-all-accessories-men">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="view-all-accessories-men" data-fdid=""
                                                                   href="/ko-kr/%EB%82%A8%EC%84%B1-%EC%87%BC%ED%95%91/%EC%95%A1%EC%84%B8%EC%84%9C%EB%A6%AC/%EC%95%A1%EC%84%B8%EC%84%9C%EB%A6%AC-%EB%AA%A8%EB%91%90-%EB%B3%B4%EA%B8%B0"
                                                                   id="navigation-1718335093626-sb1q9n9cc">

                                                                    액세서리 모두 보기


                                                                </a>


                                                            </li>

                                                        </ul>
                                                    </div>


                                                </li>

                                                <li data-ref="item" className="c-nav__item" data-level2="true"
                                                    data-cgid="sunglasses-men">

                                                    <a data-ref="link" className="c-nav__link "
                                                       data-cgid="sunglasses-men" data-fdid=""
                                                       href="/ko-kr/%EB%82%A8%EC%84%B1-%EC%87%BC%ED%95%91/%EC%84%A0%EA%B8%80%EB%9D%BC%EC%8A%A4"
                                                       id="navigation-1718335093626-wzoftz5k7">

                                                        선글라스


                                                    </a>


                                                </li>


                                            </ul>
                                        </div>

                                    </li>

                                    <li data-ref="item" className="c-nav__item"
                                        data-cgid="saint-laurent-summer24-highlights" data-level1="true">

                                        <a data-ref="link" className="c-nav__link c-nav__link--withlinebreak"
                                           data-cgid="saint-laurent-summer24-highlights" data-fdid="root"
                                           href="https://www.ysl.com/ko-kr/displayname-saint-laurent-520"
                                           id="navigation-1718335093626-mpko68w6z">

                                            SUMMER 24 HIGHLIGHT


                                        </a>


                                    </li>

                                    <li data-ref="item" className="c-nav__item" data-cgid="ysl-collections"
                                        data-level1="true" data-haschildren="true">

                                        <button data-ref="link" className="c-nav__link "
                                                id="navigation-1718335093626-7v2yvx1ua"
                                                aria-controls="navigation-1718335093627-nzzxdl5zx"
                                                aria-expanded="false">

                                            컬렉션


                                        </button>


                                        <div data-ref="subnav" className="c-nav__subnav"
                                             id="navigation-1718335093627-nzzxdl5zx" aria-hidden="true">
                                            <ul className="c-nav__list c-nav__level2" data-ref="navlist">

                                                <li data-ref="item" className="c-nav__item" data-level2="true"
                                                    data-cgid="collections-m-winter-24" data-haschildren="true">

                                                    <a data-ref="link" className="c-nav__link "
                                                       data-cgid="collections-m-winter-24" data-fdid=""
                                                       href="/ko-kr/%EC%BB%AC%EB%A0%89%EC%85%98/%EA%B0%80%EC%9D%84-%EA%B2%A8%EC%9A%B8-%EB%82%A8%EC%84%B124"
                                                       id="navigation-1718335093627-dizy9a2ft" role="button"
                                                       aria-controls="navigation-1718335093627-43q0wdi26"
                                                       aria-expanded="false">

                                                        가을/겨울 남성24


                                                    </a>


                                                    <div className="c-nav__subnav" data-ref="subnav"
                                                         id="navigation-1718335093627-43q0wdi26" aria-hidden="true">
                                                        <ul data-ref="navlist" className="c-nav__list c-nav__level3">

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true"
                                                                data-cgid="men-winter24-fashion-show">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="men-winter24-fashion-show"
                                                                   data-fdid="collections-men-winter24-fashion-show"
                                                                   href="https://www.ysl.com/ko-kr/displayname-collections-men-winter24-fashion-show"
                                                                   id="navigation-1718335093627-bgzfi75tz">

                                                                    FASHION SHOW


                                                                </a>


                                                            </li>

                                                        </ul>
                                                    </div>


                                                </li>

                                                <li data-ref="item" className="c-nav__item" data-level2="true"
                                                    data-cgid="collections-w-winter-24" data-haschildren="true">

                                                    <a data-ref="link" className="c-nav__link "
                                                       data-cgid="collections-w-winter-24" data-fdid=""
                                                       href="/ko-kr/%EC%BB%AC%EB%A0%89%EC%85%98/%EC%97%AC%EC%84%B1-%EA%B2%A8%EC%9A%B8-24"
                                                       id="navigation-1718335093627-2mu5i0b0i" role="button"
                                                       aria-controls="navigation-1718335093627-9qemsxud9"
                                                       aria-expanded="false">

                                                        여성 겨울 24


                                                    </a>


                                                    <div className="c-nav__subnav" data-ref="subnav"
                                                         id="navigation-1718335093627-9qemsxud9" aria-hidden="true">
                                                        <ul data-ref="navlist" className="c-nav__list c-nav__level3">

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true"
                                                                data-cgid="women-winter24-fashion-show">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="women-winter24-fashion-show"
                                                                   data-fdid="collections-women-winter24-fashion-show"
                                                                   href="https://www.ysl.com/ko-kr/displayname-collections-women-winter24-fashion-show"
                                                                   id="navigation-1718335093627-3x08ru47k">

                                                                    FASHION SHOW


                                                                </a>


                                                            </li>

                                                        </ul>
                                                    </div>


                                                </li>

                                                <li data-ref="item" className="c-nav__item" data-level2="true"
                                                    data-cgid="collections-w-summer-24" data-haschildren="true">

                                                    <a data-ref="link" className="c-nav__link "
                                                       data-cgid="collections-w-summer-24" data-fdid=""
                                                       href="/ko-kr/%EC%BB%AC%EB%A0%89%EC%85%98/%EC%97%AC%EC%84%B1-%EC%97%AC%EB%A6%84-24"
                                                       id="navigation-1718335093627-ux108y9he" role="button"
                                                       aria-controls="navigation-1718335093627-uxa8jhd6l"
                                                       aria-expanded="false">

                                                        여성 여름 24


                                                    </a>


                                                    <div className="c-nav__subnav" data-ref="subnav"
                                                         id="navigation-1718335093627-uxa8jhd6l" aria-hidden="true">
                                                        <ul data-ref="navlist" className="c-nav__list c-nav__level3">

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true"
                                                                data-cgid="women-summer24-fashion-show">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="women-summer24-fashion-show"
                                                                   data-fdid="collections-women-summer24-fashion-show"
                                                                   href="https://www.ysl.com/ko-kr/displayname-collections-women-summer24-fashion-show"
                                                                   id="navigation-1718335093627-6apuu2z2g">

                                                                    FASHION SHOW


                                                                </a>


                                                            </li>

                                                        </ul>
                                                    </div>


                                                </li>

                                                <li data-ref="item" className="c-nav__item" data-level2="true"
                                                    data-cgid="collections-m-summer-24" data-haschildren="true">

                                                    <a data-ref="link" className="c-nav__link "
                                                       data-cgid="collections-m-summer-24" data-fdid=""
                                                       href="/ko-kr/%EC%BB%AC%EB%A0%89%EC%85%98/%EB%82%A8%EC%84%B1-%EB%B4%84-%EC%97%AC%EB%A6%84-24"
                                                       id="navigation-1718335093627-f9u088ogn" role="button"
                                                       aria-controls="navigation-1718335093627-hbvkl2ctr"
                                                       aria-expanded="false">

                                                        남성 봄 여름 24


                                                    </a>


                                                    <div className="c-nav__subnav" data-ref="subnav"
                                                         id="navigation-1718335093627-hbvkl2ctr" aria-hidden="true">
                                                        <ul data-ref="navlist" className="c-nav__list c-nav__level3">

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true"
                                                                data-cgid="men-summer24-fashion-show">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="men-summer24-fashion-show"
                                                                   data-fdid="collections-men-summer24-fashion-show"
                                                                   href="https://www.ysl.com/ko-kr/displayname-collections-men-summer24-fashion-show"
                                                                   id="navigation-1718335093627-bjqccaevr">

                                                                    FASHION SHOW


                                                                </a>


                                                            </li>

                                                        </ul>
                                                    </div>


                                                </li>


                                            </ul>
                                        </div>

                                    </li>

                                    <li data-ref="item" className="c-nav__item" data-cgid="la maison" data-level1="true"
                                        data-haschildren="true">

                                        <button data-ref="link" className="c-nav__link "
                                                id="navigation-1718335093627-ek03m03k2"
                                                aria-controls="navigation-1718335093627-nj804g5w9"
                                                aria-expanded="false">

                                            La Maison


                                        </button>


                                        <div data-ref="subnav" className="c-nav__subnav"
                                             id="navigation-1718335093627-nj804g5w9" aria-hidden="true">
                                            <ul className="c-nav__list c-nav__level2" data-ref="navlist">

                                                <li data-ref="item" className="c-nav__item" data-level2="true"
                                                    data-cgid="yves-saint-laurent">

                                                    <a data-ref="link" className="c-nav__link "
                                                       data-cgid="yves-saint-laurent" data-fdid="la-maison-ysl"
                                                       href="https://www.ysl.com/ko-kr/yves-saint-laurent-video-la-maison-ysl"
                                                       id="navigation-1718335093627-7moiaukfi">

                                                        Yves Saint Laurent


                                                    </a>


                                                </li>

                                                <li data-ref="item" className="c-nav__item" data-level2="true"
                                                    data-cgid="sustainability-left" data-haschildren="true">

                                                    <button data-ref="link" className="c-nav__link "
                                                            id="navigation-1718335093628-2vty2tj4k"
                                                            aria-controls="navigation-1718335093628-uap2akh6m"
                                                            aria-expanded="false">

                                                        지속 가능성


                                                    </button>


                                                    <div className="c-nav__subnav" data-ref="subnav"
                                                         id="navigation-1718335093628-uap2akh6m" aria-hidden="true">
                                                        <ul data-ref="navlist" className="c-nav__list c-nav__level3">

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="approach-left-entry">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="approach-left-entry"
                                                                   data-fdid="approach-left"
                                                                   href="https://www.ysl.com/ko-kr/sustainability-approach-left"
                                                                   id="navigation-1718335093628-0dot5sfys">

                                                                    접근법


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="standards-left-entry">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="standards-left-entry"
                                                                   data-fdid="standards-left"
                                                                   href="https://www.ysl.com/ko-kr/sustainability-standards-left"
                                                                   id="navigation-1718335093628-0qjsddof5">

                                                                    기준


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true"
                                                                data-cgid="measuring-impact-left-entry">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="measuring-impact-left-entry"
                                                                   data-fdid="measuring-impact-left"
                                                                   href="https://www.ysl.com/ko-kr/sustainability-measuring-impact-left"
                                                                   id="navigation-1718335093628-4rgcndnlb">

                                                                    효과 측정


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true"
                                                                data-cgid="house-operations-left-entry">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="house-operations-left-entry"
                                                                   data-fdid="house-operations-left"
                                                                   href="https://www.ysl.com/ko-kr/sustainability-house-operations-left"
                                                                   id="navigation-1718335093628-a3dvnccc5">

                                                                    하우스 운영


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="raw-materials-left-entry">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="raw-materials-left-entry"
                                                                   data-fdid="raw-materials-left"
                                                                   href="https://www.ysl.com/ko-kr/sustainability-raw-materials-left"
                                                                   id="navigation-1718335093628-ehgpu8u5o">

                                                                    원료


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="supply-chain-left-entry">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="supply-chain-left-entry"
                                                                   data-fdid="supply-chain-left"
                                                                   href="https://www.ysl.com/ko-kr/sustainability-supply-chain-left"
                                                                   id="navigation-1718335093628-0see5406m">

                                                                    공급망


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="products-left-entry">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="products-left-entry"
                                                                   data-fdid="products-left"
                                                                   href="https://www.ysl.com/ko-kr/sustainability-products-left"
                                                                   id="navigation-1718335093628-d85cuiev4">

                                                                    제품


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="circularity-left-entry">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="circularity-left-entry"
                                                                   data-fdid="circularity-left"
                                                                   href="https://www.ysl.com/ko-kr/sustainability-circularity-left"
                                                                   id="navigation-1718335093628-g7a8fnpl8">

                                                                    순환성


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                className="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="charity-water-left-entry">

                                                                <a data-ref="link" className="c-nav__link "
                                                                   data-cgid="charity-water-left-entry"
                                                                   data-fdid="charity-water-left"
                                                                   href="https://www.ysl.com/ko-kr/sustainability-charity-water-left"
                                                                   id="navigation-1718335093629-9cs3rov71">

                                                                    기부: 물


                                                                </a>


                                                            </li>

                                                        </ul>
                                                    </div>


                                                </li>

                                                <li data-ref="item" className="c-nav__item" data-level2="true"
                                                    data-cgid="archives" data-haschildren="true">

                                                    <button data-ref="link" className="c-nav__link "
                                                            id="navigation-1718335093629-lou5pfwg6"
                                                            aria-controls="navigation-1718335093629-suyahe9bt"
                                                            aria-expanded="false">

                                                        Archives


                                                    </button>


                                                    <div className="c-nav__subnav" data-ref="subnav"
                                                         id="navigation-1718335093629-suyahe9bt" aria-hidden="true">
                                                        <ul data-ref="navlist" className="c-nav__list c-nav__level3">

                                                            <li data-ref="item" className="c-nav__item"
                                                                data-haschildren="true">

                                                                <button data-ref="link" className="c-nav__link"
                                                                        id="navigation-1718335093629-k93qb1tck"
                                                                        aria-controls="navigation-1718335093629-o8zjuxixg"
                                                                        aria-expanded="false">
                                                                    2023
                                                                </button>


                                                                <div className="c-nav__subnav" data-ref="subnav"
                                                                     id="navigation-1718335093629-o8zjuxixg"
                                                                     aria-hidden="true">
                                                                    <ul className="c-nav__list c-nav__subnav--editorial">

                                                                        <li data-ref="item" className="c-nav__item"
                                                                            data-haschildren="true">

                                                                            <button data-ref="link"
                                                                                    className="c-nav__link"
                                                                                    id="navigation-1718335093629-76ipp4ckp"
                                                                                    aria-controls="navigation-1718335093629-pxurfckor"
                                                                                    aria-expanded="false">
                                                                                여성 겨울 23
                                                                            </button>


                                                                            <div className="c-nav__subnav"
                                                                                 data-ref="subnav"
                                                                                 id="navigation-1718335093629-pxurfckor"
                                                                                 aria-hidden="true">
                                                                                <ul className="c-nav__list c-nav__subnav--editorial">

                                                                                    <li data-ref="item"
                                                                                        className="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           className="c-nav__link"
                                                                                           data-fdid="archives-ww23-fs"
                                                                                           href="/ko-kr/displayname-archives-ww23-fs"
                                                                                           id="navigation-1718335093629-zk9mai5v9">
                                                                                            FASHION SHOW
                                                                                        </a>


                                                                                    </li>

                                                                                </ul>
                                                                            </div>

                                                                        </li>

                                                                        <li data-ref="item" className="c-nav__item"
                                                                            data-haschildren="true">

                                                                            <button data-ref="link"
                                                                                    className="c-nav__link"
                                                                                    id="navigation-1718335093629-j7r2b9ck5"
                                                                                    aria-controls="navigation-1718335093629-1bfh86spu"
                                                                                    aria-expanded="false">
                                                                                가을/겨울 남성23
                                                                            </button>


                                                                            <div className="c-nav__subnav"
                                                                                 data-ref="subnav"
                                                                                 id="navigation-1718335093629-1bfh86spu"
                                                                                 aria-hidden="true">
                                                                                <ul className="c-nav__list c-nav__subnav--editorial">

                                                                                    <li data-ref="item"
                                                                                        className="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           className="c-nav__link"
                                                                                           data-fdid="archives-mw23-fs"
                                                                                           href="/ko-kr/displayname-archives-mw23-fs"
                                                                                           id="navigation-1718335093629-on8fj5ed9">
                                                                                            FASHION SHOW
                                                                                        </a>


                                                                                    </li>

                                                                                </ul>
                                                                            </div>

                                                                        </li>

                                                                        <li data-ref="item" className="c-nav__item"
                                                                            data-haschildren="true">

                                                                            <button data-ref="link"
                                                                                    className="c-nav__link"
                                                                                    id="navigation-1718335093629-1f9fv6e5s"
                                                                                    aria-controls="navigation-1718335093629-jbishy7vn"
                                                                                    aria-expanded="false">
                                                                                여성 여름 23
                                                                            </button>


                                                                            <div className="c-nav__subnav"
                                                                                 data-ref="subnav"
                                                                                 id="navigation-1718335093629-jbishy7vn"
                                                                                 aria-hidden="true">
                                                                                <ul className="c-nav__list c-nav__subnav--editorial">

                                                                                    <li data-ref="item"
                                                                                        className="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           className="c-nav__link"
                                                                                           data-fdid="archives-ws23-fs"
                                                                                           href="/ko-kr/displayname-archives-ws23-fs"
                                                                                           id="navigation-1718335093629-b6ijbsd5y">
                                                                                            FASHION SHOW
                                                                                        </a>


                                                                                    </li>

                                                                                </ul>
                                                                            </div>

                                                                        </li>

                                                                        <li data-ref="item" className="c-nav__item"
                                                                            data-haschildren="true">

                                                                            <button data-ref="link"
                                                                                    className="c-nav__link"
                                                                                    id="navigation-1718335093629-wyddzl0pj"
                                                                                    aria-controls="navigation-1718335093629-bnmikkr1u"
                                                                                    aria-expanded="false">
                                                                                남성 봄 여름 23
                                                                            </button>


                                                                            <div className="c-nav__subnav"
                                                                                 data-ref="subnav"
                                                                                 id="navigation-1718335093629-bnmikkr1u"
                                                                                 aria-hidden="true">
                                                                                <ul className="c-nav__list c-nav__subnav--editorial">

                                                                                    <li data-ref="item"
                                                                                        className="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           className="c-nav__link"
                                                                                           data-fdid="archives-ms23-fs"
                                                                                           href="/ko-kr/displayname-archives-ms23-fs"
                                                                                           id="navigation-1718335093629-pob4p7a23">
                                                                                            FASHION SHOW
                                                                                        </a>


                                                                                    </li>

                                                                                </ul>
                                                                            </div>

                                                                        </li>

                                                                    </ul>
                                                                </div>

                                                            </li>

                                                            <li data-ref="item" className="c-nav__item"
                                                                data-haschildren="true">

                                                                <button data-ref="link" className="c-nav__link"
                                                                        id="navigation-1718335093629-2p3wc7ksf"
                                                                        aria-controls="navigation-1718335093629-c1fykb03e"
                                                                        aria-expanded="false">
                                                                    2022
                                                                </button>


                                                                <div className="c-nav__subnav" data-ref="subnav"
                                                                     id="navigation-1718335093629-c1fykb03e"
                                                                     aria-hidden="true">
                                                                    <ul className="c-nav__list c-nav__subnav--editorial">

                                                                        <li data-ref="item" className="c-nav__item"
                                                                            data-haschildren="true">

                                                                            <button data-ref="link"
                                                                                    className="c-nav__link"
                                                                                    id="navigation-1718335093629-wcc9oe5tb"
                                                                                    aria-controls="navigation-1718335093629-58ow4rbbm"
                                                                                    aria-expanded="false">
                                                                                여성 겨울 22
                                                                            </button>


                                                                            <div className="c-nav__subnav"
                                                                                 data-ref="subnav"
                                                                                 id="navigation-1718335093629-58ow4rbbm"
                                                                                 aria-hidden="true">
                                                                                <ul className="c-nav__list c-nav__subnav--editorial">

                                                                                    <li data-ref="item"
                                                                                        className="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           className="c-nav__link"
                                                                                           data-fdid="archives-ww22-fs"
                                                                                           href="/ko-kr/displayname-archives-ww22-fs"
                                                                                           id="navigation-1718335093629-njuw7wf0y">
                                                                                            FASHION SHOW
                                                                                        </a>


                                                                                    </li>

                                                                                    <li data-ref="item"
                                                                                        className="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           className="c-nav__link"
                                                                                           data-fdid="archives-ww22-on-set"
                                                                                           href="/ko-kr/displayname-archives-ww22-on-set"
                                                                                           id="navigation-1718335093630-nbfsv2cub">
                                                                                            ON SET
                                                                                        </a>


                                                                                    </li>

                                                                                </ul>
                                                                            </div>

                                                                        </li>

                                                                        <li data-ref="item" className="c-nav__item"
                                                                            data-haschildren="true">

                                                                            <button data-ref="link"
                                                                                    className="c-nav__link"
                                                                                    id="navigation-1718335093630-w5ehdyewy"
                                                                                    aria-controls="navigation-1718335093630-acvqux61f"
                                                                                    aria-expanded="false">
                                                                                여성 여름 22
                                                                            </button>


                                                                            <div className="c-nav__subnav"
                                                                                 data-ref="subnav"
                                                                                 id="navigation-1718335093630-acvqux61f"
                                                                                 aria-hidden="true">
                                                                                <ul className="c-nav__list c-nav__subnav--editorial">

                                                                                    <li data-ref="item"
                                                                                        className="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           className="c-nav__link"
                                                                                           data-fdid="archives-ws22-fs"
                                                                                           href="/ko-kr/displayname-archives-ws22-fs"
                                                                                           id="navigation-1718335093630-b5kq66cfj">
                                                                                            FASHION SHOW
                                                                                        </a>


                                                                                    </li>

                                                                                </ul>
                                                                            </div>

                                                                        </li>

                                                                        <li data-ref="item" className="c-nav__item"
                                                                            data-haschildren="true">

                                                                            <button data-ref="link"
                                                                                    className="c-nav__link"
                                                                                    id="navigation-1718335093630-e011ms5ne"
                                                                                    aria-controls="navigation-1718335093630-w1vq80zx4"
                                                                                    aria-expanded="false">
                                                                                남성 봄 여름 22
                                                                            </button>


                                                                            <div className="c-nav__subnav"
                                                                                 data-ref="subnav"
                                                                                 id="navigation-1718335093630-w1vq80zx4"
                                                                                 aria-hidden="true">
                                                                                <ul className="c-nav__list c-nav__subnav--editorial">

                                                                                    <li data-ref="item"
                                                                                        className="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           className="c-nav__link"
                                                                                           data-fdid="archives-mss22-fs"
                                                                                           href="/ko-kr/displayname-archives-mss22-fs"
                                                                                           id="navigation-1718335093630-gwqv0k6n6">
                                                                                            FASHION SHOW
                                                                                        </a>


                                                                                    </li>

                                                                                    <li data-ref="item"
                                                                                        className="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           className="c-nav__link"
                                                                                           data-fdid="archives-mss22-exhibition"
                                                                                           href="/ko-kr/displayname-archives-mss22-exhibition"
                                                                                           id="navigation-1718335093630-gmjdhi0nt">
                                                                                            EXHIBITION
                                                                                        </a>


                                                                                    </li>

                                                                                    <li data-ref="item"
                                                                                        className="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           className="c-nav__link"
                                                                                           data-fdid="archives-mss22-looks"
                                                                                           href="/ko-kr/displayname-archives-mss22-looks"
                                                                                           id="navigation-1718335093630-hy8lbb6w3">
                                                                                            LOOKS
                                                                                        </a>


                                                                                    </li>

                                                                                </ul>
                                                                            </div>

                                                                        </li>

                                                                    </ul>
                                                                </div>

                                                            </li>

                                                            <li data-ref="item" className="c-nav__item"
                                                                data-haschildren="true">

                                                                <button data-ref="link" className="c-nav__link"
                                                                        id="navigation-1718335093630-ykckwbvpf"
                                                                        aria-controls="navigation-1718335093630-59bg9nvhq"
                                                                        aria-expanded="false">
                                                                    2021
                                                                </button>


                                                                <div className="c-nav__subnav" data-ref="subnav"
                                                                     id="navigation-1718335093630-59bg9nvhq"
                                                                     aria-hidden="true">
                                                                    <ul className="c-nav__list c-nav__subnav--editorial">

                                                                        <li data-ref="item" className="c-nav__item"
                                                                            data-haschildren="true">

                                                                            <button data-ref="link"
                                                                                    className="c-nav__link"
                                                                                    id="navigation-1718335093630-uefhd6jqx"
                                                                                    aria-controls="navigation-1718335093630-rh0s4nzec"
                                                                                    aria-expanded="false">
                                                                                여성 겨울 21
                                                                            </button>


                                                                            <div className="c-nav__subnav"
                                                                                 data-ref="subnav"
                                                                                 id="navigation-1718335093630-rh0s4nzec"
                                                                                 aria-hidden="true">
                                                                                <ul className="c-nav__list c-nav__subnav--editorial">

                                                                                    <li data-ref="item"
                                                                                        className="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           className="c-nav__link"
                                                                                           data-fdid="collections-wwinter21-fashion-show-video"
                                                                                           href="/ko-kr/displayname-collections-wwinter21-fashion-show-video"
                                                                                           id="navigation-1718335093630-sa66userp">
                                                                                            FASHION SHOW
                                                                                        </a>


                                                                                    </li>

                                                                                </ul>
                                                                            </div>

                                                                        </li>

                                                                        <li data-ref="item" className="c-nav__item"
                                                                            data-haschildren="true">

                                                                            <button data-ref="link"
                                                                                    className="c-nav__link"
                                                                                    id="navigation-1718335093630-y5kaoklnr"
                                                                                    aria-controls="navigation-1718335093630-v5i6ikgv4"
                                                                                    aria-expanded="false">
                                                                                여성 여름 21
                                                                            </button>


                                                                            <div className="c-nav__subnav"
                                                                                 data-ref="subnav"
                                                                                 id="navigation-1718335093630-v5i6ikgv4"
                                                                                 aria-hidden="true">
                                                                                <ul className="c-nav__list c-nav__subnav--editorial">

                                                                                    <li data-ref="item"
                                                                                        className="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           className="c-nav__link"
                                                                                           data-fdid="archives-ws21-fs"
                                                                                           href="/ko-kr/displayname-archives-ws21-fs"
                                                                                           id="navigation-1718335093630-vqxnmdwyp">
                                                                                            FASHION SHOW
                                                                                        </a>


                                                                                    </li>

                                                                                    <li data-ref="item"
                                                                                        className="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           className="c-nav__link"
                                                                                           data-fdid="archives-ws21-french-water"
                                                                                           href="/ko-kr/displayname-archives-ws21-french-water"
                                                                                           id="navigation-1718335093630-pzkbuf51n">
                                                                                            FRENCH WATER
                                                                                        </a>


                                                                                    </li>

                                                                                    <li data-ref="item"
                                                                                        className="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           className="c-nav__link"
                                                                                           data-fdid="archives-ww21-images"
                                                                                           href="/ko-kr/displayname-archives-ww21-images"
                                                                                           id="navigation-1718335093630-xgxt8j0co">
                                                                                            IMAGES
                                                                                        </a>


                                                                                    </li>

                                                                                    <li data-ref="item"
                                                                                        className="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           className="c-nav__link"
                                                                                           data-fdid="archives-ws21-images"
                                                                                           href="/ko-kr/displayname-archives-ws21-images"
                                                                                           id="navigation-1718335093630-ay7wnvi2p">
                                                                                            VIDEO
                                                                                        </a>


                                                                                    </li>

                                                                                    <li data-ref="item"
                                                                                        className="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           className="c-nav__link"
                                                                                           data-fdid="archives-ws21-#YSL36"
                                                                                           href="/ko-kr/displayname-archives-ws21-%23ysl36"
                                                                                           id="navigation-1718335093631-ophkeds5t">
                                                                                            #YSL36
                                                                                        </a>


                                                                                    </li>

                                                                                </ul>
                                                                            </div>

                                                                        </li>

                                                                        <li data-ref="item" className="c-nav__item"
                                                                            data-haschildren="true">

                                                                            <button data-ref="link"
                                                                                    className="c-nav__link"
                                                                                    id="navigation-1718335093631-g1aaciqwp"
                                                                                    aria-controls="navigation-1718335093631-aj06x5t48"
                                                                                    aria-expanded="false">
                                                                                남성 봄 여름 21
                                                                            </button>


                                                                            <div className="c-nav__subnav"
                                                                                 data-ref="subnav"
                                                                                 id="navigation-1718335093631-aj06x5t48"
                                                                                 aria-hidden="true">
                                                                                <ul className="c-nav__list c-nav__subnav--editorial">

                                                                                    <li data-ref="item"
                                                                                        className="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           className="c-nav__link"
                                                                                           data-fdid="archives-mss21-video"
                                                                                           href="/ko-kr/displayname-archives-mss21-video"
                                                                                           id="navigation-1718335093631-qsnkrnwa2">
                                                                                            VIDEO
                                                                                        </a>


                                                                                    </li>

                                                                                    <li data-ref="item"
                                                                                        className="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           className="c-nav__link"
                                                                                           data-fdid="archives-mss21-images"
                                                                                           href="/ko-kr/displayname-archives-mss21-images"
                                                                                           id="navigation-1718335093631-of044twlk">
                                                                                            IMAGES
                                                                                        </a>


                                                                                    </li>

                                                                                </ul>
                                                                            </div>

                                                                        </li>

                                                                    </ul>
                                                                </div>

                                                            </li>

                                                            <li data-ref="item" className="c-nav__item"
                                                                data-haschildren="true">

                                                                <button data-ref="link" className="c-nav__link"
                                                                        id="navigation-1718335093631-7cdwow8ss"
                                                                        aria-controls="navigation-1718335093631-2dum73uv8"
                                                                        aria-expanded="false">
                                                                    2020
                                                                </button>


                                                                <div className="c-nav__subnav" data-ref="subnav"
                                                                     id="navigation-1718335093631-2dum73uv8"
                                                                     aria-hidden="true">
                                                                    <ul className="c-nav__list c-nav__subnav--editorial">

                                                                        <li data-ref="item" className="c-nav__item"
                                                                            data-haschildren="true">

                                                                            <button data-ref="link"
                                                                                    className="c-nav__link"
                                                                                    id="navigation-1718335093631-mikixqlo3"
                                                                                    aria-controls="navigation-1718335093631-qgdtxqeaj"
                                                                                    aria-expanded="false">
                                                                                여성 겨울 20
                                                                            </button>


                                                                            <div className="c-nav__subnav"
                                                                                 data-ref="subnav"
                                                                                 id="navigation-1718335093631-qgdtxqeaj"
                                                                                 aria-hidden="true">
                                                                                <ul className="c-nav__list c-nav__subnav--editorial">

                                                                                    <li data-ref="item"
                                                                                        className="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           className="c-nav__link"
                                                                                           data-fdid="archives-ww20-fs"
                                                                                           href="/ko-kr/displayname-archives-ww20-fs"
                                                                                           id="navigation-1718335093631-p37qe2n7h">
                                                                                            Fashion Show
                                                                                        </a>


                                                                                    </li>

                                                                                    <li data-ref="item"
                                                                                        className="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           className="c-nav__link"
                                                                                           data-fdid="archives-ww20-video"
                                                                                           href="/ko-kr/displayname-archives-ww20-video"
                                                                                           id="navigation-1718335093631-9fx6qf62f">
                                                                                            CAMPAIGN VIDEO
                                                                                        </a>


                                                                                    </li>

                                                                                </ul>
                                                                            </div>

                                                                        </li>

                                                                        <li data-ref="item" className="c-nav__item"
                                                                            data-haschildren="true">

                                                                            <button data-ref="link"
                                                                                    className="c-nav__link"
                                                                                    id="navigation-1718335093631-6ej3jmxp0"
                                                                                    aria-controls="navigation-1718335093631-iphbtwv02"
                                                                                    aria-expanded="false">
                                                                                여성 여름 20
                                                                            </button>


                                                                            <div className="c-nav__subnav"
                                                                                 data-ref="subnav"
                                                                                 id="navigation-1718335093631-iphbtwv02"
                                                                                 aria-hidden="true">
                                                                                <ul className="c-nav__list c-nav__subnav--editorial">

                                                                                    <li data-ref="item"
                                                                                        className="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           className="c-nav__link"
                                                                                           data-fdid="archives-ws20-fs"
                                                                                           href="/ko-kr/displayname-archives-ws20-fs"
                                                                                           id="navigation-1718335093631-ep1pvguk9">
                                                                                            Fashion Show
                                                                                        </a>


                                                                                    </li>

                                                                                    <li data-ref="item"
                                                                                        className="c-nav__item"
                                                                                        data-haschildren="true">

                                                                                        <button data-ref="link"
                                                                                                className="c-nav__link"
                                                                                                id="navigation-1718335093631-symso6w10"
                                                                                                aria-controls="navigation-1718335093631-iay7u59bs"
                                                                                                aria-expanded="false">
                                                                                            BEHIND THE SCENE
                                                                                        </button>


                                                                                        <div className="c-nav__subnav"
                                                                                             data-ref="subnav"
                                                                                             id="navigation-1718335093631-iay7u59bs"
                                                                                             aria-hidden="true">
                                                                                            <ul className="c-nav__list c-nav__subnav--editorial">

                                                                                                <li data-ref="item"
                                                                                                    className="c-nav__item">

                                                                                                    <a data-ref="link"
                                                                                                       className="c-nav__link"
                                                                                                       data-fdid="archives-ws20-bts-1"
                                                                                                       href="/ko-kr/displayname-archives-ws20-bts-1"
                                                                                                       id="navigation-1718335093631-tcqre9ma5">
                                                                                                        Part I
                                                                                                    </a>


                                                                                                </li>

                                                                                                <li data-ref="item"
                                                                                                    className="c-nav__item">

                                                                                                    <a data-ref="link"
                                                                                                       className="c-nav__link"
                                                                                                       data-fdid="archives-ws20-bts-2"
                                                                                                       href="/ko-kr/displayname-archives-ws20-bts-2"
                                                                                                       id="navigation-1718335093631-v7ju1dszk">
                                                                                                        Part II
                                                                                                    </a>


                                                                                                </li>

                                                                                                <li data-ref="item"
                                                                                                    className="c-nav__item">

                                                                                                    <a data-ref="link"
                                                                                                       className="c-nav__link"
                                                                                                       data-fdid="archives-ws20-bts-3"
                                                                                                       href="/ko-kr/displayname-archives-ws20-bts-3"
                                                                                                       id="navigation-1718335093631-os4al0xxu">
                                                                                                        Part III
                                                                                                    </a>


                                                                                                </li>

                                                                                            </ul>
                                                                                        </div>

                                                                                    </li>

                                                                                    <li data-ref="item"
                                                                                        class="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           class="c-nav__link"
                                                                                           data-fdid="archives-ws20-ysl29"
                                                                                           href="/ko-kr/displayname-archives-ws20-ysl29"
                                                                                           id="navigation-1718335093631-pqv8llcsr">
                                                                                            #YSL29
                                                                                        </a>


                                                                                    </li>

                                                                                    <li data-ref="item"
                                                                                        class="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           class="c-nav__link"
                                                                                           data-fdid="archives-ws20-video"
                                                                                           href="/ko-kr/displayname-archives-ws20-video"
                                                                                           id="navigation-1718335093631-a5my4h8mh">
                                                                                            CAMPAIGN VIDEO
                                                                                        </a>


                                                                                    </li>

                                                                                </ul>
                                                                            </div>

                                                                        </li>

                                                                        <li data-ref="item" class="c-nav__item"
                                                                            data-haschildren="true">

                                                                            <button data-ref="link" class="c-nav__link"
                                                                                    id="navigation-1718335093632-er6ek126f"
                                                                                    aria-controls="navigation-1718335093632-0lzikeonh"
                                                                                    aria-expanded="false">
                                                                                남성 봄 여름 20
                                                                            </button>


                                                                            <div class="c-nav__subnav" data-ref="subnav"
                                                                                 id="navigation-1718335093632-0lzikeonh"
                                                                                 aria-hidden="true">
                                                                                <ul class="c-nav__list c-nav__subnav--editorial">

                                                                                    <li data-ref="item"
                                                                                        class="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           class="c-nav__link"
                                                                                           data-fdid="archives-mss20-fs"
                                                                                           href="/ko-kr/displayname-archives-mss20-fs"
                                                                                           id="navigation-1718335093632-pjzej9y4v">
                                                                                            Fashion Show
                                                                                        </a>


                                                                                    </li>

                                                                                    <li data-ref="item"
                                                                                        class="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           class="c-nav__link"
                                                                                           data-fdid="archives-mss20-video"
                                                                                           href="/ko-kr/displayname-archives-mss20-video"
                                                                                           id="navigation-1718335093632-kza71puuq">
                                                                                            Video
                                                                                        </a>


                                                                                    </li>

                                                                                </ul>
                                                                            </div>

                                                                        </li>

                                                                    </ul>
                                                                </div>

                                                            </li>

                                                            <li data-ref="item" class="c-nav__item"
                                                                data-haschildren="true">

                                                                <button data-ref="link" class="c-nav__link"
                                                                        id="navigation-1718335093632-6fltk01tp"
                                                                        aria-controls="navigation-1718335093632-d2ptn0lg3"
                                                                        aria-expanded="false">
                                                                    2019
                                                                </button>


                                                                <div class="c-nav__subnav" data-ref="subnav"
                                                                     id="navigation-1718335093632-d2ptn0lg3"
                                                                     aria-hidden="true">
                                                                    <ul class="c-nav__list c-nav__subnav--editorial">

                                                                        <li data-ref="item" class="c-nav__item"
                                                                            data-haschildren="true">

                                                                            <button data-ref="link" class="c-nav__link"
                                                                                    id="navigation-1718335093632-xkd5fd6da"
                                                                                    aria-controls="navigation-1718335093632-liaxitl5v"
                                                                                    aria-expanded="false">
                                                                                여성 겨울 19
                                                                            </button>


                                                                            <div class="c-nav__subnav" data-ref="subnav"
                                                                                 id="navigation-1718335093632-liaxitl5v"
                                                                                 aria-hidden="true">
                                                                                <ul class="c-nav__list c-nav__subnav--editorial">

                                                                                    <li data-ref="item"
                                                                                        class="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           class="c-nav__link"
                                                                                           data-fdid="collections-fashion-show-w-winter19"
                                                                                           href="/ko-kr/displayname-collections-fashion-show-w-winter19"
                                                                                           id="navigation-1718335093632-bqq93gkk2">
                                                                                            Fashion Show
                                                                                        </a>


                                                                                    </li>

                                                                                    <li data-ref="item"
                                                                                        class="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           class="c-nav__link"
                                                                                           data-fdid="collections-campaign-video-w-winter19"
                                                                                           href="/ko-kr/displayname-collections-campaign-video-w-winter19"
                                                                                           id="navigation-1718335093632-wtv36ueh2">
                                                                                            CAMPAIGN VIDEO
                                                                                        </a>


                                                                                    </li>

                                                                                </ul>
                                                                            </div>

                                                                        </li>

                                                                        <li data-ref="item" class="c-nav__item"
                                                                            data-haschildren="true">

                                                                            <button data-ref="link" class="c-nav__link"
                                                                                    id="navigation-1718335093632-4a9gma3hl"
                                                                                    aria-controls="navigation-1718335093632-k31d6hog8"
                                                                                    aria-expanded="false">
                                                                                여성 여름 19
                                                                            </button>


                                                                            <div class="c-nav__subnav" data-ref="subnav"
                                                                                 id="navigation-1718335093632-k31d6hog8"
                                                                                 aria-hidden="true">
                                                                                <ul class="c-nav__list c-nav__subnav--editorial">

                                                                                    <li data-ref="item"
                                                                                        class="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           class="c-nav__link"
                                                                                           data-fdid="archives-fashion-show-w-summer19"
                                                                                           href="/ko-kr/displayname-archives-fashion-show-w-summer19"
                                                                                           id="navigation-1718335093632-4v6ztq4ca">
                                                                                            Fashion Show
                                                                                        </a>


                                                                                    </li>

                                                                                    <li data-ref="item"
                                                                                        class="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           class="c-nav__link"
                                                                                           data-fdid="archives-campaign-video-w-summer19"
                                                                                           href="/ko-kr/displayname-archives-campaign-video-w-summer19"
                                                                                           id="navigation-1718335093632-8m7854qdq">
                                                                                            CAMPAIGN VIDEO
                                                                                        </a>


                                                                                    </li>

                                                                                </ul>
                                                                            </div>

                                                                        </li>

                                                                        <li data-ref="item" class="c-nav__item"
                                                                            data-haschildren="true">

                                                                            <button data-ref="link" class="c-nav__link"
                                                                                    id="navigation-1718335093632-2s5gejbnw"
                                                                                    aria-controls="navigation-1718335093632-zlex1mf6z"
                                                                                    aria-expanded="false">
                                                                                여성 봄 19
                                                                            </button>


                                                                            <div class="c-nav__subnav" data-ref="subnav"
                                                                                 id="navigation-1718335093632-zlex1mf6z"
                                                                                 aria-hidden="true">
                                                                                <ul class="c-nav__list c-nav__subnav--editorial">

                                                                                    <li data-ref="item"
                                                                                        class="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           class="c-nav__link"
                                                                                           data-fdid="archives-amber-valleta-w-spring19"
                                                                                           href="/ko-kr/displayname-archives-amber-valleta-w-spring19"
                                                                                           id="navigation-1718335093632-8u191jnnq">
                                                                                            Amber Valletta
                                                                                        </a>


                                                                                    </li>

                                                                                    <li data-ref="item"
                                                                                        class="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           class="c-nav__link"
                                                                                           data-fdid="archives-charlotte-gainsbourg-w-spring19"
                                                                                           href="/ko-kr/displayname-archives-charlotte-gainsbourg-w-spring19"
                                                                                           id="navigation-1718335093632-74g1ucad0">
                                                                                            Charlotte Gainsbourg
                                                                                        </a>


                                                                                    </li>

                                                                                    <li data-ref="item"
                                                                                        class="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           class="c-nav__link"
                                                                                           data-fdid="archives-rebecca-w-spring19"
                                                                                           href="/ko-kr/displayname-archives-rebecca-w-spring19"
                                                                                           id="navigation-1718335093632-vacqzkdjd">
                                                                                            Rebecca
                                                                                        </a>


                                                                                    </li>

                                                                                    <li data-ref="item"
                                                                                        class="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           class="c-nav__link"
                                                                                           data-fdid="archives-mathilde-w-spring19"
                                                                                           href="/ko-kr/displayname-archives-mathilde-w-spring19"
                                                                                           id="navigation-1718335093632-bhp8o00nt">
                                                                                            Mathilde
                                                                                        </a>


                                                                                    </li>

                                                                                </ul>
                                                                            </div>

                                                                        </li>

                                                                        <li data-ref="item" class="c-nav__item"
                                                                            data-haschildren="true">

                                                                            <button data-ref="link" class="c-nav__link"
                                                                                    id="navigation-1718335093633-b01cg7zf3"
                                                                                    aria-controls="navigation-1718335093633-key3sz4py"
                                                                                    aria-expanded="false">
                                                                                남성 봄 여름 19
                                                                            </button>


                                                                            <div class="c-nav__subnav" data-ref="subnav"
                                                                                 id="navigation-1718335093633-key3sz4py"
                                                                                 aria-hidden="true">
                                                                                <ul class="c-nav__list c-nav__subnav--editorial">

                                                                                    <li data-ref="item"
                                                                                        class="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           class="c-nav__link"
                                                                                           data-fdid="archives-fashion-show-m-spring-summer19"
                                                                                           href="/ko-kr/displayname-archives-fashion-show-m-spring-summer19"
                                                                                           id="navigation-1718335093633-ror8t56qv">
                                                                                            Fashion Show
                                                                                        </a>


                                                                                    </li>

                                                                                    <li data-ref="item"
                                                                                        class="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           class="c-nav__link"
                                                                                           data-fdid="archives-behind-the-scene-m-spring-summer19"
                                                                                           href="/ko-kr/displayname-archives-behind-the-scene-m-spring-summer19"
                                                                                           id="navigation-1718335093633-u472i4rl4">
                                                                                            Behind the Scene
                                                                                        </a>


                                                                                    </li>

                                                                                    <li data-ref="item"
                                                                                        class="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           class="c-nav__link"
                                                                                           data-fdid="archives-campaign-video-m-spring-summer19"
                                                                                           href="/ko-kr/displayname-archives-campaign-video-m-spring-summer19"
                                                                                           id="navigation-1718335093633-dhikjw6ph">
                                                                                            CAMPAIGN VIDEO
                                                                                        </a>


                                                                                    </li>

                                                                                    <li data-ref="item"
                                                                                        class="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           class="c-nav__link"
                                                                                           data-fdid="archives-caleb-landry-jones-m-spring-summer19"
                                                                                           href="/ko-kr/displayname-archives-caleb-landry-jones-m-spring-summer19"
                                                                                           id="navigation-1718335093633-vdy1jhvsu">
                                                                                            Caleb Landry Jones
                                                                                        </a>


                                                                                    </li>

                                                                                </ul>
                                                                            </div>

                                                                        </li>

                                                                    </ul>
                                                                </div>

                                                            </li>

                                                            <li data-ref="item" class="c-nav__item"
                                                                data-haschildren="true">

                                                                <button data-ref="link" class="c-nav__link"
                                                                        id="navigation-1718335093633-uzw6ltumo"
                                                                        aria-controls="navigation-1718335093633-hgzx4fyv6"
                                                                        aria-expanded="false">
                                                                    2018
                                                                </button>


                                                                <div class="c-nav__subnav" data-ref="subnav"
                                                                     id="navigation-1718335093633-hgzx4fyv6"
                                                                     aria-hidden="true">
                                                                    <ul class="c-nav__list c-nav__subnav--editorial">

                                                                        <li data-ref="item" class="c-nav__item"
                                                                            data-haschildren="true">

                                                                            <button data-ref="link" class="c-nav__link"
                                                                                    id="navigation-1718335093633-vsd807skq"
                                                                                    aria-controls="navigation-1718335093633-l6qsqchdt"
                                                                                    aria-expanded="false">
                                                                                여성 겨울 18
                                                                            </button>


                                                                            <div class="c-nav__subnav" data-ref="subnav"
                                                                                 id="navigation-1718335093633-l6qsqchdt"
                                                                                 aria-hidden="true">
                                                                                <ul class="c-nav__list c-nav__subnav--editorial">

                                                                                    <li data-ref="item"
                                                                                        class="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           class="c-nav__link"
                                                                                           data-fdid="archives-fashion-show-w-winter18"
                                                                                           href="/ko-kr/displayname-archives-fashion-show-w-winter18"
                                                                                           id="navigation-1718335093633-maso94esz">
                                                                                            Fashion Show
                                                                                        </a>


                                                                                    </li>

                                                                                    <li data-ref="item"
                                                                                        class="c-nav__item"
                                                                                        data-haschildren="true">

                                                                                        <button data-ref="link"
                                                                                                class="c-nav__link"
                                                                                                id="navigation-1718335093633-pny23uyc3"
                                                                                                aria-controls="navigation-1718335093633-22668ygss"
                                                                                                aria-expanded="false">
                                                                                            Campaign Video part II
                                                                                        </button>


                                                                                        <div class="c-nav__subnav"
                                                                                             data-ref="subnav"
                                                                                             id="navigation-1718335093633-22668ygss"
                                                                                             aria-hidden="true">
                                                                                            <ul class="c-nav__list c-nav__subnav--editorial">

                                                                                                <li data-ref="item"
                                                                                                    class="c-nav__item">

                                                                                                    <a data-ref="link"
                                                                                                       class="c-nav__link"
                                                                                                       data-fdid="archives-capaign-video-mica1-w-winter18"
                                                                                                       href="/ko-kr/displayname-archives-capaign-video-mica1-w-winter18"
                                                                                                       id="navigation-1718335093633-33722o6im">
                                                                                                        Mica I
                                                                                                    </a>


                                                                                                </li>

                                                                                                <li data-ref="item"
                                                                                                    class="c-nav__item">

                                                                                                    <a data-ref="link"
                                                                                                       class="c-nav__link"
                                                                                                       data-fdid="archives-capaign-video-mica2-w-winter18"
                                                                                                       href="/ko-kr/displayname-archives-capaign-video-mica2-w-winter18"
                                                                                                       id="navigation-1718335093633-d16oof3j8">
                                                                                                        Mica II
                                                                                                    </a>


                                                                                                </li>

                                                                                                <li data-ref="item"
                                                                                                    class="c-nav__item">

                                                                                                    <a data-ref="link"
                                                                                                       class="c-nav__link"
                                                                                                       data-fdid="archives-capaign-video-mica3-w-winter18"
                                                                                                       href="/ko-kr/displayname-archives-capaign-video-mica3-w-winter18"
                                                                                                       id="navigation-1718335093633-se06slvhe">
                                                                                                        Mica III
                                                                                                    </a>


                                                                                                </li>

                                                                                                <li data-ref="item"
                                                                                                    class="c-nav__item">

                                                                                                    <a data-ref="link"
                                                                                                       class="c-nav__link"
                                                                                                       data-fdid="archives-capaign-video-mica4-w-winter18"
                                                                                                       href="/ko-kr/displayname-archives-capaign-video-mica4-w-winter18"
                                                                                                       id="navigation-1718335093633-xlce11zs7">
                                                                                                        Mica IV
                                                                                                    </a>


                                                                                                </li>

                                                                                            </ul>
                                                                                        </div>

                                                                                    </li>

                                                                                    <li data-ref="item"
                                                                                        class="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           class="c-nav__link"
                                                                                           data-fdid="archives-behind-the-scene-w-winter18"
                                                                                           href="/ko-kr/displayname-archives-behind-the-scene-w-winter18"
                                                                                           id="navigation-1718335093633-jac82l6vp">
                                                                                            Behind the Scene
                                                                                        </a>


                                                                                    </li>

                                                                                    <li data-ref="item"
                                                                                        class="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           class="c-nav__link"
                                                                                           data-fdid="archives-campaign-video-part1-w-winter18"
                                                                                           href="/ko-kr/displayname-archives-campaign-video-part1-w-winter18"
                                                                                           id="navigation-1718335093633-urks4hq16">
                                                                                            Campaign Video part I
                                                                                        </a>


                                                                                    </li>

                                                                                </ul>
                                                                            </div>

                                                                        </li>

                                                                        <li data-ref="item" class="c-nav__item"
                                                                            data-haschildren="true">

                                                                            <button data-ref="link" class="c-nav__link"
                                                                                    id="navigation-1718335093633-049pi7xtc"
                                                                                    aria-controls="navigation-1718335093633-mhs2bysq1"
                                                                                    aria-expanded="false">
                                                                                가을/겨울 남성18
                                                                            </button>


                                                                            <div class="c-nav__subnav" data-ref="subnav"
                                                                                 id="navigation-1718335093633-mhs2bysq1"
                                                                                 aria-hidden="true">
                                                                                <ul class="c-nav__list c-nav__subnav--editorial">

                                                                                    <li data-ref="item"
                                                                                        class="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           class="c-nav__link"
                                                                                           data-fdid="archives-campaign-video-m-fall-winter18"
                                                                                           href="/ko-kr/displayname-archives-campaign-video-m-fall-winter18"
                                                                                           id="navigation-1718335093634-1ghu1tv49">
                                                                                            CAMPAIGN VIDEO
                                                                                        </a>


                                                                                    </li>

                                                                                    <li data-ref="item"
                                                                                        class="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           class="c-nav__link"
                                                                                           data-fdid="archives-lennon-video-m-fall-winter18"
                                                                                           href="/ko-kr/displayname-archives-lennon-video-m-fall-winter18"
                                                                                           id="navigation-1718335093634-vhz1f340x">
                                                                                            Lennon Video
                                                                                        </a>


                                                                                    </li>

                                                                                    <li data-ref="item"
                                                                                        class="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           class="c-nav__link"
                                                                                           data-fdid="archives-lennon-gallagher-m-fall-winter18"
                                                                                           href="/ko-kr/displayname-archives-lennon-gallagher-m-fall-winter18"
                                                                                           id="navigation-1718335093634-jcfcghool">
                                                                                            Lennon Gallagher
                                                                                        </a>


                                                                                    </li>

                                                                                    <li data-ref="item"
                                                                                        class="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           class="c-nav__link"
                                                                                           data-fdid="archives-sunglasses-video-m-fall-winter18"
                                                                                           href="/ko-kr/displayname-archives-sunglasses-video-m-fall-winter18"
                                                                                           id="navigation-1718335093634-xtkah76mu">
                                                                                            Sunglasses Video
                                                                                        </a>


                                                                                    </li>

                                                                                </ul>
                                                                            </div>

                                                                        </li>

                                                                        <li data-ref="item" class="c-nav__item"
                                                                            data-haschildren="true">

                                                                            <button data-ref="link" class="c-nav__link"
                                                                                    id="navigation-1718335093634-03d3t8wxv"
                                                                                    aria-controls="navigation-1718335093634-eakjogmzq"
                                                                                    aria-expanded="false">
                                                                                여성 가을18
                                                                            </button>


                                                                            <div class="c-nav__subnav" data-ref="subnav"
                                                                                 id="navigation-1718335093634-eakjogmzq"
                                                                                 aria-hidden="true">
                                                                                <ul class="c-nav__list c-nav__subnav--editorial">

                                                                                    <li data-ref="item"
                                                                                        class="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           class="c-nav__link"
                                                                                           data-fdid="archives-campaign-video-w-fall18"
                                                                                           href="/ko-kr/displayname-archives-campaign-video-w-fall18"
                                                                                           id="navigation-1718335093634-mzmzqkgsf">
                                                                                            Campaign Video
                                                                                        </a>


                                                                                    </li>

                                                                                    <li data-ref="item"
                                                                                        class="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           class="c-nav__link"
                                                                                           data-fdid="archives-kaia-gerber-w-fall18"
                                                                                           href="/ko-kr/displayname-archives-kaia-gerber-w-fall18"
                                                                                           id="navigation-1718335093634-8c35uf6i0">
                                                                                            Kaia Gerber
                                                                                        </a>


                                                                                    </li>

                                                                                    <li data-ref="item"
                                                                                        class="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           class="c-nav__link"
                                                                                           data-fdid="archives-zoe-kravitz-w-fall18"
                                                                                           href="/ko-kr/displayname-archives-zoe-kravitz-w-fall18"
                                                                                           id="navigation-1718335093634-siqpvsdi4">
                                                                                            Zoe Kravitz
                                                                                        </a>


                                                                                    </li>

                                                                                    <li data-ref="item"
                                                                                        class="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           class="c-nav__link"
                                                                                           data-fdid="archives-charlotte-casiraghi-w-fall18"
                                                                                           href="/ko-kr/displayname-archives-charlotte-casiraghi-w-fall18"
                                                                                           id="navigation-1718335093634-j0tjwxv6f">
                                                                                            Charlotte Casiraghi
                                                                                        </a>


                                                                                    </li>

                                                                                    <li data-ref="item"
                                                                                        class="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           class="c-nav__link"
                                                                                           data-fdid="archives-sunglasses-video-w-fall18"
                                                                                           href="/ko-kr/displayname-archives-sunglasses-video-w-fall18"
                                                                                           id="navigation-1718335093634-zlh43up07">
                                                                                            Sunglasses Video
                                                                                        </a>


                                                                                    </li>

                                                                                </ul>
                                                                            </div>

                                                                        </li>

                                                                        <li data-ref="item" class="c-nav__item"
                                                                            data-haschildren="true">

                                                                            <button data-ref="link" class="c-nav__link"
                                                                                    id="navigation-1718335093634-42al4ehfx"
                                                                                    aria-controls="navigation-1718335093634-5jw04zqwm"
                                                                                    aria-expanded="false">
                                                                                남성 봄 여름 18
                                                                            </button>


                                                                            <div class="c-nav__subnav" data-ref="subnav"
                                                                                 id="navigation-1718335093634-5jw04zqwm"
                                                                                 aria-hidden="true">
                                                                                <ul class="c-nav__list c-nav__subnav--editorial">

                                                                                    <li data-ref="item"
                                                                                        class="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           class="c-nav__link"
                                                                                           data-fdid="archives-campaign-video-m-spring-summer18"
                                                                                           href="/ko-kr/displayname-archives-campaign-video-m-spring-summer18"
                                                                                           id="navigation-1718335093634-kkbja2s43">
                                                                                            CAMPAIGN VIDEO
                                                                                        </a>


                                                                                    </li>

                                                                                    <li data-ref="item"
                                                                                        class="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           class="c-nav__link"
                                                                                           data-fdid="archives-vincent-gallo-part1-m-spring-summer18"
                                                                                           href="/ko-kr/displayname-archives-vincent-gallo-part1-m-spring-summer18"
                                                                                           id="navigation-1718335093634-25rv12l79">
                                                                                            Vincent Gallo part I
                                                                                        </a>


                                                                                    </li>

                                                                                    <li data-ref="item"
                                                                                        class="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           class="c-nav__link"
                                                                                           data-fdid="archives-vincent-gallo-part2-m-spring-summer18"
                                                                                           href="/ko-kr/displayname-archives-vincent-gallo-part2-m-spring-summer18"
                                                                                           id="navigation-1718335093634-wg5if3ghy">
                                                                                            Vincent Gallo part II
                                                                                        </a>


                                                                                    </li>

                                                                                </ul>
                                                                            </div>

                                                                        </li>

                                                                        <li data-ref="item" class="c-nav__item"
                                                                            data-haschildren="true">

                                                                            <button data-ref="link" class="c-nav__link"
                                                                                    id="navigation-1718335093634-csi59s862"
                                                                                    aria-controls="navigation-1718335093634-nib6ape0z"
                                                                                    aria-expanded="false">
                                                                                여성 여름 18
                                                                            </button>


                                                                            <div class="c-nav__subnav" data-ref="subnav"
                                                                                 id="navigation-1718335093634-nib6ape0z"
                                                                                 aria-hidden="true">
                                                                                <ul class="c-nav__list c-nav__subnav--editorial">

                                                                                    <li data-ref="item"
                                                                                        class="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           class="c-nav__link"
                                                                                           data-fdid="archives-fashion-show-w-summer18"
                                                                                           href="/ko-kr/displayname-archives-fashion-show-w-summer18"
                                                                                           id="navigation-1718335093634-503g83g7u">
                                                                                            Fashion Show
                                                                                        </a>


                                                                                    </li>

                                                                                    <li data-ref="item"
                                                                                        class="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           class="c-nav__link"
                                                                                           data-fdid="archives-campaign-video-w-summer18"
                                                                                           href="/ko-kr/displayname-archives-campaign-video-w-summer18"
                                                                                           id="navigation-1718335093635-28p1v44tx">
                                                                                            Campaign Video
                                                                                        </a>


                                                                                    </li>

                                                                                    <li data-ref="item"
                                                                                        class="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           class="c-nav__link"
                                                                                           data-fdid="archives-sunglasses-video-w-summer18"
                                                                                           href="/ko-kr/displayname-archives-sunglasses-video-w-summer18"
                                                                                           id="navigation-1718335093635-wijeywdgl">
                                                                                            Sunglasses Video
                                                                                        </a>


                                                                                    </li>

                                                                                </ul>
                                                                            </div>

                                                                        </li>

                                                                        <li data-ref="item" class="c-nav__item"
                                                                            data-haschildren="true">

                                                                            <a data-ref="link" class="c-nav__link"
                                                                               data-fdid="content-archives-2018-women-spring18"
                                                                               href="/ko-kr/displayname-content-archives-2018-women-spring18"
                                                                               id="navigation-1718335093635-bvsdno0li"
                                                                               role="button"
                                                                               aria-controls="navigation-1718335093635-un8vqa8tr"
                                                                               aria-expanded="false">
                                                                                여성 봄 18
                                                                            </a>


                                                                            <div class="c-nav__subnav" data-ref="subnav"
                                                                                 id="navigation-1718335093635-un8vqa8tr"
                                                                                 aria-hidden="true">
                                                                                <ul class="c-nav__list c-nav__subnav--editorial">

                                                                                    <li data-ref="item"
                                                                                        class="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           class="c-nav__link"
                                                                                           data-fdid="archives-zoe-kravitz-w-spring18"
                                                                                           href="/ko-kr/displayname-archives-zoe-kravitz-w-spring18"
                                                                                           id="navigation-1718335093635-cj89xw2dd">
                                                                                            Zoe Kravitz
                                                                                        </a>


                                                                                    </li>

                                                                                    <li data-ref="item"
                                                                                        class="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           class="c-nav__link"
                                                                                           data-fdid="archives-laetitia-casta-w-spring18"
                                                                                           href="/ko-kr/displayname-archives-laetitia-casta-w-spring18"
                                                                                           id="navigation-1718335093635-urq1v0fld">
                                                                                            Laetitia Casta
                                                                                        </a>


                                                                                    </li>

                                                                                    <li data-ref="item"
                                                                                        class="c-nav__item">

                                                                                        <a data-ref="link"
                                                                                           class="c-nav__link"
                                                                                           data-fdid="archives-kate-moss-w-spring18"
                                                                                           href="/ko-kr/displayname-archives-kate-moss-w-spring18"
                                                                                           id="navigation-1718335093635-ympjn50mu">
                                                                                            Kate Moss
                                                                                        </a>


                                                                                    </li>

                                                                                </ul>
                                                                            </div>

                                                                        </li>

                                                                    </ul>
                                                                </div>

                                                            </li>

                                                            <li data-ref="item" class="c-nav__item"
                                                                data-haschildren="true">

                                                                <button data-ref="link" class="c-nav__link"
                                                                        id="navigation-1718335093635-o873eyxeg"
                                                                        aria-controls="navigation-1718335093635-zrv68lao4"
                                                                        aria-expanded="false">
                                                                    2017
                                                                </button>


                                                                <div class="c-nav__subnav" data-ref="subnav"
                                                                     id="navigation-1718335093635-zrv68lao4"
                                                                     aria-hidden="true">
                                                                    <ul class="c-nav__list c-nav__subnav--editorial">

                                                                        <li data-ref="item" class="c-nav__item">

                                                                            <a data-ref="link" class="c-nav__link"
                                                                               data-fdid="archives-w-winter17"
                                                                               href="/ko-kr/displayname-archives-w-winter17"
                                                                               id="navigation-1718335093635-doq09li62">
                                                                                여성 겨울 17
                                                                            </a>


                                                                        </li>

                                                                        <li data-ref="item" class="c-nav__item">

                                                                            <a data-ref="link" class="c-nav__link"
                                                                               data-fdid="archives-m-winter17-part1"
                                                                               href="/ko-kr/displayname-archives-m-winter17-part1"
                                                                               id="navigation-1718335093635-7hy0x3tre">
                                                                                가을/겨울 남성17 - PART I
                                                                            </a>


                                                                        </li>

                                                                        <li data-ref="item" class="c-nav__item">

                                                                            <a data-ref="link" class="c-nav__link"
                                                                               data-fdid="archives-m-winter17-part2"
                                                                               href="/ko-kr/displayname-archives-m-winter17-part2"
                                                                               id="navigation-1718335093635-qhn08dosj">
                                                                                가을/겨울 남성17 - PART II
                                                                            </a>


                                                                        </li>

                                                                        <li data-ref="item" class="c-nav__item">

                                                                            <a data-ref="link" class="c-nav__link"
                                                                               data-fdid="archives-w-spring17"
                                                                               href="/ko-kr/displayname-archives-w-spring17"
                                                                               id="navigation-1718335093635-kvclc050i">
                                                                                여성 봄 17
                                                                            </a>


                                                                        </li>

                                                                        <li data-ref="item" class="c-nav__item">

                                                                            <a data-ref="link" class="c-nav__link"
                                                                               data-fdid="archives-w-summer17-part1"
                                                                               href="/ko-kr/displayname-archives-w-summer17-part1"
                                                                               id="navigation-1718335093635-q8ffm2b5h">
                                                                                WOMEN'S SUMMER 17 - PART I
                                                                            </a>


                                                                        </li>

                                                                        <li data-ref="item" class="c-nav__item">

                                                                            <a data-ref="link" class="c-nav__link"
                                                                               data-fdid="archives-w-summer17-part2"
                                                                               href="/ko-kr/displayname-archives-w-summer17-part2"
                                                                               id="navigation-1718335093635-7l9o9kiuq">
                                                                                여성 여름 17 - PART II
                                                                            </a>


                                                                        </li>

                                                                        <li data-ref="item" class="c-nav__item">

                                                                            <a data-ref="link" class="c-nav__link"
                                                                               data-fdid="archives-ysl01"
                                                                               href="/ko-kr/displayname-archives-ysl01"
                                                                               id="navigation-1718335093635-lv7ob2kjg">
                                                                                #YSL01
                                                                            </a>


                                                                        </li>

                                                                    </ul>
                                                                </div>

                                                            </li>

                                                        </ul>
                                                    </div>

                                                </li>


                                            </ul>
                                        </div>

                                    </li>

                                    <li data-ref="item" class="c-nav__item"
                                        data-cgid="saint-laurent-rive-droite-cai-guo-qiang" data-level1="true">

                                        <a data-ref="link" class="c-nav__link "
                                           data-cgid="saint-laurent-rive-droite-cai-guo-qiang" data-fdid="root"
                                           href="https://www.ysl.com/ko-kr/displayname-saint-laurent-rive-droite-cai-guo-qiang"
                                           id="navigation-1718335093635-wphy1cvqi">

                                            CAI GUO-QIANG


                                        </a>


                                    </li>

                                    <li data-ref="item" class="c-nav__item" data-cgid="saint-laurent-self"
                                        data-level1="true" data-haschildren="true">

                                        <button data-ref="link" class="c-nav__link "
                                                id="navigation-1718335093636-7b70rpkb4"
                                                aria-controls="navigation-1718335093636-7pf43j57f"
                                                aria-expanded="false">

                                            Saint Laurent Self


                                        </button>


                                        <div data-ref="subnav" class="c-nav__subnav"
                                             id="navigation-1718335093636-7pf43j57f" aria-hidden="true">
                                            <ul class="c-nav__list c-nav__level2" data-ref="navlist">

                                                <li data-ref="item" class="c-nav__item" data-level2="true"
                                                    data-cgid="self-07">

                                                    <a data-ref="link" class="c-nav__link " data-cgid="self-07"
                                                       data-fdid="saint-laurent-self07"
                                                       href="https://www.ysl.com/ko-kr/page-saint-laurent-self07"
                                                       id="navigation-1718335093636-hi1q94zhh">

                                                        SELF 07


                                                    </a>


                                                </li>

                                                <li data-ref="item" class="c-nav__item" data-level2="true"
                                                    data-cgid="self-6">

                                                    <a data-ref="link" class="c-nav__link " data-cgid="self-6"
                                                       data-fdid="saint-laurent-self06"
                                                       href="https://www.ysl.com/ko-kr/video-saint-laurent-self06"
                                                       id="navigation-1718335093636-skdb3jjbt">

                                                        SELF 06


                                                    </a>


                                                </li>

                                                <li data-ref="item" class="c-nav__item" data-level2="true"
                                                    data-cgid="self-5">

                                                    <a data-ref="link" class="c-nav__link " data-cgid="self-5"
                                                       data-fdid="saint-laurent-self05"
                                                       href="https://www.ysl.com/ko-kr/video-saint-laurent-self05"
                                                       id="navigation-1718335093636-c3h5xakvi">

                                                        SELF 05


                                                    </a>


                                                </li>

                                                <li data-ref="item" class="c-nav__item" data-level2="true"
                                                    data-cgid="self-4">

                                                    <a data-ref="link" class="c-nav__link " data-cgid="self-4"
                                                       data-fdid="saint-laurent-self04"
                                                       href="https://www.ysl.com/ko-kr/video-saint-laurent-self04"
                                                       id="navigation-1718335093636-ft0848w39">

                                                        SELF 04


                                                    </a>


                                                </li>

                                                <li data-ref="item" class="c-nav__item" data-level2="true"
                                                    data-cgid="self-3">

                                                    <a data-ref="link" class="c-nav__link " data-cgid="self-3"
                                                       data-fdid="saint-laurent-self03"
                                                       href="https://www.ysl.com/ko-kr/video-saint-laurent-self03"
                                                       id="navigation-1718335093636-3is1rl0he">

                                                        SELF 03


                                                    </a>


                                                </li>

                                                <li data-ref="item" class="c-nav__item" data-level2="true"
                                                    data-cgid="self-2">

                                                    <a data-ref="link" class="c-nav__link " data-cgid="self-2"
                                                       data-fdid="saint-laurent-self02"
                                                       href="https://www.ysl.com/ko-kr/video-saint-laurent-self02"
                                                       id="navigation-1718335093636-gpqtt9gap">

                                                        SELF 02


                                                    </a>


                                                </li>

                                                <li data-ref="item" class="c-nav__item" data-level2="true"
                                                    data-cgid="self-1">

                                                    <a data-ref="link" class="c-nav__link " data-cgid="self-1"
                                                       data-fdid="saint-laurent-self01"
                                                       href="https://www.ysl.com/ko-kr/video-saint-laurent-self01"
                                                       id="navigation-1718335093636-ionq10q9t">

                                                        Self 01


                                                    </a>


                                                </li>

                                                <li data-ref="item" class="c-nav__item" data-level2="true"
                                                    data-cgid="self">

                                                    <a data-ref="link" class="c-nav__link " data-cgid="self"
                                                       data-fdid="saint-laurent-self"
                                                       href="https://www.ysl.com/ko-kr/introduction-saint-laurent-self"
                                                       id="navigation-1718335093636-4orjuqzqp">

                                                        Self


                                                    </a>


                                                </li>


                                            </ul>
                                        </div>

                                    </li>

                                    <li data-ref="item" class="c-nav__item" data-cgid="ysl-saint-laurent-productions"
                                        data-level1="true" data-haschildren="true">

                                        <button data-ref="link" class="c-nav__link "
                                                id="navigation-1718335093636-bdjd0w5of"
                                                aria-controls="navigation-1718335093636-fn30p6m21"
                                                aria-expanded="false">

                                            SAINT LAURENT PRODUCTIONS


                                        </button>


                                        <div data-ref="subnav" class="c-nav__subnav"
                                             id="navigation-1718335093636-fn30p6m21" aria-hidden="true">
                                            <ul class="c-nav__list c-nav__level2" data-ref="navlist">

                                                <li data-ref="item" class="c-nav__item" data-level2="true"
                                                    data-cgid="ysl-saint-laurent-productions-cannes-selection">

                                                    <a data-ref="link" class="c-nav__link "
                                                       data-cgid="ysl-saint-laurent-productions-cannes-selection"
                                                       data-fdid="saint-laurent-productions-about"
                                                       href="https://www.ysl.com/ko-kr/displayname-saint-laurent-productions-about"
                                                       id="navigation-1718335093636-2gchrximu">

                                                        CANNES FILM FESTIVAL 24


                                                    </a>


                                                </li>

                                                <li data-ref="item" class="c-nav__item" data-level2="true"
                                                    data-cgid="ysl-saint-laurent-productions-jean-luc-godard">

                                                    <a data-ref="link" class="c-nav__link "
                                                       data-cgid="ysl-saint-laurent-productions-jean-luc-godard"
                                                       data-fdid="saint-laurent-trailer-of-a-movie-that-will-never-exist"
                                                       href="https://www.ysl.com/ko-kr/displayname-saint-laurent-trailer-of-a-movie-that-will-never-exist"
                                                       id="navigation-1718335093636-zg4s27hfp">

                                                        JEAN-LUC GODARD


                                                    </a>


                                                </li>

                                                <li data-ref="item" class="c-nav__item" data-level2="true"
                                                    data-cgid="ysl-saint-laurent-productions-pedro-almodovar">

                                                    <a data-ref="link" class="c-nav__link "
                                                       data-cgid="ysl-saint-laurent-productions-pedro-almodovar"
                                                       data-fdid="saint-laurent-strange-way-of-life"
                                                       href="https://www.ysl.com/ko-kr/displayname-saint-laurent-strange-way-of-life"
                                                       id="navigation-1718335093636-hirjpz0v6">

                                                        PEDRO ALMODÓVAR


                                                    </a>


                                                </li>

                                                <li data-ref="item" class="c-nav__item" data-level2="true"
                                                    data-cgid="ysl-saint-laurent-productions-gaspar-noe">

                                                    <a data-ref="link" class="c-nav__link "
                                                       data-cgid="ysl-saint-laurent-productions-gaspar-noe"
                                                       data-fdid="saint-laurent-gaspar-noe"
                                                       href="https://www.ysl.com/ko-kr/displayname-saint-laurent-gaspar-noe"
                                                       id="navigation-1718335093636-t2an9ejzu">

                                                        GASPAR NOÉ


                                                    </a>


                                                </li>

                                                <li data-ref="item" class="c-nav__item" data-level2="true"
                                                    data-cgid="ysl-saint-laurent-productions-wong-kar-wai">

                                                    <a data-ref="link" class="c-nav__link "
                                                       data-cgid="ysl-saint-laurent-productions-wong-kar-wai"
                                                       data-fdid="saint-laurent-wong-kar-wai"
                                                       href="https://www.ysl.com/ko-kr/displayname-saint-laurent-wong-kar-wai"
                                                       id="navigation-1718335093636-l21129fgs">

                                                        WONG KAR WAI


                                                    </a>


                                                </li>


                                            </ul>
                                        </div>

                                    </li>

                                    <li data-ref="item" class="c-nav__item" data-cgid="storelocator" data-level1="true">

                                        <a data-ref="link" class="c-nav__link " data-cgid="storelocator"
                                           data-fdid="root" href="https://www.ysl.com/ko-kr/storelocator"
                                           id="navigation-1718335093636-wto1m7m88">

                                            매장 위치 찾기


                                        </a>


                                    </li>

                                    <li data-ref="item" class="c-nav__item c-nav__item--hprivedroite"
                                        data-cgid="rivedroite" data-isrivedroite="true" data-level1="true"
                                        data-haschildren="true">
                                        <a href="/ko-kr/rive-droite" data-cgid="rivedroite" data-ref="link"
                                           class="c-nav__link" id="navigation-1718335093637-zer91y18m" role="button"
                                           aria-controls="navigation-1718335093637-so52a1mtv" aria-expanded="false">
                                            Rive Droite

                                        </a>


                                        <div data-ref="subnav" class="c-nav__subnav"
                                             id="navigation-1718335093637-so52a1mtv" aria-hidden="true">
                                            <ul class="c-nav__list c-nav__level2" data-ref="navlist">

                                                <li data-ref="item" class="c-nav__item" data-level2="true"
                                                    data-cgid="event">

                                                    <a data-ref="link" class="c-nav__link c-nav__link--withlinebreak"
                                                       data-cgid="event" data-fdid="calendar-rivedroite"
                                                       href="https://www.ysl.com/ko-kr/displayname-calendar-rivedroite"
                                                       id="navigation-1718335093637-vjrky02wj">

                                                        CALENDAR


                                                    </a>


                                                </li>

                                                <li data-ref="item" class="c-nav__item" data-level2="true"
                                                    data-cgid="exclusively-now" data-haschildren="true">

                                                    <button data-ref="link" class="c-nav__link "
                                                            id="navigation-1718335093637-57pbzebqm"
                                                            aria-controls="navigation-1718335093637-ky3aqoby1"
                                                            aria-expanded="false">

                                                        Exclusively Now


                                                    </button>


                                                    <div class="c-nav__subnav" data-ref="subnav"
                                                         id="navigation-1718335093637-ky3aqoby1" aria-hidden="true">
                                                        <ul data-ref="navlist" class="c-nav__list c-nav__level3">

                                                            <li data-ref="item"
                                                                class="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="rive-droite-new-arrivals">

                                                                <a data-ref="link" class="c-nav__link "
                                                                   data-cgid="rive-droite-new-arrivals" data-fdid=""
                                                                   href="/ko-kr/rive-droite/exclusively-now/new-arrivals"
                                                                   id="navigation-1718335093637-ylauquirg">

                                                                    New Arrivals


                                                                </a>


                                                            </li>

                                                        </ul>
                                                    </div>


                                                </li>

                                                <li data-ref="item" class="c-nav__item" data-level2="true"
                                                    data-cgid="sl-by-rd" data-haschildren="true">

                                                    <button data-ref="link" class="c-nav__link "
                                                            id="navigation-1718335093637-9ttwu0839"
                                                            aria-controls="navigation-1718335093637-kps9d216e"
                                                            aria-expanded="false">

                                                        SL by Rive Droite


                                                    </button>


                                                    <div class="c-nav__subnav" data-ref="subnav"
                                                         id="navigation-1718335093637-kps9d216e" aria-hidden="true">
                                                        <ul data-ref="navlist" class="c-nav__list c-nav__level3">

                                                            <li data-ref="item"
                                                                class="c-nav__item c-nav__item--withslot"
                                                                data-level3="true"
                                                                data-cgid="saint-laurent-rive-droite-women">

                                                                <a data-ref="link" class="c-nav__link "
                                                                   data-cgid="saint-laurent-rive-droite-women"
                                                                   data-fdid=""
                                                                   href="/ko-kr/rive-droite/sl-by-rive-droite/women"
                                                                   id="navigation-1718335093637-ye1v4ed74">

                                                                    Women


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                class="c-nav__item c-nav__item--withslot"
                                                                data-level3="true"
                                                                data-cgid="saint-laurent-rive-droite-men">

                                                                <a data-ref="link" class="c-nav__link "
                                                                   data-cgid="saint-laurent-rive-droite-men"
                                                                   data-fdid=""
                                                                   href="/ko-kr/rive-droite/sl-by-rive-droite/men"
                                                                   id="navigation-1718335093637-khl5jmopy">

                                                                    Men


                                                                </a>


                                                            </li>

                                                        </ul>
                                                    </div>


                                                </li>

                                                <li data-ref="item" class="c-nav__item" data-level2="true"
                                                    data-cgid="rive-droite-lifestyle" data-haschildren="true">

                                                    <button data-ref="link"
                                                            class="c-nav__link c-nav__link--withlinebreak"
                                                            id="navigation-1718335093637-2rgwafn0h"
                                                            aria-controls="navigation-1718335093637-yhvte1hiq"
                                                            aria-expanded="false">

                                                        Lifestyle


                                                    </button>


                                                    <div class="c-nav__subnav" data-ref="subnav"
                                                         id="navigation-1718335093637-yhvte1hiq" aria-hidden="true">
                                                        <ul data-ref="navlist" class="c-nav__list c-nav__level3">

                                                            <li data-ref="item"
                                                                class="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="rive-droite-interior">

                                                                <a data-ref="link" class="c-nav__link "
                                                                   data-cgid="rive-droite-interior" data-fdid=""
                                                                   href="/ko-kr/rive-droite/lifestyle/interior"
                                                                   id="navigation-1718335093637-yqyjkrxp2">

                                                                    Interior


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                class="c-nav__item c-nav__item--withslot"
                                                                data-level3="true"
                                                                data-cgid="rive-droite-tech-and-leisure">

                                                                <a data-ref="link" class="c-nav__link "
                                                                   data-cgid="rive-droite-tech-and-leisure" data-fdid=""
                                                                   href="/ko-kr/rive-droite/lifestyle/tech-and-leisure"
                                                                   id="navigation-1718335093637-1heigu9kq">

                                                                    Tech and Leisure


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                class="c-nav__item c-nav__item--withslot"
                                                                data-level3="true"
                                                                data-cgid="rive-droite-sports-and-travel">

                                                                <a data-ref="link" class="c-nav__link "
                                                                   data-cgid="rive-droite-sports-and-travel"
                                                                   data-fdid=""
                                                                   href="/ko-kr/rive-droite/lifestyle/sports-and-travel"
                                                                   id="navigation-1718335093637-eqlhwlnlh">

                                                                    Sports and Travel


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                class="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="rive-droite-kids">

                                                                <a data-ref="link" class="c-nav__link "
                                                                   data-cgid="rive-droite-kids" data-fdid=""
                                                                   href="/ko-kr/rive-droite/lifestyle/kids"
                                                                   id="navigation-1718335093637-jwt7dcg3t">

                                                                    Kids


                                                                </a>


                                                            </li>

                                                        </ul>
                                                    </div>


                                                </li>

                                                <li data-ref="item" class="c-nav__item" data-level2="true"
                                                    data-cgid="saint-laurent-rive-droite-editions"
                                                    data-haschildren="true">

                                                    <button data-ref="link" class="c-nav__link "
                                                            id="navigation-1718335093637-mvqv5dquy"
                                                            aria-controls="navigation-1718335093637-7roamlaci"
                                                            aria-expanded="false">

                                                        SLRD Editions


                                                    </button>


                                                    <div class="c-nav__subnav" data-ref="subnav"
                                                         id="navigation-1718335093637-7roamlaci" aria-hidden="true">
                                                        <ul data-ref="navlist" class="c-nav__list c-nav__level3">

                                                            <li data-ref="item"
                                                                class="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="slrd-babylone">

                                                                <a data-ref="link" class="c-nav__link "
                                                                   data-cgid="slrd-babylone"
                                                                   data-fdid="saint-laurent-babylone-landing-page"
                                                                   href="https://www.ysl.com/ko-kr/displayname-saint-laurent-babylone-landing-page"
                                                                   id="navigation-1718335093637-9dvt9fyy6">

                                                                    SAINT LAURENT BABYLONE


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                class="c-nav__item c-nav__item--withslot"
                                                                data-level3="true"
                                                                data-cgid="saint-laurent-rive-droite-books">

                                                                <a data-ref="link" class="c-nav__link "
                                                                   data-cgid="saint-laurent-rive-droite-books"
                                                                   data-fdid=""
                                                                   href="/ko-kr/rive-droite/slrd-editions/slrd-books"
                                                                   id="navigation-1718335093637-lye5q0tm5">

                                                                    SLRD Books


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                class="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="rive-droite-books">

                                                                <a data-ref="link" class="c-nav__link "
                                                                   data-cgid="rive-droite-books" data-fdid=""
                                                                   href="/ko-kr/rive-droite/slrd-editions/books"
                                                                   id="navigation-1718335093637-4lyksd25i">

                                                                    Books


                                                                </a>


                                                            </li>

                                                        </ul>
                                                    </div>


                                                </li>

                                                <li data-ref="item" class="c-nav__item" data-level2="true"
                                                    data-cgid="saint-laurent-rive-droite-frequencies"
                                                    data-haschildren="true">

                                                    <button data-ref="link"
                                                            class="c-nav__link c-nav__link--withlinebreak"
                                                            id="navigation-1718335093638-ie1grswbz"
                                                            aria-controls="navigation-1718335093638-cyer5vdm7"
                                                            aria-expanded="false">

                                                        SLRD Frequencies


                                                    </button>


                                                    <div class="c-nav__subnav" data-ref="subnav"
                                                         id="navigation-1718335093638-cyer5vdm7" aria-hidden="true">
                                                        <ul data-ref="navlist" class="c-nav__list c-nav__level3">

                                                            <li data-ref="item"
                                                                class="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="talks-page">

                                                                <a data-ref="link" class="c-nav__link "
                                                                   data-cgid="talks-page" data-fdid=""
                                                                   href="https://www.ysl.com/ko-kr/calendar/name/rd-event-juergenteller-talks.html"
                                                                   id="navigation-1718335093638-cv1fxyd67">

                                                                    TALKS


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                class="c-nav__item c-nav__item--withslot"
                                                                data-level3="true"
                                                                data-cgid="saint-laurent-rive-droite-podcast">

                                                                <a data-ref="link" class="c-nav__link "
                                                                   data-cgid="saint-laurent-rive-droite-podcast"
                                                                   data-fdid="calendar-rivedroite-2"
                                                                   href="https://www.ysl.com/ko-kr/displayname-calendar-rivedroite-2"
                                                                   id="navigation-1718335093638-run8596q2">

                                                                    SMOKING PODCASTS


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                class="c-nav__item c-nav__item--withslot"
                                                                data-level3="true"
                                                                data-cgid="saint-laurent-rive-droite-vinyls">

                                                                <a data-ref="link" class="c-nav__link "
                                                                   data-cgid="saint-laurent-rive-droite-vinyls"
                                                                   data-fdid=""
                                                                   href="/ko-kr/rive-droite/slrd-frequencies/slrd-vinyls"
                                                                   id="navigation-1718335093638-5l4sqxlpg">

                                                                    SLRD Vinyls


                                                                </a>


                                                            </li>

                                                            <li data-ref="item"
                                                                class="c-nav__item c-nav__item--withslot"
                                                                data-level3="true" data-cgid="vintage-vinyls">

                                                                <a data-ref="link" class="c-nav__link "
                                                                   data-cgid="vintage-vinyls" data-fdid=""
                                                                   href="/ko-kr/rive-droite/slrd-frequencies/vintage-vinyls"
                                                                   id="navigation-1718335093638-oudteqsus">

                                                                    Vintage Vinyls


                                                                </a>


                                                            </li>

                                                        </ul>
                                                    </div>


                                                </li>

                                                <li data-ref="item" class="c-nav__item" data-level2="true"
                                                    data-cgid="about">

                                                    <a data-ref="link" class="c-nav__link " data-cgid="about"
                                                       data-fdid="about-rivedroite"
                                                       href="https://www.ysl.com/ko-kr/displayname-about-rivedroite"
                                                       id="navigation-1718335093638-ymw1ovd3b">

                                                        ABOUT


                                                    </a>


                                                </li>


                                            </ul>
                                        </div>


                                    </li>

                                    <li class="c-nav__space"></li>

                                    <li data-ref="mobileitem" class="c-nav__item c-nav__item--nonav u-show--none@lg">
                                        <a href="https://www.ysl.com/ko-kr/cart" class="c-nav__link">
    <span>
        장바구니
    </span>
                                        </a>
                                    </li>

                                    <li class="c-nav__item c-nav__item--nonav u-show--none@lg">
                                        <a href="https://www.ysl.com/ko-kr/login" data-ref="link" class="c-nav__link"
                                           data-action="clickLinkAsideMenu" data-top-menu-category="log in">
            <span class="c-nav__label">
                로그인
            </span>
                                        </a>
                                    </li>

                                    <li data-ref="mobileitem" class="c-nav__item c-nav__item--nonav u-show--none@lg">
                                        <a href="/ko-kr/displayname-faq" class="c-nav__link"
                                           data-action="clickLinkAsideMenu" data-top-menu-category="client service">
                    <span>
                        고객 서비스
                    </span>
                                        </a>
                                    </li>

                                    <li data-ref="item" class="c-nav__item c-nav__item--sustainability u-show--none@lg"
                                        data-level1="true" data-haschildren="true">


                                        <button data-ref="link" class="c-nav__link" data-action="clickLinkAsideMenu"
                                                data-top-menu-category="sustainability"
                                                id="navigation-1718335093638-zual048xi"
                                                aria-controls="navigation-1718335093638-csvqck1tt"
                                                aria-expanded="false">
                                            지속 가능성
                                        </button>

                                        <div class="c-nav__subnav" data-ref="subnav"
                                             id="navigation-1718335093638-csvqck1tt" aria-hidden="true">
                                            <ul data-ref="navlist" class="c-nav__list c-nav__level2">

                                                <li data-ref="item" class="c-nav__item c-nav__item--nonav"
                                                    data-level2="true" data-cgid="approach"
                                                    data-action="clickLinkAsideMenu">
                                                    <a data-ref="link" class="c-nav__link "
                                                       href="https://www.ysl.com/ko-kr/sustainability-approach"
                                                       id="navigation-1718335093638-3os3n09iv">
                                                        접근법
                                                    </a>
                                                </li>

                                                <li data-ref="item" class="c-nav__item c-nav__item--nonav"
                                                    data-level2="true" data-cgid="standards"
                                                    data-action="clickLinkAsideMenu">
                                                    <a data-ref="link" class="c-nav__link "
                                                       href="https://www.ysl.com/ko-kr/sustainability-standards"
                                                       id="navigation-1718335093638-h6t0rtcdo">
                                                        기준
                                                    </a>
                                                </li>

                                                <li data-ref="item" class="c-nav__item c-nav__item--nonav"
                                                    data-level2="true" data-cgid="measuring-impact"
                                                    data-action="clickLinkAsideMenu">
                                                    <a data-ref="link" class="c-nav__link "
                                                       href="https://www.ysl.com/ko-kr/sustainability-measuring-impact"
                                                       id="navigation-1718335093638-166mqrevr">
                                                        효과 측정
                                                    </a>
                                                </li>

                                                <li data-ref="item" class="c-nav__item c-nav__item--nonav"
                                                    data-level2="true" data-cgid="house-operations"
                                                    data-action="clickLinkAsideMenu">
                                                    <a data-ref="link" class="c-nav__link "
                                                       href="https://www.ysl.com/ko-kr/sustainability-house-operations"
                                                       id="navigation-1718335093638-2mz1p8jmq">
                                                        하우스 운영
                                                    </a>
                                                </li>

                                                <li data-ref="item" class="c-nav__item c-nav__item--nonav"
                                                    data-level2="true" data-cgid="raw-materials"
                                                    data-action="clickLinkAsideMenu">
                                                    <a data-ref="link" class="c-nav__link "
                                                       href="https://www.ysl.com/ko-kr/sustainability-raw-materials"
                                                       id="navigation-1718335093638-vksr33udl">
                                                        원료
                                                    </a>
                                                </li>

                                                <li data-ref="item" class="c-nav__item c-nav__item--nonav"
                                                    data-level2="true" data-cgid="supply-chain"
                                                    data-action="clickLinkAsideMenu">
                                                    <a data-ref="link" class="c-nav__link "
                                                       href="https://www.ysl.com/ko-kr/sustainability-supply-chain"
                                                       id="navigation-1718335093638-3vri2v6k4">
                                                        공급망
                                                    </a>
                                                </li>

                                                <li data-ref="item" class="c-nav__item c-nav__item--nonav"
                                                    data-level2="true" data-cgid="products"
                                                    data-action="clickLinkAsideMenu">
                                                    <a data-ref="link" class="c-nav__link "
                                                       href="https://www.ysl.com/ko-kr/sustainability-products"
                                                       id="navigation-1718335093638-to86379rt">
                                                        제품
                                                    </a>
                                                </li>

                                                <li data-ref="item" class="c-nav__item c-nav__item--nonav"
                                                    data-level2="true" data-cgid="circularity"
                                                    data-action="clickLinkAsideMenu">
                                                    <a data-ref="link" class="c-nav__link "
                                                       href="https://www.ysl.com/ko-kr/sustainability-circularity"
                                                       id="navigation-1718335093638-lk24g8zqq">
                                                        순환성
                                                    </a>
                                                </li>

                                                <li data-ref="item" class="c-nav__item c-nav__item--nonav"
                                                    data-level2="true" data-cgid="charity-water"
                                                    data-action="clickLinkAsideMenu">
                                                    <a data-ref="link" class="c-nav__link "
                                                       href="https://www.ysl.com/ko-kr/sustainability-charity-water"
                                                       id="navigation-1718335093638-7igpn7dql">
                                                        기부: 물
                                                    </a>
                                                </li>

                                            </ul>
                                        </div>


                                    </li>

                                    <li class="c-apacmessage c-apacmessage__menu">
                                        고객 서비스에 문의하는 것으로 고객님은 개인정보가 국외로 전송되는 것에 동의합니다.
                                    </li>

                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="l-header__aside" data-ref="headeraside">
                <div className="l-header__icons">
                    <div className="c-topsearch" data-component="topSearch">

                        <div className="c-popin c-popin--topsearch" role="dialog" data-popin="searchPopin"
                             id="searchPopin" aria-label="검색">
                            <div role="document">
                                <div className="c-topsearch__container" data-ref="topSearchForm">
                                    <div className="c-popin__head">
                                        <div className="c-popin__title">
                                            <button type="button" data-ref="closePopinTrigger" data-element="closebtn">
                        <span className="u-sronly">
                            팝인 버튼 닫기
                        </span>
                                            </button>
                                            <form className="c-topsearch__form" role="search" action="/ko-kr/search"
                                                  method="get" name="simpleSearch">
                                                <div className="c-topsearch__result" data-ref="topSearchContainer">
                                                    <input className="c-form__input c-form_input--nooffset"
                                                           type="search" name="q" placeholder="검색" autoComplete="off"
                                                           aria-label="검색" data-ref="topSearchInput"
                                                           data-action="topSearchInputKeypress" data-min="3"
                                                           data-max-sugg="3"/>
                                                        <button
                                                            className="c-topsearch__clear c-topsearch__clear--hidden"
                                                            type="button" data-action="clearSearch"
                                                            data-ref="clearSearchBtn">
                                <span className="u-sronly">
                                    삭제
                                </span>
                                                            삭제
                                                        </button>
                                                        <button
                                                            className="c-topsearch__submit c-button c-button--primary u-hidden"
                                                            data-action="submitSearch">
                                                            <span aria-hidden="true" className="c-icon--search"></span>
                                                            <span className="u-sronly">
                                    검색
                                </span>
                                                        </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    <div className="c-popin__content">
                                        <div className="c-topsearch__autosuggest"
                                             data-url="/on/demandware.store/Sites-SLP-APAC-Site/ko_KR/SearchServices-GetSuggestions?getRecentSearch=false&amp;getPopularSearch=true&amp;q="
                                             data-ref="topSearchSuggestions" data-action="close">
                                        </div>

                                        <div className="c-popin__searchsuggestion" data-ref="searchSuggestionContent"
                                             data-action="selectSuggestion">


                                            <div className="content-asset">

                                                <div className="c-suggestions">
                                                    <h2 className="c-suggestions__title">제안들</h2>

                                                    <ul className="c-suggestions__list">
                                                        <li className="c-suggestions__item"><a
                                                            className="c-suggestions__link"
                                                            data-cgid="view-all-mini-bags-women"
                                                            href="https://www.ysl.com/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/new---spring">WOMEN'S
                                                            SPRING 24</a></li>
                                                        <li className="c-suggestions__item"><a
                                                            className="c-suggestions__link"
                                                            data-cgid="le-5A7-handbags-women"
                                                            href="https://www.ysl.com/ko-kr/%EB%82%A8%EC%84%B1-%EC%87%BC%ED%95%91/new---spring-summer">MEN'S
                                                            SPRING SUMMER 24 </a></li>
                                                        <li className="c-suggestions__item"><a
                                                            className="c-suggestions__link"
                                                            data-cgid="view-all-mini-bags-women"
                                                            href="https://www.ysl.com/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%ED%95%B8%EB%93%9C%EB%B0%B1/%ED%95%B8%EB%93%9C%EB%B0%B1-%EB%AA%A8%EB%91%90-%EB%B3%B4%EA%B8%B0">WOMEN'S
                                                            HANDBAGS </a></li>
                                                        <li className="c-suggestions__item"><a
                                                            className="c-suggestions__link"
                                                            data-cgid="le-5A7-handbags-women"
                                                            href="https://www.ysl.com/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%ED%95%B8%EB%93%9C%EB%B0%B1/le-5-a-7">LE
                                                            5 À 7 </a></li>
                                                        <li className="c-suggestions__item"><a
                                                            className="c-suggestions__link" data-cgid="exclusively-now"
                                                            href="https://www.ysl.com/ko-kr/rive-droite/lifestyle/sports-and-travel">RIVE
                                                            DROITE</a></li>
                                                    </ul>
                                                </div>
                                            </div>


                                            <div className="c-crosssell" data-component="productRecommendations">
                                                <div data-component="recentlyViewed"
                                                     data-gtm="{&quot;currencyCode&quot;:&quot;KRW&quot;,&quot;pageType&quot;:&quot;homepage&quot;}"
                                                     data-listname="recentlyViewed" data-location="searchPopin"
                                                     data-intersection="true">
                                                    
                                                    <div id="cq_recomm_slot-83703a537edb1a99922a8f9bb6">
                                                        <div className="c-recommendations" data-context="RECO"
                                                             data-component="employeeSaleWatermark">
                                                            <h2 className="c-recommendations__title">
                                                                최근 확인 제품
                                                            </h2>
                                                            <div
                                                                className="c-recommendations__productslist c-recocarousel swiper-container-initialized swiper-container-horizontal"
                                                                data-ref="recoCarousel" data-element="container">
                                                                <ul className="c-recocarousel__wrapper"
                                                                    itemType="http://schema.org/SomeProducts"
                                                                    itemID="#product" data-context="RECO"
                                                                    data-gridtype="RECO" data-ref="recoCarouselWrapper"
                                                                    data-element="wrapper"
                                                                    style={{transform: 'translate3d(0px, 0px, 0px)'}}>

                                                                    <li className="c-recocarousel__slide swiper-slide-active"
                                                                        data-element="slide" data-pid="7763521TW0A2055"
                                                                        data-ref="recoSlide" data-slide-index="0"
                                                                        style={{width: '98.3077px', marginRight: '2px'}}>


                                                                        <article className="c-product"
                                                                                 data-pid="7763521TW0A2055" itemScope=""
                                                                                 itemType="http://schema.org/Product"
                                                                                 data-component="productTile"
                                                                                 data-gtmproduct="{&quot;id&quot;:&quot;7763521TW0A2055&quot;,&quot;name&quot;:&quot;blake slingback pumps in in tortoiseshell patent leather&quot;,&quot;collection&quot;:&quot;S_S_2024&quot;,&quot;productSMC&quot;:&quot;7763521TW0A2055&quot;,&quot;material&quot;:&quot;&quot;,&quot;customization&quot;:&quot;not customizable&quot;,&quot;packshotType&quot;:&quot;image&quot;,&quot;brand&quot;:&quot;saint laurent&quot;,&quot;color&quot;:&quot;manto naturale&quot;,&quot;colorId&quot;:&quot;2055&quot;,&quot;size&quot;:&quot;&quot;,&quot;price&quot;:null,&quot;discountPrice&quot;:1640000,&quot;coupon&quot;:null,&quot;subCategory&quot;:&quot;new-arrivals-shoes&quot;,&quot;category&quot;:&quot;shoes-women&quot;,&quot;topCategory&quot;:&quot;shop-women&quot;,&quot;productCategory&quot;:&quot;new-arrivals-shoes&quot;,&quot;macroCategory&quot;:&quot;ysl_macro_women_shoes&quot;,&quot;microCategory&quot;:&quot;ysl_micro_women_pumps&quot;,&quot;superMicroCategory&quot;:&quot;ysl_super_micro_women_pumps&quot;,&quot;list&quot;:&quot;&quot;,&quot;stock&quot;:&quot;instock&quot;,&quot;productGlobalSMC&quot;:&quot;7763521TW0A2055&quot;}">


                                                                            <div className="c-product__inner"
                                                                                 id="7763521TW0A2055"
                                                                                 data-pid="7763521TW0A2055"
                                                                                 tabIndex="-1"
                                                                                 data-action="handlePLPProduct">


                                                                                <div
                                                                                    className="c-product__imagecontainer "
                                                                                    data-ref="imagecontainer">
                                                                                    <div
                                                                                        className="c-product__imagecontainerinner">
                                                                                        <img
                                                                                            className="c-product__image c-product__image--visual "
                                                                                            width="307.0" height="500.0"
                                                                                            src="https://saint-laurent.dam.kering.com/m/335885a0eb998314/Thumbnail-7763521TW0A2055_A.jpg?v=3"
                                                                                            srcSet="https://saint-laurent.dam.kering.com/m/335885a0eb998314/Small_thumbnail-7763521TW0A2055_A.jpg?v=3 153w,
                    https://saint-laurent.dam.kering.com/m/335885a0eb998314/Thumbnail-7763521TW0A2055_A.jpg?v=3 307w,
                    https://saint-laurent.dam.kering.com/m/335885a0eb998314/Small-7763521TW0A2055_A.jpg?v=3 460w,
                    https://saint-laurent.dam.kering.com/m/335885a0eb998314/Medium-7763521TW0A2055_A.jpg?v=3 613w,
                    https://saint-laurent.dam.kering.com/m/335885a0eb998314/Large-7763521TW0A2055_A.jpg?v=3 1227w"
                                                                                            sizes="(min-width: 1760px) 381px, (min-width: 1440px) calc(25.67vw - 66px), (min-width: 1040px) calc(33.16vw - 136px), 33.47vw"
                                                                                            alt="블레이크 터틀쉘 페이턴트 레더 코트 슈즈"
                                                                                            itemProp="image"
                                                                                            data-alt-srcset="https://saint-laurent.dam.kering.com/m/683836afed5efb1e/Small_thumbnail-7763521TW0A2055_B.jpg?v=1 153w,
        https://saint-laurent.dam.kering.com/m/683836afed5efb1e/Thumbnail-7763521TW0A2055_B.jpg?v=1 307w,
        https://saint-laurent.dam.kering.com/m/683836afed5efb1e/Small-7763521TW0A2055_B.jpg?v=1 460w,
        https://saint-laurent.dam.kering.com/m/683836afed5efb1e/Medium-7763521TW0A2055_B.jpg?v=1 613w,
        https://saint-laurent.dam.kering.com/m/683836afed5efb1e/Large-7763521TW0A2055_B.jpg?v=1 1227w"/>


                                                                                    </div>


                                                                                </div>


                                                                                <div className="c-product__infos">
                                                                                    <div
                                                                                        className="c-product__nameswatches">

                                                                                        <h2 className="c-product__name">
                                                                                            블레이크 터틀쉘 페이턴트 레더 코트 슈즈
                                                                                        </h2>


                                                                                        <div
                                                                                            className="c-product__swatches">


                                                                                        </div>

                                                                                    </div>
                                                                                    <div
                                                                                        className="c-product__priceavailability">


                                                                                        <div
                                                                                            className="c-product__price c-price"
                                                                                            itemProp="offers"
                                                                                            itemScope=""
                                                                                            itemType="http://schema.org/Offer">


                                                                                            <meta
                                                                                                itemProp="priceCurrency"
                                                                                                content="KRW"/>
                                                                                                <p className="c-price__value--current"
                                                                                                   data-employee="false"
                                                                                                   itemProp="price"
                                                                                                   content="1640000">
                                                                                                    ₩ 1,640,000


                                                                                                </p>


                                                                                        </div>


                                                                                    </div>
                                                                                </div>
                                                                                <a className="c-product__link c-product__focus"
                                                                                   data-ref="link"
                                                                                   href="/ko-kr/%EC%8A%AC%EB%A7%81%EB%B0%B1/%EB%B8%94%EB%A0%88%EC%9D%B4%ED%81%AC-%ED%84%B0%ED%8B%80%EC%89%98-%ED%8E%98%EC%9D%B4%ED%84%B4%ED%8A%B8-%EB%A0%88%EB%8D%94-%EC%BD%94%ED%8A%B8-%EC%8A%88%EC%A6%88-7763521TW0A2055.html"
                                                                                   itemProp="url"
                                                                                   data-pid="7763521TW0A2055">
            <span className="u-visually-hidden">
                블레이크 터틀쉘 페이턴트 레더 코트 슈즈
            </span>
                                                                                </a>
                                                                            </div>


                                                                        </article>
                                                                    </li>


                                                                    <li className="c-recocarousel__slide swiper-slide-next"
                                                                        data-element="slide" data-pid="792855Y15008045"
                                                                        data-ref="recoSlide" data-slide-index="1"
                                                                        style={{width: '98.3077px', marginRight: '2px'}}>


                                                                        <article className="c-product"
                                                                                 data-pid="792855Y15008045" itemScope=""
                                                                                 itemType="http://schema.org/Product"
                                                                                 data-component="productTile"
                                                                                 data-gtmproduct="{&quot;id&quot;:&quot;792855Y15008045&quot;,&quot;name&quot;:&quot;stacked cuff in metal&quot;,&quot;collection&quot;:&quot;S_S_2024&quot;,&quot;productSMC&quot;:&quot;792855Y15008045&quot;,&quot;material&quot;:&quot;&quot;,&quot;customization&quot;:&quot;not customizable&quot;,&quot;packshotType&quot;:&quot;image&quot;,&quot;brand&quot;:&quot;saint laurent&quot;,&quot;color&quot;:&quot;pale gold&quot;,&quot;colorId&quot;:&quot;8045&quot;,&quot;size&quot;:&quot;&quot;,&quot;price&quot;:null,&quot;discountPrice&quot;:1630000,&quot;coupon&quot;:null,&quot;subCategory&quot;:&quot;view-all-jewellry-women&quot;,&quot;category&quot;:&quot;jewellry-women&quot;,&quot;topCategory&quot;:&quot;shop-women&quot;,&quot;productCategory&quot;:&quot;view-all-jewellry-women&quot;,&quot;macroCategory&quot;:&quot;ysl_macro_women_jewelry&quot;,&quot;microCategory&quot;:&quot;ysl_micro_women_bracelets&quot;,&quot;superMicroCategory&quot;:&quot;ysl_super_micro_women_cuffs_and_bracelet&quot;,&quot;list&quot;:&quot;&quot;,&quot;stock&quot;:&quot;instock&quot;,&quot;productGlobalSMC&quot;:&quot;792855Y15008045&quot;}">


                                                                            <div className="c-product__inner"
                                                                                 id="792855Y15008045"
                                                                                 data-pid="792855Y15008045"
                                                                                 tabIndex="-1"
                                                                                 data-action="handlePLPProduct">


                                                                                <div
                                                                                    className="c-product__imagecontainer "
                                                                                    data-ref="imagecontainer">
                                                                                    <div
                                                                                        className="c-product__imagecontainerinner">
                                                                                        <img
                                                                                            className="c-product__image c-product__image--visual "
                                                                                            width="307.0" height="500.0"
                                                                                            src="https://saint-laurent.dam.kering.com/m/6fdc22e45c8a7852/Thumbnail-792855Y15008045_A.jpg?v=1"
                                                                                            srcSet="https://saint-laurent.dam.kering.com/m/6fdc22e45c8a7852/Small_thumbnail-792855Y15008045_A.jpg?v=1 153w,
                    https://saint-laurent.dam.kering.com/m/6fdc22e45c8a7852/Thumbnail-792855Y15008045_A.jpg?v=1 307w,
                    https://saint-laurent.dam.kering.com/m/6fdc22e45c8a7852/Small-792855Y15008045_A.jpg?v=1 460w,
                    https://saint-laurent.dam.kering.com/m/6fdc22e45c8a7852/Medium-792855Y15008045_A.jpg?v=1 613w,
                    https://saint-laurent.dam.kering.com/m/6fdc22e45c8a7852/Large-792855Y15008045_A.jpg?v=1 1227w"
                                                                                            sizes="(min-width: 1760px) 381px, (min-width: 1440px) calc(25.67vw - 66px), (min-width: 1040px) calc(33.16vw - 136px), 33.47vw"
                                                                                            alt="메탈 소재의 스택 커프"
                                                                                            itemProp="image"
                                                                                            data-alt-srcset="https://saint-laurent.dam.kering.com/m/5543adfdae5fa3aa/Small_thumbnail-792855Y15008045_B.jpg?v=1 153w,
        https://saint-laurent.dam.kering.com/m/5543adfdae5fa3aa/Thumbnail-792855Y15008045_B.jpg?v=1 307w,
        https://saint-laurent.dam.kering.com/m/5543adfdae5fa3aa/Small-792855Y15008045_B.jpg?v=1 460w,
        https://saint-laurent.dam.kering.com/m/5543adfdae5fa3aa/Medium-792855Y15008045_B.jpg?v=1 613w,
        https://saint-laurent.dam.kering.com/m/5543adfdae5fa3aa/Large-792855Y15008045_B.jpg?v=1 1227w"/>


                                                                                    </div>


                                                                                </div>


                                                                                <div className="c-product__infos">
                                                                                    <div
                                                                                        className="c-product__nameswatches">

                                                                                        <h2 className="c-product__name">
                                                                                            메탈 소재의 스택 커프
                                                                                        </h2>


                                                                                        <div
                                                                                            className="c-product__swatches">


                                                                                            <div
                                                                                                className="c-swatches__wrapper">
                                                                                                <ul className="c-swatches"
                                                                                                    data-ref="swatchesContainer">


                                                                                                    <li className="c-swatches__itemcontainer">
                                                                                                        <a href="/ko-kr/su24-korea/%EB%A9%94%ED%83%88-%EC%86%8C%EC%9E%AC%EC%9D%98-%EC%8A%A4%ED%83%9D-%EC%BB%A4%ED%94%84-792855Y15008045.html?dwvar_792855Y15008045_color=8126"
                                                                                                           className="c-swatches__item"
                                                                                                           data-action="clickProductSwatches"
                                                                                                           rel="nofollow">
                                    <span className="u-sronly">
                                        platinated palladium 메탈 소재의 스택 커프
                                    </span>
                                                                                                            <span
                                                                                                                data-attr-value="8126"
                                                                                                                className="c-swatches__itemimage selected"
                                                                                                                data-index="0.0"
                                                                                                                style={{backgroundColor: '#bebebe'}}>
                                    </span>
                                                                                                        </a>
                                                                                                    </li>


                                                                                                    <li className="c-swatches__itemcontainer">
                                                                                                        <a href="/ko-kr/su24-korea/%EB%A9%94%ED%83%88-%EC%86%8C%EC%9E%AC%EC%9D%98-%EC%8A%A4%ED%83%9D-%EC%BB%A4%ED%94%84-792855Y15008045.html?dwvar_792855Y15008045_color=8045"
                                                                                                           className="c-swatches__item"
                                                                                                           data-action="clickProductSwatches"
                                                                                                           rel="nofollow">
                                    <span className="u-sronly">
                                        pale gold 메탈 소재의 스택 커프
                                    </span>
                                                                                                            <span
                                                                                                                data-attr-value="8045"
                                                                                                                className="c-swatches__itemimage selected"
                                                                                                                data-index="1.0"
                                                                                                                style={{backgroundColor: '#e8c382'}}>
                                    </span>
                                                                                                        </a>
                                                                                                    </li>


                                                                                                </ul>
                                                                                                <p className="c-swatches__label">
                                                                                                    + 2 컬러
                                                                                                </p>
                                                                                            </div>


                                                                                        </div>

                                                                                    </div>
                                                                                    <div
                                                                                        className="c-product__priceavailability">


                                                                                        <div
                                                                                            className="c-product__price c-price"
                                                                                            itemProp="offers"
                                                                                            itemScope=""
                                                                                            itemType="http://schema.org/Offer">


                                                                                            <meta
                                                                                                itemProp="priceCurrency"
                                                                                                content="KRW"/>
                                                                                                <p className="c-price__value--current"
                                                                                                   data-employee="false"
                                                                                                   itemProp="price"
                                                                                                   content="1630000">
                                                                                                    ₩ 1,630,000


                                                                                                </p>


                                                                                        </div>


                                                                                    </div>
                                                                                </div>
                                                                                <a className="c-product__link c-product__focus"
                                                                                   data-ref="link"
                                                                                   href="/ko-kr/su24-korea/%EB%A9%94%ED%83%88-%EC%86%8C%EC%9E%AC%EC%9D%98-%EC%8A%A4%ED%83%9D-%EC%BB%A4%ED%94%84-792855Y15008045.html"
                                                                                   itemProp="url"
                                                                                   data-pid="792855Y15008045">
            <span className="u-visually-hidden">
                메탈 소재의 스택 커프
            </span>
                                                                                </a>
                                                                            </div>


                                                                        </article>
                                                                    </li>


                                                                    <li className="c-recocarousel__slide"
                                                                        data-element="slide" data-pid="788579Y7I142613"
                                                                        data-ref="recoSlide" data-slide-index="2"
                                                                        style={{width: '98.3077px', marginRight: '2px'}}>


                                                                        <article className="c-product"
                                                                                 data-pid="788579Y7I142613" itemScope=""
                                                                                 itemType="http://schema.org/Product"
                                                                                 data-component="productTile"
                                                                                 data-gtmproduct="{&quot;id&quot;:&quot;788579Y7I142613&quot;,&quot;name&quot;:&quot;strapless jumpsuit in cotton gabardine&quot;,&quot;collection&quot;:&quot;S_S_2024&quot;,&quot;productSMC&quot;:&quot;788579Y7I142613&quot;,&quot;material&quot;:&quot;&quot;,&quot;customization&quot;:&quot;not customizable&quot;,&quot;packshotType&quot;:&quot;image&quot;,&quot;brand&quot;:&quot;saint laurent&quot;,&quot;color&quot;:&quot;beige&quot;,&quot;colorId&quot;:&quot;2613&quot;,&quot;size&quot;:&quot;&quot;,&quot;price&quot;:null,&quot;discountPrice&quot;:7430000,&quot;coupon&quot;:null,&quot;subCategory&quot;:&quot;saint-laurent-rive-droite-women&quot;,&quot;category&quot;:&quot;sl-by-rd&quot;,&quot;topCategory&quot;:&quot;rivedroite&quot;,&quot;productCategory&quot;:&quot;saint-laurent-rive-droite-women&quot;,&quot;macroCategory&quot;:&quot;ysl_macro_women_rtw&quot;,&quot;microCategory&quot;:&quot;ysl_micro_women_jumpsuit&quot;,&quot;superMicroCategory&quot;:&quot;ysl_super_micro_women_jumpsuits&quot;,&quot;list&quot;:&quot;&quot;,&quot;stock&quot;:&quot;instock&quot;,&quot;productGlobalSMC&quot;:&quot;788579Y7I142613&quot;}">


                                                                            <div className="c-product__inner"
                                                                                 id="788579Y7I142613"
                                                                                 data-pid="788579Y7I142613"
                                                                                 tabIndex="-1"
                                                                                 data-action="handlePLPProduct">


                                                                                <div
                                                                                    className="c-product__imagecontainer "
                                                                                    data-ref="imagecontainer">
                                                                                    <div
                                                                                        className="c-product__imagecontainerinner">
                                                                                        <img
                                                                                            className="c-product__image c-product__image--visual "
                                                                                            width="307.0" height="500.0"
                                                                                            src="https://saint-laurent.dam.kering.com/m/3cb126fec3c08af0/Thumbnail-788579Y7I142613_A.jpg?v=3"
                                                                                            srcSet="https://saint-laurent.dam.kering.com/m/3cb126fec3c08af0/Small_thumbnail-788579Y7I142613_A.jpg?v=3 153w,
                    https://saint-laurent.dam.kering.com/m/3cb126fec3c08af0/Thumbnail-788579Y7I142613_A.jpg?v=3 307w,
                    https://saint-laurent.dam.kering.com/m/3cb126fec3c08af0/Small-788579Y7I142613_A.jpg?v=3 460w,
                    https://saint-laurent.dam.kering.com/m/3cb126fec3c08af0/Medium-788579Y7I142613_A.jpg?v=3 613w,
                    https://saint-laurent.dam.kering.com/m/3cb126fec3c08af0/Large-788579Y7I142613_A.jpg?v=3 1227w"
                                                                                            sizes="(min-width: 1760px) 381px, (min-width: 1440px) calc(25.67vw - 66px), (min-width: 1040px) calc(33.16vw - 136px), 33.47vw"
                                                                                            alt="코튼 개버딘 소재의 스트랩리스 점프수트"
                                                                                            itemProp="image"
                                                                                            data-alt-srcset="https://saint-laurent.dam.kering.com/m/60928de9744c7362/Small_thumbnail-788579Y7I142613_B.jpg?v=4 153w,
        https://saint-laurent.dam.kering.com/m/60928de9744c7362/Thumbnail-788579Y7I142613_B.jpg?v=4 307w,
        https://saint-laurent.dam.kering.com/m/60928de9744c7362/Small-788579Y7I142613_B.jpg?v=4 460w,
        https://saint-laurent.dam.kering.com/m/60928de9744c7362/Medium-788579Y7I142613_B.jpg?v=4 613w,
        https://saint-laurent.dam.kering.com/m/60928de9744c7362/Large-788579Y7I142613_B.jpg?v=4 1227w"/>


                                                                                    </div>


                                                                                </div>


                                                                                <div className="c-product__infos">
                                                                                    <div
                                                                                        className="c-product__nameswatches">

                                                                                        <h2 className="c-product__name">
                                                                                            코튼 개버딘 소재의 스트랩리스 점프수트
                                                                                        </h2>


                                                                                        <div
                                                                                            className="c-product__swatches">


                                                                                        </div>

                                                                                    </div>
                                                                                    <div
                                                                                        className="c-product__priceavailability">


                                                                                        <div
                                                                                            className="c-product__price c-price"
                                                                                            itemProp="offers"
                                                                                            itemScope=""
                                                                                            itemType="http://schema.org/Offer">


                                                                                            <meta
                                                                                                itemProp="priceCurrency"
                                                                                                content="KRW"/>
                                                                                                <p className="c-price__value--current"
                                                                                                   data-employee="false"
                                                                                                   itemProp="price"
                                                                                                   content="7430000">
                                                                                                    ₩ 7,430,000


                                                                                                </p>


                                                                                        </div>


                                                                                    </div>
                                                                                </div>
                                                                                <a className="c-product__link c-product__focus"
                                                                                   data-ref="link"
                                                                                   href="/ko-kr/jumpsuits/%EC%BD%94%ED%8A%BC-%EA%B0%9C%EB%B2%84%EB%94%98-%EC%86%8C%EC%9E%AC%EC%9D%98-%EC%8A%A4%ED%8A%B8%EB%9E%A9%EB%A6%AC%EC%8A%A4-%EC%A0%90%ED%94%84%EC%88%98%ED%8A%B8-788579Y7I142613.html"
                                                                                   itemProp="url"
                                                                                   data-pid="788579Y7I142613">
            <span className="u-visually-hidden">
                코튼 개버딘 소재의 스트랩리스 점프수트
            </span>
                                                                                </a>
                                                                            </div>


                                                                        </article>
                                                                    </li>


                                                                    <li className="c-recocarousel__slide"
                                                                        data-element="slide" data-pid="776352AAC6Z2226"
                                                                        data-ref="recoSlide" data-slide-index="3"
                                                                        style={{width: '98.3077px', marginRight: '2px'}}>


                                                                        <article className="c-product"
                                                                                 data-pid="776352AAC6Z2226" itemScope=""
                                                                                 itemType="http://schema.org/Product"
                                                                                 data-component="productTile"
                                                                                 data-gtmproduct="{&quot;id&quot;:&quot;776352AAC6Z2226&quot;,&quot;name&quot;:&quot;blake slingback pumps in patent leather&quot;,&quot;collection&quot;:&quot;S_S_2024&quot;,&quot;productSMC&quot;:&quot;776352AAC6Z2226&quot;,&quot;material&quot;:&quot;&quot;,&quot;customization&quot;:&quot;not customizable&quot;,&quot;packshotType&quot;:&quot;image&quot;,&quot;brand&quot;:&quot;saint laurent&quot;,&quot;color&quot;:&quot;marron glace&quot;,&quot;colorId&quot;:&quot;2226&quot;,&quot;size&quot;:&quot;&quot;,&quot;price&quot;:null,&quot;discountPrice&quot;:1580000,&quot;coupon&quot;:null,&quot;subCategory&quot;:&quot;digital-campaign-women-spring-24-jp&quot;,&quot;category&quot;:&quot;digital-campaign-women-spring-24&quot;,&quot;topCategory&quot;:&quot;shop-women&quot;,&quot;productCategory&quot;:&quot;digital-campaign-women-spring-24-jp&quot;,&quot;macroCategory&quot;:&quot;ysl_macro_women_shoes&quot;,&quot;microCategory&quot;:&quot;ysl_micro_women_pumps&quot;,&quot;superMicroCategory&quot;:&quot;ysl_super_micro_women_pumps&quot;,&quot;list&quot;:&quot;&quot;,&quot;stock&quot;:&quot;notifyMe&quot;,&quot;productGlobalSMC&quot;:&quot;776352AAC6Z2226&quot;}">


                                                                            <div className="c-product__inner"
                                                                                 id="776352AAC6Z2226"
                                                                                 data-pid="776352AAC6Z2226"
                                                                                 tabIndex="-1"
                                                                                 data-action="handlePLPProduct">


                                                                                <div
                                                                                    className="c-product__imagecontainer "
                                                                                    data-ref="imagecontainer">
                                                                                    <div
                                                                                        className="c-product__imagecontainerinner">
                                                                                        <img
                                                                                            className="c-product__image c-product__image--visual "
                                                                                            width="307.0" height="500.0"
                                                                                            src="https://saint-laurent.dam.kering.com/m/4b81013975623015/Thumbnail-776352AAC6Z2226_A.jpg?v=2"
                                                                                            srcSet="https://saint-laurent.dam.kering.com/m/4b81013975623015/Small_thumbnail-776352AAC6Z2226_A.jpg?v=2 153w,
                    https://saint-laurent.dam.kering.com/m/4b81013975623015/Thumbnail-776352AAC6Z2226_A.jpg?v=2 307w,
                    https://saint-laurent.dam.kering.com/m/4b81013975623015/Small-776352AAC6Z2226_A.jpg?v=2 460w,
                    https://saint-laurent.dam.kering.com/m/4b81013975623015/Medium-776352AAC6Z2226_A.jpg?v=2 613w,
                    https://saint-laurent.dam.kering.com/m/4b81013975623015/Large-776352AAC6Z2226_A.jpg?v=2 1227w"
                                                                                            sizes="(min-width: 1760px) 381px, (min-width: 1440px) calc(25.67vw - 66px), (min-width: 1040px) calc(33.16vw - 136px), 33.47vw"
                                                                                            alt="페이턴트 가죽 소재의 blake 슬링백 펌프스"
                                                                                            itemProp="image"
                                                                                            data-alt-srcset="https://saint-laurent.dam.kering.com/m/1690158dec1ccb1/Small_thumbnail-776352AAC6Z2226_B.jpg?v=2 153w,
        https://saint-laurent.dam.kering.com/m/1690158dec1ccb1/Thumbnail-776352AAC6Z2226_B.jpg?v=2 307w,
        https://saint-laurent.dam.kering.com/m/1690158dec1ccb1/Small-776352AAC6Z2226_B.jpg?v=2 460w,
        https://saint-laurent.dam.kering.com/m/1690158dec1ccb1/Medium-776352AAC6Z2226_B.jpg?v=2 613w,
        https://saint-laurent.dam.kering.com/m/1690158dec1ccb1/Large-776352AAC6Z2226_B.jpg?v=2 1227w"/>


                                                                                    </div>


                                                                                </div>


                                                                                <div className="c-product__infos">
                                                                                    <div
                                                                                        className="c-product__nameswatches">

                                                                                        <h2 className="c-product__name">
                                                                                            페이턴트 가죽 소재의 blake 슬링백 펌프스
                                                                                        </h2>


                                                                                        <div
                                                                                            className="c-product__swatches">


                                                                                        </div>

                                                                                    </div>
                                                                                    <div
                                                                                        className="c-product__priceavailability">


                                                                                        <div
                                                                                            className="c-product__price c-price"
                                                                                            itemProp="offers"
                                                                                            itemScope=""
                                                                                            itemType="http://schema.org/Offer">


                                                                                            <meta
                                                                                                itemProp="priceCurrency"
                                                                                                content="KRW"/>
                                                                                                <p className="c-price__value--current"
                                                                                                   data-employee="false"
                                                                                                   itemProp="price"
                                                                                                   content="1580000">
                                                                                                    ₩ 1,580,000


                                                                                                </p>


                                                                                        </div>


                                                                                        <div
                                                                                            className="c-product__availability">
                                                                                            알림 받기
                                                                                        </div>


                                                                                    </div>
                                                                                </div>
                                                                                <a className="c-product__link c-product__focus"
                                                                                   data-ref="link"
                                                                                   href="/ko-kr/%EC%8A%AC%EB%A7%81%EB%B0%B1/%ED%8E%98%EC%9D%B4%ED%84%B4%ED%8A%B8-%EA%B0%80%EC%A3%BD-%EC%86%8C%EC%9E%AC%EC%9D%98-blake-%EC%8A%AC%EB%A7%81%EB%B0%B1-%ED%8E%8C%ED%94%84%EC%8A%A4-776352AAC6Z2226.html"
                                                                                   itemProp="url"
                                                                                   data-pid="776352AAC6Z2226">
            <span className="u-visually-hidden">
                페이턴트 가죽 소재의 blake 슬링백 펌프스
            </span>
                                                                                </a>
                                                                            </div>


                                                                        </article>
                                                                    </li>


                                                                </ul>
                                                                <span className="swiper-notification"
                                                                      aria-live="assertive" aria-atomic="true"></span>
                                                            </div>


                                                            <div tabIndex="-1" role="button"
                                                                 className="c-recocarousel__prev swiper-button-disabled"
                                                                 aria-label="Previous slide" aria-disabled="true">
                <span className="u-visually-hidden">
                    이전
                </span>
                                                                <i className="c-icon--arrow-left"></i>
                                                            </div>
                                                            <div tabIndex="0" role="button"
                                                                 className="c-recocarousel__next"
                                                                 aria-label="Next slide" aria-disabled="false">
                <span className="u-visually-hidden">
                    다음
                </span>
                                                                <i className="c-icon--arrow-right"></i>
                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>


                                        <div className="ca-layercustomercare">
                                            <a className="ca-layercustomercare__title" target="_blank"
                                               href="https://www.ysl.com/ko-kr/displayname-faq">
                                                도움이 필요하세요?
                                            </a>
                                            <ul className="ca-layercustomercare__options">
                                                <li className="ca-customercareinfo__chat powerfrontlivechatcontainer u-hidden"
                                                    data-behavior="hide">
                                                    <button
                                                        className="ca-layercustomercare__link powerfrontlivechat u-hidden"
                                                        onClick="openChatButtonClick()" type="live-chat"
                                                        aria-describedby="help-availability">
                                                        <i className="c-icon--chat ca-layercustomercare__icon"></i>
                                                        <span className="u-visually-hidden">Contact us by chat</span>
                                                        <span
                                                            className="powerfrontlivechatavailable ca-layercustomercare__text">Chat</span>                                               <span className="powerfrontlivechatunavailable u-hidden"></span>
                                                    </button>
                                                </li>
                                                <li className="ca-customercareinfo__phone">
                                                    <a className="ca-layercustomercare__link" href="tel:82261052228"
                                                       aria-describedby="help-availability">
                                                        <i className="c-icon--phone ca-layercustomercare__icon"></i>
                                                        <span
                                                            className="ca-layercustomercare__text">+82 261052228</span>
                                                    </a>
                                                </li>
                                                <li className="ca-layercustomercare__contact">
                                                    <a className="ca-layercustomercare__link" target="_blank"
                                                       href="https://www.ysl.com/ko-kr/contactus">
                                                        <i className="c-icon--contact ca-layercustomercare__icon"></i>
                                                        <span className="ca-layercustomercare__text">문의하기</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="c-topsearch__button" data-action="openTopSearchInput"
                                data-ref="topSearchTrigger">
                            <i className="c-icon--search" aria-hidden="true"></i>
                            <span className="u-sronly">
        검색
    </span>
                        </button>

                    </div>

                    <div className="c-minicart" id="minicart" data-component="minicart"
                         data-action-url="/ko-kr/cart?isMiniCart=true">
                        <div data-bind="miniCartQuantity">
                            <a className="c-minicart__link c-nav__link" data-action="openMiniCart"
                               href="https://www.ysl.com/ko-kr/cart" title="장바구니" data-ref="topBagLink">
    <span className="c-minicart__icon c-icon--basket">
        <span className="c-minicart__iconbackground"></span>
    </span>
                                <span className="c-minicart__label">
        장바구니
    </span>

                            </a>

                        </div>
                        <div className="c-popin c-popin--minicart c-minicartlayer" data-context="MINICART"
                             data-component="minicartLayer" data-errortitle="오류가 발생했습니다."
                             data-errorcontent="기술적 오류가 발생했습니다. 나중에 다시 시도해 주세요." role="dialog"
                             data-popin="minicartLayer" aria-label="See the products already added" aria-hidden="true">
                            <div role="document">
                                <div className="c-popin__head">
                                    <button type="button" data-ref="closePopinTrigger" data-element="closebtn">
                <span className="u-sronly">
                    닫기
                </span>
                                    </button>
                                </div>
                                <div className="c-popin__content" data-ref="minicartContent">
                                    <div className="c-popin__innercontent" data-container="minicart"
                                         data-bind="minicartLayerContent">
                                        <div className="c-minicartlayer__empty">
                                            <div className="c-minicartlayer__content">
                                                <div
                                                    className="c-checkout__emptycartcontentasset c-minicartlayer__emptyminicartcontentasset"
                                                    data-ref="minicartEmptyText">


                                                    <div className="content-asset">

                                                        <h2 className="ca-errorpage__title">장바구니가 비어 있습니다</h2>

                                                        <p className="ca-errorpage__text"><a
                                                            href="https://www.ysl.com/ko-kr">BACK TO HOME</a></p>
                                                    </div>


                                                </div>
                                                <div className="c-minicartlayer__needhelp">
                                                    <div className="c-crosssell"
                                                         data-component="productRecommendations">

                                                        <div data-component="recentlyViewed"
                                                             data-gtm="{&quot;currencyCode&quot;:&quot;KRW&quot;,&quot;pageType&quot;:&quot;homepage&quot;}"
                                                             data-listname="recentlyViewed" data-location="cartEmpty"
                                                             data-intersection="true">

                                                            <div id="cq_recomm_slot-0d0f4d8eddf4b24012e51f160e">
                                                                <div className="c-recommendations" data-context="RECO"
                                                                     data-component="employeeSaleWatermark">
                                                                    <h2 className="c-recommendations__title">
                                                                        최근 확인 제품
                                                                    </h2>
                                                                    <div
                                                                        className="c-recommendations__productslist c-recocarousel swiper-container-initialized swiper-container-horizontal"
                                                                        data-ref="recoCarousel"
                                                                        data-element="container">
                                                                        <ul className="c-recocarousel__wrapper"
                                                                            itemType="http://schema.org/SomeProducts"
                                                                            itemID="#product" data-context="RECO"
                                                                            data-gridtype="RECO"
                                                                            data-ref="recoCarouselWrapper"
                                                                            data-element="wrapper"
                                                                            style={{transform: 'translate3d(0px, 0px, 0px)'}}>

                                                                            <li className="c-recocarousel__slide swiper-slide-active"
                                                                                data-element="slide"
                                                                                data-pid="7763521TW0A2055"
                                                                                data-ref="recoSlide"
                                                                                data-slide-index="0"
                                                                                style={{width: '98.3077px', marginRight: '2px'}}>


                                                                                <article className="c-product"
                                                                                         data-pid="7763521TW0A2055"
                                                                                         itemScope=""
                                                                                         itemType="http://schema.org/Product"
                                                                                         data-component="productTile"
                                                                                         data-gtmproduct="{&quot;id&quot;:&quot;7763521TW0A2055&quot;,&quot;name&quot;:&quot;blake slingback pumps in in tortoiseshell patent leather&quot;,&quot;collection&quot;:&quot;S_S_2024&quot;,&quot;productSMC&quot;:&quot;7763521TW0A2055&quot;,&quot;material&quot;:&quot;&quot;,&quot;customization&quot;:&quot;not customizable&quot;,&quot;packshotType&quot;:&quot;image&quot;,&quot;brand&quot;:&quot;saint laurent&quot;,&quot;color&quot;:&quot;manto naturale&quot;,&quot;colorId&quot;:&quot;2055&quot;,&quot;size&quot;:&quot;&quot;,&quot;price&quot;:null,&quot;discountPrice&quot;:1640000,&quot;coupon&quot;:null,&quot;subCategory&quot;:&quot;new-arrivals-shoes&quot;,&quot;category&quot;:&quot;shoes-women&quot;,&quot;topCategory&quot;:&quot;shop-women&quot;,&quot;productCategory&quot;:&quot;new-arrivals-shoes&quot;,&quot;macroCategory&quot;:&quot;ysl_macro_women_shoes&quot;,&quot;microCategory&quot;:&quot;ysl_micro_women_pumps&quot;,&quot;superMicroCategory&quot;:&quot;ysl_super_micro_women_pumps&quot;,&quot;list&quot;:&quot;&quot;,&quot;stock&quot;:&quot;instock&quot;,&quot;productGlobalSMC&quot;:&quot;7763521TW0A2055&quot;}">


                                                                                    <div className="c-product__inner"
                                                                                         id="7763521TW0A2055"
                                                                                         data-pid="7763521TW0A2055"
                                                                                         tabIndex="-1"
                                                                                         data-action="handlePLPProduct">


                                                                                        <div
                                                                                            className="c-product__imagecontainer "
                                                                                            data-ref="imagecontainer">
                                                                                            <div
                                                                                                className="c-product__imagecontainerinner">
                                                                                                <img
                                                                                                    className="c-product__image c-product__image--visual "
                                                                                                    width="307.0"
                                                                                                    height="500.0"
                                                                                                    src="https://saint-laurent.dam.kering.com/m/335885a0eb998314/Thumbnail-7763521TW0A2055_A.jpg?v=3"
                                                                                                    srcSet="https://saint-laurent.dam.kering.com/m/335885a0eb998314/Small_thumbnail-7763521TW0A2055_A.jpg?v=3 153w,
                    https://saint-laurent.dam.kering.com/m/335885a0eb998314/Thumbnail-7763521TW0A2055_A.jpg?v=3 307w,
                    https://saint-laurent.dam.kering.com/m/335885a0eb998314/Small-7763521TW0A2055_A.jpg?v=3 460w,
                    https://saint-laurent.dam.kering.com/m/335885a0eb998314/Medium-7763521TW0A2055_A.jpg?v=3 613w,
                    https://saint-laurent.dam.kering.com/m/335885a0eb998314/Large-7763521TW0A2055_A.jpg?v=3 1227w"
                                                                                                    sizes="(min-width: 1760px) 381px, (min-width: 1440px) calc(25.67vw - 66px), (min-width: 1040px) calc(33.16vw - 136px), 33.47vw"
                                                                                                    alt="블레이크 터틀쉘 페이턴트 레더 코트 슈즈"
                                                                                                    itemProp="image"
                                                                                                    data-alt-srcset="https://saint-laurent.dam.kering.com/m/683836afed5efb1e/Small_thumbnail-7763521TW0A2055_B.jpg?v=1 153w,
        https://saint-laurent.dam.kering.com/m/683836afed5efb1e/Thumbnail-7763521TW0A2055_B.jpg?v=1 307w,
        https://saint-laurent.dam.kering.com/m/683836afed5efb1e/Small-7763521TW0A2055_B.jpg?v=1 460w,
        https://saint-laurent.dam.kering.com/m/683836afed5efb1e/Medium-7763521TW0A2055_B.jpg?v=1 613w,
        https://saint-laurent.dam.kering.com/m/683836afed5efb1e/Large-7763521TW0A2055_B.jpg?v=1 1227w"/>


                                                                                            </div>


                                                                                        </div>


                                                                                        <div
                                                                                            className="c-product__infos">
                                                                                            <div
                                                                                                className="c-product__nameswatches">

                                                                                                <h2 className="c-product__name">
                                                                                                    블레이크 터틀쉘 페이턴트 레더 코트
                                                                                                    슈즈
                                                                                                </h2>


                                                                                                <div
                                                                                                    className="c-product__swatches">


                                                                                                </div>

                                                                                            </div>
                                                                                            <div
                                                                                                className="c-product__priceavailability">


                                                                                                <div
                                                                                                    className="c-product__price c-price"
                                                                                                    itemProp="offers"
                                                                                                    itemScope=""
                                                                                                    itemType="http://schema.org/Offer">


                                                                                                    <meta
                                                                                                        itemProp="priceCurrency"
                                                                                                        content="KRW"/>
                                                                                                        <p className="c-price__value--current"
                                                                                                           data-employee="false"
                                                                                                           itemProp="price"
                                                                                                           content="1640000">
                                                                                                            ₩ 1,640,000


                                                                                                        </p>


                                                                                                </div>


                                                                                            </div>
                                                                                        </div>
                                                                                        <a className="c-product__link c-product__focus"
                                                                                           data-ref="link"
                                                                                           href="/ko-kr/%EC%8A%AC%EB%A7%81%EB%B0%B1/%EB%B8%94%EB%A0%88%EC%9D%B4%ED%81%AC-%ED%84%B0%ED%8B%80%EC%89%98-%ED%8E%98%EC%9D%B4%ED%84%B4%ED%8A%B8-%EB%A0%88%EB%8D%94-%EC%BD%94%ED%8A%B8-%EC%8A%88%EC%A6%88-7763521TW0A2055.html"
                                                                                           itemProp="url"
                                                                                           data-pid="7763521TW0A2055">
            <span className="u-visually-hidden">
                블레이크 터틀쉘 페이턴트 레더 코트 슈즈
            </span>
                                                                                        </a>
                                                                                    </div>


                                                                                </article>
                                                                            </li>

                                                                            <li className="c-recocarousel__slide swiper-slide-next"
                                                                                data-element="slide"
                                                                                data-pid="792855Y15008045"
                                                                                data-ref="recoSlide"
                                                                                data-slide-index="1"
                                                                                style={{width: '98.3077px', marginRight: '2px'}}>


                                                                                <article className="c-product"
                                                                                         data-pid="792855Y15008045"
                                                                                         itemScope=""
                                                                                         itemType="http://schema.org/Product"
                                                                                         data-component="productTile"
                                                                                         data-gtmproduct="{&quot;id&quot;:&quot;792855Y15008045&quot;,&quot;name&quot;:&quot;stacked cuff in metal&quot;,&quot;collection&quot;:&quot;S_S_2024&quot;,&quot;productSMC&quot;:&quot;792855Y15008045&quot;,&quot;material&quot;:&quot;&quot;,&quot;customization&quot;:&quot;not customizable&quot;,&quot;packshotType&quot;:&quot;image&quot;,&quot;brand&quot;:&quot;saint laurent&quot;,&quot;color&quot;:&quot;pale gold&quot;,&quot;colorId&quot;:&quot;8045&quot;,&quot;size&quot;:&quot;&quot;,&quot;price&quot;:null,&quot;discountPrice&quot;:1630000,&quot;coupon&quot;:null,&quot;subCategory&quot;:&quot;view-all-jewellry-women&quot;,&quot;category&quot;:&quot;jewellry-women&quot;,&quot;topCategory&quot;:&quot;shop-women&quot;,&quot;productCategory&quot;:&quot;view-all-jewellry-women&quot;,&quot;macroCategory&quot;:&quot;ysl_macro_women_jewelry&quot;,&quot;microCategory&quot;:&quot;ysl_micro_women_bracelets&quot;,&quot;superMicroCategory&quot;:&quot;ysl_super_micro_women_cuffs_and_bracelet&quot;,&quot;list&quot;:&quot;&quot;,&quot;stock&quot;:&quot;instock&quot;,&quot;productGlobalSMC&quot;:&quot;792855Y15008045&quot;}">


                                                                                    <div className="c-product__inner"
                                                                                         id="792855Y15008045"
                                                                                         data-pid="792855Y15008045"
                                                                                         tabIndex="-1"
                                                                                         data-action="handlePLPProduct">


                                                                                        <div
                                                                                            className="c-product__imagecontainer "
                                                                                            data-ref="imagecontainer">
                                                                                            <div
                                                                                                className="c-product__imagecontainerinner">
                                                                                                <img
                                                                                                    className="c-product__image c-product__image--visual "
                                                                                                    width="307.0"
                                                                                                    height="500.0"
                                                                                                    src="https://saint-laurent.dam.kering.com/m/6fdc22e45c8a7852/Thumbnail-792855Y15008045_A.jpg?v=1"
                                                                                                    srcSet="https://saint-laurent.dam.kering.com/m/6fdc22e45c8a7852/Small_thumbnail-792855Y15008045_A.jpg?v=1 153w,
                    https://saint-laurent.dam.kering.com/m/6fdc22e45c8a7852/Thumbnail-792855Y15008045_A.jpg?v=1 307w,
                    https://saint-laurent.dam.kering.com/m/6fdc22e45c8a7852/Small-792855Y15008045_A.jpg?v=1 460w,
                    https://saint-laurent.dam.kering.com/m/6fdc22e45c8a7852/Medium-792855Y15008045_A.jpg?v=1 613w,
                    https://saint-laurent.dam.kering.com/m/6fdc22e45c8a7852/Large-792855Y15008045_A.jpg?v=1 1227w"
                                                                                                    sizes="(min-width: 1760px) 381px, (min-width: 1440px) calc(25.67vw - 66px), (min-width: 1040px) calc(33.16vw - 136px), 33.47vw"
                                                                                                    alt="메탈 소재의 스택 커프"
                                                                                                    itemProp="image"
                                                                                                    data-alt-srcset="https://saint-laurent.dam.kering.com/m/5543adfdae5fa3aa/Small_thumbnail-792855Y15008045_B.jpg?v=1 153w,
        https://saint-laurent.dam.kering.com/m/5543adfdae5fa3aa/Thumbnail-792855Y15008045_B.jpg?v=1 307w,
        https://saint-laurent.dam.kering.com/m/5543adfdae5fa3aa/Small-792855Y15008045_B.jpg?v=1 460w,
        https://saint-laurent.dam.kering.com/m/5543adfdae5fa3aa/Medium-792855Y15008045_B.jpg?v=1 613w,
        https://saint-laurent.dam.kering.com/m/5543adfdae5fa3aa/Large-792855Y15008045_B.jpg?v=1 1227w"/>


                                                                                            </div>


                                                                                        </div>


                                                                                        <div class="c-product__infos">
                                                                                            <div
                                                                                                class="c-product__nameswatches">

                                                                                                <h2 class="c-product__name">
                                                                                                    메탈 소재의 스택 커프
                                                                                                </h2>


                                                                                                <div
                                                                                                    class="c-product__swatches">


                                                                                                    <div
                                                                                                        class="c-swatches__wrapper">
                                                                                                        <ul class="c-swatches"
                                                                                                            data-ref="swatchesContainer">


                                                                                                            <li class="c-swatches__itemcontainer">
                                                                                                                <a href="/ko-kr/su24-korea/%EB%A9%94%ED%83%88-%EC%86%8C%EC%9E%AC%EC%9D%98-%EC%8A%A4%ED%83%9D-%EC%BB%A4%ED%94%84-792855Y15008045.html?dwvar_792855Y15008045_color=8126"
                                                                                                                   class="c-swatches__item"
                                                                                                                   data-action="clickProductSwatches"
                                                                                                                   rel="nofollow">
                                    <span class="u-sronly">
                                        platinated palladium 메탈 소재의 스택 커프
                                    </span>
                                                                                                                    <span
                                                                                                                        data-attr-value="8126"
                                                                                                                        class="c-swatches__itemimage selected"
                                                                                                                        data-index="0.0"
                                                                                                                        style={{backgroundColor: '#bebebe'}}>
                                    </span>
                                                                                                                </a>
                                                                                                            </li>


                                                                                                            <li class="c-swatches__itemcontainer">
                                                                                                                <a href="/ko-kr/su24-korea/%EB%A9%94%ED%83%88-%EC%86%8C%EC%9E%AC%EC%9D%98-%EC%8A%A4%ED%83%9D-%EC%BB%A4%ED%94%84-792855Y15008045.html?dwvar_792855Y15008045_color=8045"
                                                                                                                   class="c-swatches__item"
                                                                                                                   data-action="clickProductSwatches"
                                                                                                                   rel="nofollow">
                                    <span class="u-sronly">
                                        pale gold 메탈 소재의 스택 커프
                                    </span>
                                                                                                                    <span
                                                                                                                        data-attr-value="8045"
                                                                                                                        class="c-swatches__itemimage selected"
                                                                                                                        data-index="1.0"
                                                                                                                        style={{backgroundColor: '#e8c382'}}>
                                    </span>
                                                                                                                </a>
                                                                                                            </li>


                                                                                                        </ul>
                                                                                                        <p class="c-swatches__label">
                                                                                                            + 2 컬러
                                                                                                        </p>
                                                                                                    </div>


                                                                                                </div>

                                                                                            </div>
                                                                                            <div
                                                                                                class="c-product__priceavailability">


                                                                                                <div
                                                                                                    class="c-product__price c-price"
                                                                                                    itemprop="offers"
                                                                                                    itemscope=""
                                                                                                    itemtype="http://schema.org/Offer">


                                                                                                    <meta
                                                                                                        itemprop="priceCurrency"
                                                                                                        content="KRW"/>
                                                                                                        <p class="c-price__value--current"
                                                                                                           data-employee="false"
                                                                                                           itemprop="price"
                                                                                                           content="1630000">
                                                                                                            ₩ 1,630,000


                                                                                                        </p>


                                                                                                </div>


                                                                                            </div>
                                                                                        </div>
                                                                                        <a class="c-product__link c-product__focus"
                                                                                           data-ref="link"
                                                                                           href="/ko-kr/su24-korea/%EB%A9%94%ED%83%88-%EC%86%8C%EC%9E%AC%EC%9D%98-%EC%8A%A4%ED%83%9D-%EC%BB%A4%ED%94%84-792855Y15008045.html"
                                                                                           itemprop="url"
                                                                                           data-pid="792855Y15008045">
            <span class="u-visually-hidden">
                메탈 소재의 스택 커프
            </span>
                                                                                        </a>
                                                                                    </div>


                                                                                </article>
                                                                            </li>


                                                                            <li class="c-recocarousel__slide"
                                                                                data-element="slide"
                                                                                data-pid="788579Y7I142613"
                                                                                data-ref="recoSlide"
                                                                                data-slide-index="2"
                                                                                style={{width: '98.3077px', marginRight: '2px'}}>


                                                                                <article class="c-product"
                                                                                         data-pid="788579Y7I142613"
                                                                                         itemscope=""
                                                                                         itemtype="http://schema.org/Product"
                                                                                         data-component="productTile"
                                                                                         data-gtmproduct="{&quot;id&quot;:&quot;788579Y7I142613&quot;,&quot;name&quot;:&quot;strapless jumpsuit in cotton gabardine&quot;,&quot;collection&quot;:&quot;S_S_2024&quot;,&quot;productSMC&quot;:&quot;788579Y7I142613&quot;,&quot;material&quot;:&quot;&quot;,&quot;customization&quot;:&quot;not customizable&quot;,&quot;packshotType&quot;:&quot;image&quot;,&quot;brand&quot;:&quot;saint laurent&quot;,&quot;color&quot;:&quot;beige&quot;,&quot;colorId&quot;:&quot;2613&quot;,&quot;size&quot;:&quot;&quot;,&quot;price&quot;:null,&quot;discountPrice&quot;:7430000,&quot;coupon&quot;:null,&quot;subCategory&quot;:&quot;saint-laurent-rive-droite-women&quot;,&quot;category&quot;:&quot;sl-by-rd&quot;,&quot;topCategory&quot;:&quot;rivedroite&quot;,&quot;productCategory&quot;:&quot;saint-laurent-rive-droite-women&quot;,&quot;macroCategory&quot;:&quot;ysl_macro_women_rtw&quot;,&quot;microCategory&quot;:&quot;ysl_micro_women_jumpsuit&quot;,&quot;superMicroCategory&quot;:&quot;ysl_super_micro_women_jumpsuits&quot;,&quot;list&quot;:&quot;&quot;,&quot;stock&quot;:&quot;instock&quot;,&quot;productGlobalSMC&quot;:&quot;788579Y7I142613&quot;}">


                                                                                    <div class="c-product__inner"
                                                                                         id="788579Y7I142613"
                                                                                         data-pid="788579Y7I142613"
                                                                                         tabindex="-1"
                                                                                         data-action="handlePLPProduct">


                                                                                        <div
                                                                                            class="c-product__imagecontainer "
                                                                                            data-ref="imagecontainer">
                                                                                            <div
                                                                                                class="c-product__imagecontainerinner">
                                                                                                <img
                                                                                                    class="c-product__image c-product__image--visual "
                                                                                                    width="307.0"
                                                                                                    height="500.0"
                                                                                                    src="https://saint-laurent.dam.kering.com/m/3cb126fec3c08af0/Thumbnail-788579Y7I142613_A.jpg?v=3"
                                                                                                    srcset="https://saint-laurent.dam.kering.com/m/3cb126fec3c08af0/Small_thumbnail-788579Y7I142613_A.jpg?v=3 153w,
                    https://saint-laurent.dam.kering.com/m/3cb126fec3c08af0/Thumbnail-788579Y7I142613_A.jpg?v=3 307w,
                    https://saint-laurent.dam.kering.com/m/3cb126fec3c08af0/Small-788579Y7I142613_A.jpg?v=3 460w,
                    https://saint-laurent.dam.kering.com/m/3cb126fec3c08af0/Medium-788579Y7I142613_A.jpg?v=3 613w,
                    https://saint-laurent.dam.kering.com/m/3cb126fec3c08af0/Large-788579Y7I142613_A.jpg?v=3 1227w"
                                                                                                    sizes="(min-width: 1760px) 381px, (min-width: 1440px) calc(25.67vw - 66px), (min-width: 1040px) calc(33.16vw - 136px), 33.47vw"
                                                                                                    alt="코튼 개버딘 소재의 스트랩리스 점프수트"
                                                                                                    itemprop="image"
                                                                                                    data-alt-srcset="https://saint-laurent.dam.kering.com/m/60928de9744c7362/Small_thumbnail-788579Y7I142613_B.jpg?v=4 153w,
        https://saint-laurent.dam.kering.com/m/60928de9744c7362/Thumbnail-788579Y7I142613_B.jpg?v=4 307w,
        https://saint-laurent.dam.kering.com/m/60928de9744c7362/Small-788579Y7I142613_B.jpg?v=4 460w,
        https://saint-laurent.dam.kering.com/m/60928de9744c7362/Medium-788579Y7I142613_B.jpg?v=4 613w,
        https://saint-laurent.dam.kering.com/m/60928de9744c7362/Large-788579Y7I142613_B.jpg?v=4 1227w"/>


                                                                                            </div>


                                                                                        </div>


                                                                                        <div class="c-product__infos">
                                                                                            <div
                                                                                                class="c-product__nameswatches">

                                                                                                <h2 class="c-product__name">
                                                                                                    코튼 개버딘 소재의 스트랩리스
                                                                                                    점프수트
                                                                                                </h2>


                                                                                                <div
                                                                                                    class="c-product__swatches">


                                                                                                </div>

                                                                                            </div>
                                                                                            <div
                                                                                                class="c-product__priceavailability">


                                                                                                <div
                                                                                                    class="c-product__price c-price"
                                                                                                    itemprop="offers"
                                                                                                    itemscope=""
                                                                                                    itemtype="http://schema.org/Offer">


                                                                                                    <meta
                                                                                                        itemprop="priceCurrency"
                                                                                                        content="KRW"/>
                                                                                                        <p class="c-price__value--current"
                                                                                                           data-employee="false"
                                                                                                           itemprop="price"
                                                                                                           content="7430000">
                                                                                                            ₩ 7,430,000


                                                                                                        </p>


                                                                                                </div>


                                                                                            </div>
                                                                                        </div>
                                                                                        <a class="c-product__link c-product__focus"
                                                                                           data-ref="link"
                                                                                           href="/ko-kr/jumpsuits/%EC%BD%94%ED%8A%BC-%EA%B0%9C%EB%B2%84%EB%94%98-%EC%86%8C%EC%9E%AC%EC%9D%98-%EC%8A%A4%ED%8A%B8%EB%9E%A9%EB%A6%AC%EC%8A%A4-%EC%A0%90%ED%94%84%EC%88%98%ED%8A%B8-788579Y7I142613.html"
                                                                                           itemprop="url"
                                                                                           data-pid="788579Y7I142613">
            <span class="u-visually-hidden">
                코튼 개버딘 소재의 스트랩리스 점프수트
            </span>
                                                                                        </a>
                                                                                    </div>


                                                                                </article>
                                                                            </li>


                                                                            <li class="c-recocarousel__slide"
                                                                                data-element="slide"
                                                                                data-pid="776352AAC6Z2226"
                                                                                data-ref="recoSlide"
                                                                                data-slide-index="3"
                                                                                style={{width: '98.3077px', marginRight: '2px'}}>


                                                                                <article class="c-product"
                                                                                         data-pid="776352AAC6Z2226"
                                                                                         itemscope=""
                                                                                         itemtype="http://schema.org/Product"
                                                                                         data-component="productTile"
                                                                                         data-gtmproduct="{&quot;id&quot;:&quot;776352AAC6Z2226&quot;,&quot;name&quot;:&quot;blake slingback pumps in patent leather&quot;,&quot;collection&quot;:&quot;S_S_2024&quot;,&quot;productSMC&quot;:&quot;776352AAC6Z2226&quot;,&quot;material&quot;:&quot;&quot;,&quot;customization&quot;:&quot;not customizable&quot;,&quot;packshotType&quot;:&quot;image&quot;,&quot;brand&quot;:&quot;saint laurent&quot;,&quot;color&quot;:&quot;marron glace&quot;,&quot;colorId&quot;:&quot;2226&quot;,&quot;size&quot;:&quot;&quot;,&quot;price&quot;:null,&quot;discountPrice&quot;:1580000,&quot;coupon&quot;:null,&quot;subCategory&quot;:&quot;digital-campaign-women-spring-24-jp&quot;,&quot;category&quot;:&quot;digital-campaign-women-spring-24&quot;,&quot;topCategory&quot;:&quot;shop-women&quot;,&quot;productCategory&quot;:&quot;digital-campaign-women-spring-24-jp&quot;,&quot;macroCategory&quot;:&quot;ysl_macro_women_shoes&quot;,&quot;microCategory&quot;:&quot;ysl_micro_women_pumps&quot;,&quot;superMicroCategory&quot;:&quot;ysl_super_micro_women_pumps&quot;,&quot;list&quot;:&quot;&quot;,&quot;stock&quot;:&quot;notifyMe&quot;,&quot;productGlobalSMC&quot;:&quot;776352AAC6Z2226&quot;}">


                                                                                    <div class="c-product__inner"
                                                                                         id="776352AAC6Z2226"
                                                                                         data-pid="776352AAC6Z2226"
                                                                                         tabindex="-1"
                                                                                         data-action="handlePLPProduct">


                                                                                        <div
                                                                                            class="c-product__imagecontainer "
                                                                                            data-ref="imagecontainer">
                                                                                            <div
                                                                                                class="c-product__imagecontainerinner">
                                                                                                <img
                                                                                                    class="c-product__image c-product__image--visual "
                                                                                                    width="307.0"
                                                                                                    height="500.0"
                                                                                                    src="https://saint-laurent.dam.kering.com/m/4b81013975623015/Thumbnail-776352AAC6Z2226_A.jpg?v=2"
                                                                                                    srcset="https://saint-laurent.dam.kering.com/m/4b81013975623015/Small_thumbnail-776352AAC6Z2226_A.jpg?v=2 153w,
                    https://saint-laurent.dam.kering.com/m/4b81013975623015/Thumbnail-776352AAC6Z2226_A.jpg?v=2 307w,
                    https://saint-laurent.dam.kering.com/m/4b81013975623015/Small-776352AAC6Z2226_A.jpg?v=2 460w,
                    https://saint-laurent.dam.kering.com/m/4b81013975623015/Medium-776352AAC6Z2226_A.jpg?v=2 613w,
                    https://saint-laurent.dam.kering.com/m/4b81013975623015/Large-776352AAC6Z2226_A.jpg?v=2 1227w"
                                                                                                    sizes="(min-width: 1760px) 381px, (min-width: 1440px) calc(25.67vw - 66px), (min-width: 1040px) calc(33.16vw - 136px), 33.47vw"
                                                                                                    alt="페이턴트 가죽 소재의 blake 슬링백 펌프스"
                                                                                                    itemprop="image"
                                                                                                    data-alt-srcset="https://saint-laurent.dam.kering.com/m/1690158dec1ccb1/Small_thumbnail-776352AAC6Z2226_B.jpg?v=2 153w,
        https://saint-laurent.dam.kering.com/m/1690158dec1ccb1/Thumbnail-776352AAC6Z2226_B.jpg?v=2 307w,
        https://saint-laurent.dam.kering.com/m/1690158dec1ccb1/Small-776352AAC6Z2226_B.jpg?v=2 460w,
        https://saint-laurent.dam.kering.com/m/1690158dec1ccb1/Medium-776352AAC6Z2226_B.jpg?v=2 613w,
        https://saint-laurent.dam.kering.com/m/1690158dec1ccb1/Large-776352AAC6Z2226_B.jpg?v=2 1227w"/>


                                                                                            </div>


                                                                                        </div>


                                                                                        <div class="c-product__infos">
                                                                                            <div
                                                                                                class="c-product__nameswatches">

                                                                                                <h2 class="c-product__name">
                                                                                                    페이턴트 가죽 소재의 blake
                                                                                                    슬링백 펌프스
                                                                                                </h2>


                                                                                                <div
                                                                                                    class="c-product__swatches">


                                                                                                </div>

                                                                                            </div>
                                                                                            <div
                                                                                                class="c-product__priceavailability">


                                                                                                <div
                                                                                                    class="c-product__price c-price"
                                                                                                    itemprop="offers"
                                                                                                    itemscope=""
                                                                                                    itemtype="http://schema.org/Offer">


                                                                                                    <meta
                                                                                                        itemprop="priceCurrency"
                                                                                                        content="KRW"/>
                                                                                                        <p class="c-price__value--current"
                                                                                                           data-employee="false"
                                                                                                           itemprop="price"
                                                                                                           content="1580000">
                                                                                                            ₩ 1,580,000


                                                                                                        </p>


                                                                                                </div>


                                                                                                <div
                                                                                                    class="c-product__availability">
                                                                                                    알림 받기
                                                                                                </div>


                                                                                            </div>
                                                                                        </div>
                                                                                        <a class="c-product__link c-product__focus"
                                                                                           data-ref="link"
                                                                                           href="/ko-kr/%EC%8A%AC%EB%A7%81%EB%B0%B1/%ED%8E%98%EC%9D%B4%ED%84%B4%ED%8A%B8-%EA%B0%80%EC%A3%BD-%EC%86%8C%EC%9E%AC%EC%9D%98-blake-%EC%8A%AC%EB%A7%81%EB%B0%B1-%ED%8E%8C%ED%94%84%EC%8A%A4-776352AAC6Z2226.html"
                                                                                           itemprop="url"
                                                                                           data-pid="776352AAC6Z2226">
            <span class="u-visually-hidden">
                페이턴트 가죽 소재의 blake 슬링백 펌프스
            </span>
                                                                                        </a>
                                                                                    </div>


                                                                                </article>
                                                                            </li>


                                                                        </ul>
                                                                        <span class="swiper-notification"
                                                                              aria-live="assertive"
                                                                              aria-atomic="true"></span></div>


                                                                    <div tabindex="-1" role="button"
                                                                         class="c-recocarousel__prev swiper-button-disabled"
                                                                         aria-label="Previous slide"
                                                                         aria-disabled="true">
                <span class="u-visually-hidden">
                    이전
                </span>
                                                                        <i class="c-icon--arrow-left"></i>
                                                                    </div>
                                                                    <div tabindex="0" role="button"
                                                                         class="c-recocarousel__next"
                                                                         aria-label="Next slide" aria-disabled="false">
                <span class="u-visually-hidden">
                    다음
                </span>
                                                                        <i class="c-icon--arrow-right"></i>
                                                                    </div>

                                                                </div>
                                                            </div>


                                                        </div>
                                                    </div>


                                                    <div class="c-emptycart__categories">
                                                        <div class="l-productgrid l-productgrid--emptycart">
            <span class="l-productgrid__title">
                다른 카테고리
            </span>
                                                            <ul class="l-productgrid__inner"
                                                                data-gridtype="CATEGORYLIST">

                                                                <li class="l-productgrid__item">
                                                                    <div class="l-productgrid__inner">
                                                                        <div class="l-productgrid__imagecontainer">
                                                                            <img
                                                                                data-src="https://saint-laurent.dam.kering.com/m/485544724b167eab/Thumbnail-753883AACQP1000_A.jpg?v=2"
                                                                                class="l-productgrid__img lazyload"/>
                                                                        </div>
                                                                        <div class="l-productgrid__infos">
            <span class="l-productgrid__name">
                여성용 가죽 액세서리
            </span>
                                                                        </div>
                                                                        <a href="https://www.ysl.com/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%EA%B0%80%EC%A3%BD-%EC%86%8C%ED%92%88/%EA%B0%80%EC%A3%BD-%EC%86%8C%ED%92%88-%EB%AA%A8%EB%91%90-%EB%B3%B4%EA%B8%B0"
                                                                           class="l-productgrid__link">
                                                                        </a>
                                                                    </div>
                                                                </li>


                                                                <li class="l-productgrid__item">
                                                                    <div class="l-productgrid__inner">
                                                                        <div class="l-productgrid__imagecontainer">
                                                                            <img
                                                                                data-src="https://saint-laurent.dam.kering.com/m/7fe6c838d4bf41b6/Thumbnail-7857061N8001000_A.jpg?v=4"
                                                                                class="l-productgrid__img lazyload"/>
                                                                        </div>
                                                                        <div class="l-productgrid__infos">
            <span class="l-productgrid__name">
                여성 슈즈
            </span>
                                                                        </div>
                                                                        <a href="https://www.ysl.com/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%EC%8A%88%EC%A6%88/%EC%8A%88%EC%A6%88-%EB%AA%A8%EB%91%90-%EB%B3%B4%EA%B8%B0"
                                                                           class="l-productgrid__link">
                                                                        </a>
                                                                    </div>
                                                                </li>


                                                                <li class="l-productgrid__item">
                                                                    <div class="l-productgrid__inner">
                                                                        <div class="l-productgrid__imagecontainer">
                                                                            <img
                                                                                data-src="https://saint-laurent.dam.kering.com/m/6dc508962aa2e661/Thumbnail-785813Y9I261000_A.jpg?v=2"
                                                                                class="l-productgrid__img lazyload"/>
                                                                        </div>
                                                                        <div class="l-productgrid__infos">
            <span class="l-productgrid__name">
                남성 레디 투 웨어
            </span>
                                                                        </div>
                                                                        <a href="https://www.ysl.com/ko-kr/%EC%97%AC%EC%84%B1-%EC%87%BC%ED%95%91/%EB%A0%88%EB%94%94-%ED%88%AC-%EC%9B%A8%EC%96%B4/%EB%A0%88%EB%94%94-%ED%88%AC-%EC%9B%A8%EC%96%B4-%EB%AA%A8%EB%91%90-%EB%B3%B4%EA%B8%B0"
                                                                           class="l-productgrid__link">
                                                                        </a>
                                                                    </div>
                                                                </li>


                                                                <li class="l-productgrid__item">
                                                                    <div class="l-productgrid__inner">
                                                                        <div class="l-productgrid__imagecontainer">
                                                                            <img
                                                                                data-src="https://saint-laurent.dam.kering.com/m/2579c5613af7b444/Thumbnail-779512AADA11000_A.jpg?v=2"
                                                                                class="l-productgrid__img lazyload"/>
                                                                        </div>
                                                                        <div class="l-productgrid__infos">
            <span class="l-productgrid__name">
                남성용 가죽 액세서리
            </span>
                                                                        </div>
                                                                        <a href="https://www.ysl.com/ko-kr/%EB%82%A8%EC%84%B1-%EC%87%BC%ED%95%91/%EA%B0%80%EC%A3%BD-%EC%86%8C%ED%92%88/%EA%B0%80%EC%A3%BD-%EC%86%8C%ED%92%88-%EB%AA%A8%EB%91%90-%EB%B3%B4%EA%B8%B0"
                                                                           class="l-productgrid__link">
                                                                        </a>
                                                                    </div>
                                                                </li>


                                                                <li class="l-productgrid__item">
                                                                    <div class="l-productgrid__inner">
                                                                        <div class="l-productgrid__imagecontainer">
                                                                            <img
                                                                                data-src="https://saint-laurent.dam.kering.com/m/780aacbd08eb7761/Thumbnail-77686107RAA1000_A.jpg?v=2"
                                                                                class="l-productgrid__img lazyload"/>
                                                                        </div>
                                                                        <div class="l-productgrid__infos">
            <span class="l-productgrid__name">
                남성 슈즈
            </span>
                                                                        </div>
                                                                        <a href="https://www.ysl.com/ko-kr/%EB%82%A8%EC%84%B1-%EC%87%BC%ED%95%91/%EC%8A%88%EC%A6%88/%EC%8A%88%EC%A6%88-%EB%AA%A8%EB%91%90-%EB%B3%B4%EA%B8%B0"
                                                                           class="l-productgrid__link">
                                                                        </a>
                                                                    </div>
                                                                </li>


                                                                <li class="l-productgrid__item">
                                                                    <div class="l-productgrid__inner">
                                                                        <div class="l-productgrid__imagecontainer">
                                                                            <img
                                                                                data-src="https://saint-laurent.dam.kering.com/m/387581c7b1f94965/Thumbnail-753029Y07JA5018_A.jpg?v=1"
                                                                                class="l-productgrid__img lazyload"/>
                                                                        </div>
                                                                        <div class="l-productgrid__infos">
            <span class="l-productgrid__name">
                남성 레디 투 웨어
            </span>
                                                                        </div>
                                                                        <a href="https://www.ysl.com/ko-kr/%EB%82%A8%EC%84%B1-%EC%87%BC%ED%95%91/%EB%A0%88%EB%94%94-%ED%88%AC-%EC%9B%A8%EC%96%B4/%EB%A0%88%EB%94%94-%ED%88%AC-%EC%9B%A8%EC%96%B4-%EB%AA%A8%EB%91%90-%EB%B3%B4%EA%B8%B0"
                                                                           class="l-productgrid__link">
                                                                        </a>
                                                                    </div>
                                                                </li>


                                                            </ul>
                                                        </div>
                                                    </div>


                                                </div>


                                                <div class="ca-layercustomercare">
                                                    <a class="ca-layercustomercare__title" target="_blank"
                                                       href="https://www.ysl.com/ko-kr/displayname-faq">
                                                        도움이 필요하세요?
                                                    </a>
                                                    <ul class="ca-layercustomercare__options">
                                                        <li class="ca-customercareinfo__chat powerfrontlivechatcontainer u-hidden"
                                                            data-behavior="hide">
                                                            <button
                                                                class="ca-layercustomercare__link powerfrontlivechat u-hidden"
                                                                onclick="openChatButtonClick()" type="live-chat"
                                                                aria-describedby="help-availability">
                                                                <i class="c-icon--chat ca-layercustomercare__icon"></i>
                                                                <span
                                                                    class="u-visually-hidden">Contact us by chat</span>
                                                                <span
                                                                    class="powerfrontlivechatavailable ca-layercustomercare__text">Chat</span>
                                                                <span
                                                                    class="powerfrontlivechatunavailable u-hidden"></span>
                                                            </button>
                                                        </li>
                                                        <li class="ca-customercareinfo__phone">
                                                            <a class="ca-layercustomercare__link" href="tel:82261052228"
                                                               aria-describedby="help-availability">
                                                                <i class="c-icon--phone ca-layercustomercare__icon"></i>
                                                                <span
                                                                    class="ca-layercustomercare__text">+82 261052228</span>
                                                            </a>
                                                        </li>
                                                        <li class="ca-layercustomercare__contact">
                                                            <a class="ca-layercustomercare__link" target="_blank"
                                                               href="https://www.ysl.com/ko-kr/contactus">
                                                                <i class="c-icon--contact ca-layercustomercare__icon"></i>
                                                                <span class="ca-layercustomercare__text">문의하기</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>


                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <button data-ref="trigger" class="c-nav__toggler u-show--none@lg" type="button"
                            aria-expanded="false" aria-controls="navigation-1718335093617-yl3x8wmrl">
                        <span class="c-icon--burger" aria-hidden="true"></span>
                        <span class="c-nav__togglerlabel u-visually-hidden">
                            메뉴
                        </span>
                    </button>
                    <div class="l-header__services c-topaccount--services">


                        <div class="c-topaccount u-hidden@lg" data-qa="Account-Login">
                            <a href="https://www.ysl.com/ko-kr/login" class="c-topaccount__icon c-nav__link"
                               aria-label="나의 계정" data-action="clickLinkAsideMenu" data-top-menu-category="log in">
            <span class="c-topaccount__label">
                로그인
            </span>
                            </a>
                        </div>

                        <div class="c-topfaq u-hidden@lg">
                            <a href="/ko-kr/displayname-faq" class="c-topfaq__icon c-nav__link" aria-label="고객 서비스"
                               data-action="clickLinkAsideMenu" data-top-menu-category="client service">
                                고객 서비스
                            </a>
                        </div>

                        <span data-ref="transientData"
                              data-transientdata="{&quot;customer&quot;:{&quot;logged&quot;:false}}"></span>

                    </div>
                    <div data-ref="asidePanelExpandable" class="c-nav__aside">
                        <ul data-ref="navlist" class="c-nav__list c-nav__level1 c-sustainbility u-hidden@lg">
                            <li data-ref="item" class="c-nav__item" data-level1="true" data-haschildren="true">


                                <button data-ref="link" class="c-nav__link" data-action="clickLinkAsideMenu"
                                        data-top-menu-category="sustainability" id="navigation-1718335093639-676eix5yz"
                                        aria-controls="navigation-1718335093639-sv3detm6j" aria-expanded="false">
                                    지속 가능성
                                </button>

                                <div class="c-nav__subnav" data-ref="subnav" id="navigation-1718335093639-sv3detm6j"
                                     aria-hidden="true">
                                    <ul data-ref="navlist" class="c-nav__list c-nav__level2">

                                        <li data-ref="item" class="c-nav__item c-nav__item--nonav" data-level2="true"
                                            data-cgid="approach" data-action="clickLinkAsideMenu">
                                            <a data-ref="link" class="c-nav__link "
                                               href="https://www.ysl.com/ko-kr/sustainability-approach"
                                               id="navigation-1718335093639-smyhukvlm">
                                                접근법
                                            </a>
                                        </li>

                                        <li data-ref="item" class="c-nav__item c-nav__item--nonav" data-level2="true"
                                            data-cgid="standards" data-action="clickLinkAsideMenu">
                                            <a data-ref="link" class="c-nav__link "
                                               href="https://www.ysl.com/ko-kr/sustainability-standards"
                                               id="navigation-1718335093639-5o4pmc1h7">
                                                기준
                                            </a>
                                        </li>

                                        <li data-ref="item" class="c-nav__item c-nav__item--nonav" data-level2="true"
                                            data-cgid="measuring-impact" data-action="clickLinkAsideMenu">
                                            <a data-ref="link" class="c-nav__link "
                                               href="https://www.ysl.com/ko-kr/sustainability-measuring-impact"
                                               id="navigation-1718335093639-4pyjdwpuc">
                                                효과 측정
                                            </a>
                                        </li>

                                        <li data-ref="item" class="c-nav__item c-nav__item--nonav" data-level2="true"
                                            data-cgid="house-operations" data-action="clickLinkAsideMenu">
                                            <a data-ref="link" class="c-nav__link "
                                               href="https://www.ysl.com/ko-kr/sustainability-house-operations"
                                               id="navigation-1718335093639-co7oxc3sd">
                                                하우스 운영
                                            </a>
                                        </li>

                                        <li data-ref="item" class="c-nav__item c-nav__item--nonav" data-level2="true"
                                            data-cgid="raw-materials" data-action="clickLinkAsideMenu">
                                            <a data-ref="link" class="c-nav__link "
                                               href="https://www.ysl.com/ko-kr/sustainability-raw-materials"
                                               id="navigation-1718335093639-izane2nbk">
                                                원료
                                            </a>
                                        </li>

                                        <li data-ref="item" class="c-nav__item c-nav__item--nonav" data-level2="true"
                                            data-cgid="supply-chain" data-action="clickLinkAsideMenu">
                                            <a data-ref="link" class="c-nav__link "
                                               href="https://www.ysl.com/ko-kr/sustainability-supply-chain"
                                               id="navigation-1718335093639-i8a2rxiy1">
                                                공급망
                                            </a>
                                        </li>

                                        <li data-ref="item" class="c-nav__item c-nav__item--nonav" data-level2="true"
                                            data-cgid="products" data-action="clickLinkAsideMenu">
                                            <a data-ref="link" class="c-nav__link "
                                               href="https://www.ysl.com/ko-kr/sustainability-products"
                                               id="navigation-1718335093639-p6jag78x6">
                                                제품
                                            </a>
                                        </li>

                                        <li data-ref="item" class="c-nav__item c-nav__item--nonav" data-level2="true"
                                            data-cgid="circularity" data-action="clickLinkAsideMenu">
                                            <a data-ref="link" class="c-nav__link "
                                               href="https://www.ysl.com/ko-kr/sustainability-circularity"
                                               id="navigation-1718335093639-ccfg43mwi">
                                                순환성
                                            </a>
                                        </li>

                                        <li data-ref="item" class="c-nav__item c-nav__item--nonav" data-level2="true"
                                            data-cgid="charity-water" data-action="clickLinkAsideMenu">
                                            <a data-ref="link" class="c-nav__link "
                                               href="https://www.ysl.com/ko-kr/sustainability-charity-water"
                                               id="navigation-1718335093639-2d0to5p42">
                                                기부: 물
                                            </a>
                                        </li>

                                    </ul>
                                </div>


                            </li>
                        </ul>
                    </div>
                </div>
            </div>*/}
        </>
    );
}

export default Header;