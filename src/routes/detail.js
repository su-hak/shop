import {useParams} from "react-router-dom";
import styled from "styled-components";
import {Button, Modal, Nav} from "react-bootstrap";
import {useContext, useEffect, useState} from "react";
import tab from "bootstrap/js/src/tab";
import {Context1} from "../App";

/*let BlueBtn = styled.button`
// css 코드 작성
    background: ${props => props.bg};
    color: white;
    padding: 10px;
`*/

function Detail(props) {

    let {id} = useParams();
    let {items} = useContext(Context1);
    let findItem = items.find(function (x) {
        return x.id == id;
    });

    let [count, setCount] = useState(0);
    let [isAlertVisible, setIsAlertVisible] = useState(true);
    let [inputVal, setInputVal] = useState('');
    let [text, setText] = useState(false);
    let [tab, setTab] = useState(0);

    console.log(id);
    const imgUrl = process.env.PUBLIC_URL + "/item" + (Number(findItem.id) + 1) + ".jpg";

    useEffect(() => {
        // 컴포넌트가 mount update 될 때, 코드 실행됨
        console.log('useEffect 발동됨');

        // 입력 값이 숫자인지 확인
        const textCheck = !isNaN(inputVal) && inputVal.trim() !== '';
        // 상태 업데이트
        setText(textCheck);


        /*if (textCheck) {
            // 숫자일 경우 , 경고 창 표시
            alert("숫자는 입력할 수 없습니다.")
        }*/

    }, [inputVal]); // inputVal가 변경될 때 마다 이 useEffect 실행

        // 서버에서 데이터 호출
        // 오래걸리는 반복 연산
        // 타이머
    useEffect(() => {

        let timer = setTimeout(() => {
            setIsAlertVisible(5000)
        }, 5000);
        // 여기 코드가 실행된다.
        return () => {
            // 여기있는 게 먼저 실행 된 후 위의
            clearTimeout(timer);
        };
    }, [count]);


    return (
        <div className="container">
            {
                isAlertVisible == true ? <div className="alert alert-danger">
                    5초 이내 클릭 시 할인
                </div> : null
            }
            <div className="row">
                <div className="col-md-6">
                    <img src={process.env.PUBLIC_URL + '/item' + (Number(id) + 1) + 1} width="100%"/>
                    <img src={imgUrl} width="100%"/>
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{findItem.title}</h4>
                    <p>{findItem.content}</p>
                    <p>{findItem.price}</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
            <input type="text" value={inputVal} onChange={e => setInputVal(e.target.value)}
                   placeholder="텍스트 입력"/>
            {text && <p>숫자는 입력할 수 없습니다.</p>}
            <button onClick={() => setCount(count + 1)}>벝은</button>

            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link onClick={() => setTab(0)} eventKey="link0">detail</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => setTab(1)} eventKey="link1">review</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => setTab(2)} eventKey="link2">Q&A</Nav.Link>
                </Nav.Item>
            </Nav>

            <TabContent tab={tab}/>

        </div>
    );
}

function TabContent({tab}) {
    let [fade, setFade] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setFade('end')},300);
        return () => {
            setFade('');
        };
    }, [tab]);
/*    if (props.tab === 0) {
        <div>내용 0</div>
    }else if (tab === 1) {
        <div>내용 1</div>
    } else if (tab === 2) {
        <div>내용 2</div>
    }*/

    return (
        <div className={'start' + fade}>
            {[<div>내용 0</div>,<div>내용 1</div>,<div>내용 2</div>][tab]}
        </div>
    )
}

// 천단위로 콤마 표시하기
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default Detail;