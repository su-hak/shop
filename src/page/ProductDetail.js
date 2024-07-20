import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Dropdown, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { insertItem } from '../utils/CartSlice';



const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  let dispatch = useDispatch();

  const goToPay = () => {
    navigate('/pay');
  }

  const goToLike = () => {
    navigate('/like');
  }

  const goToInquiry = () => {
    navigate('/inquiry');
  }

  const goToCart = () => {
    navigate('/cart');
  }

  const getProductDetail = async () => {
    let url = `http://localhost:5000/products/${id}`
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  }

  useEffect(() => {
    getProductDetail()
  }, []);

  const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
      const [value, setValue] = useState('');

      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <Form.Control
            autoFocus
            className="mx-3 my-2 w-auto"
            placeholder="Type to filter..."
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.toLowerCase().startsWith(value),
            )}
          </ul>
        </div>
      );
    },
  );
  return (
    <Container className='detail'>
      <Row className='detail'>
        <Col className='product-img' >
          <img src={product?.img} />
        </Col>
        <Col className='product-info'>
          <div className='detail_title'>{product?.title}</div>
          <div className='detail_content'>{product?.content}</div>
          <div style={{ borderTop: '1px solid  rgb(179, 179, 179)', margin: '10px 0 20px'}}></div>
          <pre className='detail_notice'>{product?.notice}</pre>
          <div className='detail_price'>\{product?.price.toLocaleString()} <span style={{ fontSize: '15px'}}>(1개)</span></div>
          <Dropdown>
            <div style={{display:'flex', gap:'10px'}}>
              {/* <Dropdown.Toggle style={{ backgroundColor: 'white', color: 'black', border: 'solid black 1px' }} id="dropdown-basic">
                색상
              </Dropdown.Toggle> */}
              <div style={{alignItems:'center', display: 'flex'}}>
                <h6 style={{ marginBottom: 0}}></h6>
              </div>
            </div>

            <Dropdown.Menu as={CustomMenu}>
              {product?.color.map((color, index) => (
                <Dropdown.Item key={index} eventKey={index + 1}>{color}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <div className='detail-btn-box'>
            <Button className='detail-1btn' variant="success" onClick={goToPay}>
              <FontAwesomeIcon />구매하기</Button>
            <div className='detail-3btn'>
              <Button variant="outline-danger">
                <FontAwesomeIcon icon={faHeart} />찜하기</Button>
              <Button variant="outline-secondary">
                <FontAwesomeIcon icon={faEnvelope} />올굿문의</Button>
              <Button name={'장바구니'} variant="outline-success"
                onClick={() => {
                  dispatch(
                    insertItem({
                      id: product?.id,
                      price: product?.price,
                      img: product?.img,
                      title: product?.title,
                      count: 1,
                      content: product?.content,
                      size: product?.size,
                      color: product?.color
                    })
                  );
                }}>
                <FontAwesomeIcon icon={faCartShopping} />장바구니</Button>
            </div>
          </div>
        </Col>
      </Row>

      
      <Row className='detail_bottom'>
          <div style={{ flex: '7'}}>
          <div style={{ borderTop: '1px solid  rgb(179, 179, 179)', margin: '50px 0'}}></div>
            <pre className='detail_explain'>{product?.explain}</pre>
            <img style={{ width: '100%' }} src={product?.explainImg}/>
            <img style={{ width: '100%' }} src={product?.explainImg2}/>
            <img style={{ width: '100%' }} src={product?.explainImg3}/>
            <pre className='detail_explain'>{product?.explain2}</pre>
            <pre className='detail_explain'>{product?.explain3}</pre>
            </div>
          <div style={{ flex: '3'}}></div>
      </Row>
    </Container>
  )
}

export default ProductDetail