import React, { useEffect, useState } from 'react'
import data from "../data";
import YouTube from 'react-youtube';
import { useNavigate } from 'react-router';
import ProductCard from './ProductCard';
import { Container, Row, Col } from 'react-bootstrap';



{/*
        1. 상품 목록을 컴포넌트화 하기
        2. 컴포넌트 > 데이터 바인딩
        3. 3개 상품 map으로 반복
        */}
const ProductAll = ({setIsHome, setIsScrolledPast}) => {
    let [items] = useState(data);
    const [productList, setProductList] = useState([]);

    const onPlayerReady = event => {
        event.target.playVideo();
    };

    const onPlayerStateChange = event => {
        if (!event.data) {
            const player = event.target;
            player.seekTo(5);
            player.playVideo();
        }
    };

    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            start: 4,
            end: 20,
            controls: 0,
            rel: 0,
            autoplay: 1,
            mute: 1,
        },
    };

    const getProducts = async () => {
        let url = `http://localhost:5000/products`
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data);
    }

    useEffect(()=> {
        getProducts()
    }, [])

    useEffect(() => {
        setIsHome(true);

        const handleScroll = () => {
            const scrolledPastVideo = window.scrollY <= 910;
            setIsScrolledPast(scrolledPastVideo);
        };

        window.addEventListener('scroll', handleScroll);

        // 초기 상태 확인
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            setIsHome(false);
        };
    }, [setIsHome]);

    return (
        <>
            <div className="main-bg">
                <div className="hero -full">
                    <YouTube
                        videoId="XLZOKKM7dpk"
                        opts={opts}
                        onReady={onPlayerReady}
                        onStateChange={onPlayerStateChange}
                    />
                    <div className="title">
                        <h1 className="bold">SUMMER 24</h1>
                    </div>
                </div>
            </div>
            <Container className='all_card' style={{ marginTop: '700px' }}>
                <Row className='all'>
                    {productList.map((menu)=> (
                        <Col lg={3}>
                            <ProductCard item={menu}/>
                            </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}
export default ProductAll