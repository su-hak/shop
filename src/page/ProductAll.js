import React, { useState } from 'react'
import data from "../data";
import videoSrc from '../Saint_Laurent_mainVideo.mp4'

{/*
        1. 상품 목록을 컴포넌트화 하기
        2. 컴포넌트 > 데이터 바인딩
        3. 3개 상품 map으로 반복
        */}
const ProductAll = () => {
    let [items] = useState(data);
    
    // items 데이터 섹션별로 그룹화
    const groupedData = items.reduce((acc, item) => {
        if (!acc[item.section]) {
            acc[item.section] = [];
        }
        acc[item.section].push(item);
        return acc;
    }, {});

    return (
        <>
            <div className="main-bg">
                <div className="hero -full">
                    <video autoPlay muted loop className="main-video">
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                    <div className="title">
                        <h1 className="bold">SUMMER 24</h1>
                    </div>
                </div>

            </div>
            <div className="container">
                {Object.keys(groupedData).map(section => (
                    <div key={section} className="section">
                        <div className="row">
                            {groupedData[section].map((item) => (
                                <Card
                                    key={item.id}
                                    section={item.section}
                                    id={item.id}
                                    item={item}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
function Card({ item, section, id }) { // props을 item, section, id로 받기
    console.log(item.title);
    return (
        <div className={item.alt}>
            <div className="image-box">
            <img className={item.alt}
                 src={`https://su-hak.github.io/shop/Img/sec${section}_img${id+1}.jpg`}
                 alt={item.title}>
            </img>
            </div>
            {/*<h6>{item.title}</h6>
            <p>{item.content}</p>
            <p>{item.price.toLocaleString()} 원</p>*/}
        </div>
    )
}
export default ProductAll