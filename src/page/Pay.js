import React from 'react'
import { Container, Accordion, Form, Button } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';


const Pay = ({}) => {
    
    
    return (
        <Container className="pay">
            <div className='pay-wrap'>
                <div className='l-pay-col'>
                    <div>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>배송지</Accordion.Header>
                                <Accordion.Body>
                                    <div style={{ display: 'flex', justifyContent: "space-between" }}>
                                        <span>김수학(김수학)</span> <Button>변경</Button>
                                        </div>
                                    <span> 010-6352-1644</span>
                                    <span>부산 서구 구덕로 130(토성동5가, 해오름아파트)</span>
                                    <Form>
                                        {['checkbox',].map((type) => (
                                            <div key={`default-${type}`} className="mb-3">
                                                <Form.Check // prettier-ignore
                                                    type={type}
                                                    id={`default-${type}`}
                                                    label="다음에도 사용할게요"
                                                />
                                            </div>
                                        ))}
                                    </Form>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    <div>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>주문상품</Accordion.Header>
                                <Accordion.Body>
                                    <div><span>Red Velvet</span> <span>유료</span></div>
                                    <img src='' onClick="클릭시 해당 상품 디테일 페이지로 이동" />
                                    <span>[Cosmic] (Cosmie Ver.)(SMART ALBUM) SET</span>
                                    <span style={{ border: '1px solid #dcdee0', backgroundColor: '#fff', color: '#929294', borderRadius: '4px' }}>옵션</span>
                                    <p>1개</p>
                                    <span>163,000원 </span><span style={{ textDecoration: 'line-through', color: 'grey' }}>210,000</span>
                                </Accordion.Body>
                                <Accordion.Body>
                                    <div><span>TAEYEON</span> <span>유료</span></div>
                                    <img src='' onClick="클릭시 해당 상품 디테일 페이지로 이동" />
                                    <span>[Heaven] (Mini Recipe Book Ver.)(SMART ALBUM)</span>
                                    <span style={{ border: '1px solid #dcdee0', backgroundColor: '#fff', color: '#929294', borderRadius: '4px' }}>옵션</span>
                                    <p>1개</p>
                                    <span>28,200원 </span><span style={{ textDecoration: 'line-through', color: 'grey' }}>39,000</span>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    <div>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>결제수단</Accordion.Header>
                                <Accordion.Body>
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>삼성페이</Accordion.Header>
                                            <Accordion.Body>
                                                <Button>SamsungPay</Button>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>카카오페이</Accordion.Header>
                                            <Accordion.Body>
                                                <Button variant="warning" style={{ color: 'brown' }}>KakaoPay</Button>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>일반결제</Accordion.Header>
                                            <Accordion.Body className='carousel'>
                                                <div>
                                                    <Carousel interval={null}>
                                                        <Carousel.Item>
                                                            <span className='carousel-text'>신용카드</span>
                                                        </Carousel.Item>
                                                        <Carousel.Item>
                                                            <span className='carousel-text'>계좌이체</span>
                                                        </Carousel.Item>
                                                        <Carousel.Item>
                                                            <span className='carousel-text'>휴대폰</span>
                                                        </Carousel.Item>
                                                        <Carousel.Item>
                                                            <span className='carousel-text'>무통장입금</span>
                                                        </Carousel.Item>
                                                    </Carousel>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
                <div className='pay_detail'>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><div className='pay-header'>결제상세</div><span>191,200원</span></Accordion.Header>
                            <Accordion.Body>
                                <span>신용카드</span>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>

        </Container>
    )
}

export default Pay