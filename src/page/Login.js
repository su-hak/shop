import axios from 'axios';
import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();

  const loginUser = async (event) => {
    event.preventDefault();

    setAuthenticate(true);
    navigate('/')

    await requestLogin();
    }

    const handleJoinPage = () => {
      navigate('/join')
    }

    const requestLogin = async () => {
      try {
        const response = await axios.get('http://localhost:8080/check');

        if (response.status === 200) {
          console.log('@check success : ', response.data);
        } else {
          console.error('@check failed');
        }
      } catch (error) {
          console.error('@check error : ', error);
      }
  }
  return (
    <Container className='login'>
      <Form onSubmit={(event)=>loginUser(event)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>아이디</Form.Label>
          <Form.Control type="id" placeholder="아이디" />
          {/* <Form.Text className="text-muted">
            We'll never share your ID with anyone else.
          </Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type="password" placeholder="*비밀번호" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        
        <div className=''>
        <Button variant="success" type="submit">
          로그인
        </Button>
        
        <Button variant="info" onClick={handleJoinPage}>
        회원가입
        </Button>
        </div>
        
      </Form>
    </Container>
  )
}

export default Login