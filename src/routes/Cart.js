import { Container, Form, Button, Modal, CloseButton } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../store"
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate, useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { updateItemCount } from "../utils/CartSlice";


function Cart() {
    let dispatch = useDispatch();
    const navigate = useNavigate();
    const [totalResult, setTotalResult] = useState(0);

    let list = useSelector((state) => state.cart);

    const goToPay = () => {
        navigate('/pay', { list })
    }


    const countBtn = (type, item) => {
        let newCount = item.count;
        if (type === 'plus') {
            newCount += 1;
        } else if (type === 'minus' && newCount > 1) {
            newCount -= 1;
        } else if (type === 'delete' && newCount >= 1) {
            newCount = 0;
        }
        dispatch(updateItemCount({ id: item.id, count: newCount }));
    }

    const handelInputChange = (event, item) => {
        const newCount = parseInt(event.target.value, 10);
        if (!isNaN(newCount) && newCount >= 0) {
            dispatch(updateItemCount({ id: item.id, count: newCount }));
        }
    }

    const cartListResult = () => {
        return list.reduce((acc, item) => {
            return acc + (item.count * item.price);
        }, 0);
    };

    useEffect(() => {
        setTotalResult(cartListResult());
    }, [list]);

    console.log('list', list)

    const showDetail = (id) => {
        navigate(`/products/${id}`)
    }

    const goToMain = () => {
        navigate('/')
    }

    return (
        <Container className="cart">
            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>장바구니</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <ListGroup>
                            <Form>
                                {list.map((item, index) => (
                                    <div key={index} className="mb-1">
                                        <ListGroup.Item className="cart-list">
                                            <div className="cart-list-img">
                                                <img src={item.img} onClick={() => showDetail(item.id)}/>
                                            </div>
                                            <div className="cart-list-text">
                                                <div><h1>{item.title}</h1></div>
                                                <div><span>{item.content}</span></div>
                                                <div><span>가격: {item.price}</span></div>
                                                <div><span>색상: {item.color}</span></div>
                                                <div><span>사이즈: {item.size}</span></div>
                                                <div className="cart-list-count">
                                                    <button type="button" onClick={() => countBtn('minus', item)}><FontAwesomeIcon icon={faMinus} /></button>

                                                    <input
                                                        className="cart-list-input"
                                                        type="number"
                                                        value={item.count}
                                                        onChange={(event) => handelInputChange(event, item)}
                                                        min="0" />
                                                    <button type="button" onClick={() => countBtn('plus', item)}><FontAwesomeIcon icon={faPlus} /></button>
                                                </div>
                                            </div>
                                            <CloseButton onClick={() => countBtn('delete', item)} />
                                        </ListGroup.Item>
                                    </div>
                                ))}
                            </Form>
                        </ListGroup>
                    </Modal.Body>

                    <Modal.Footer style={{ zIndex: 1, display: 'block' }}>
                        <ListGroup className="cart-result">
                            <ListGroup.Item className="select-pay">총 결제금액: {totalResult.toLocaleString()}원</ListGroup.Item>
                        </ListGroup>
                        <div className="cart-pay-btn">
                            <Button variant="secondary" type='submit' onClick={goToMain}>계속 쇼핑하기</Button>
                            <Button variant="warning" type="submit" onClick={goToPay}>결제하기</Button>
                        </div>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        </Container >
    );
}

export default Cart;