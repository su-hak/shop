import React from 'react'
import { useNavigate } from 'react-router'


const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail=()=>{
    navigate(`/products/${item.id}`)
  }
  return (
    <div onClick={showDetail}>
        <img src={item?.img}/>
        <div>{item?.choice ? "concious choice" : ""}</div>
        <div className='all_title'>{item?.title}</div>
        <div className='all_content'>{item?.content}</div>
        <div className='all_price'>\ {item?.price.toLocaleString()}</div>
    </div>
  )
}

export default ProductCard