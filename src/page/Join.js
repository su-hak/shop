import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import SignupModal from '../modal/SignupModal';
import axios from 'axios';
import DaumPostcode from "react-daum-postcode";
import Terms from './Terms';
import Modal from 'react-bootstrap/Modal'
import { useNavigate } from 'react-router';

const Join = () => {
    const [name, setName] = useState('');
    const [nickName, setNickName] = useState('');
    const [id, setId] = useState('');
    const [idNumber, setIdNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [verificationCode, setVerificationCode] = useState(''); // 휴대폰 인증 코드
    const [gender, setGender] = useState('');
    const [zonecode, setZonecode] = useState('');
    const [address, setAddress] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [detailedAddress, setDetailedAddress] = useState('');
    const [page, setPage] = useState(1);


    const [nameError, setNameError] = useState('');
    const [nickNameError, setNickNameError] = useState('');
    const [idError, setIdError] = useState('');
    const [idNumberError, setIdNumberError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmError, setConfirmError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [verificationError, setVerificationError] = useState(''); // 휴대폰 인증 코드 에러
    const [isVerified, setIsVerified] = useState(false); // 휴대폰 인증번호 확인
    const [genderError, setGenderError] = useState('');

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const [openModal, setOpenModal] = useState(false);
    const [termsChecked, setTermsChecked] = useState({
        terms1: false,
        terms2: false
    })

    const navigate = useNavigate();

    const onChangeNameHandler = (e) => {
        const nameValue = e.target.value;
        setName(nameValue);
        nameCheckHandler(nameValue);
    };

    const nameCheckHandler = (name) => {
        if (name === '') {
            setNameError('이름: 필수 정보입니다.');
            return false;
        } else {
            setNameError('');
            return true;
        }
    };

    const onChangeNickNameHandler = (e) => {
        const nickNameValue = e.target.value;
        setNickName(nickNameValue);
        nickNameCheckHandler(nickNameValue);
    };

    const nickNameCheckHandler = (nickName) => {
        if (nickName === '') {
            setNickNameError('닉네임: 필수 정보입니다.');
            return false;
        } else {
            setNickNameError('');
            return true;
        }
    };

    const onChangeIdHandler = (e) => {
        const idValue = e.target.value;
        setId(idValue);
        idCheckHandler(idValue);
    }

    const idCheckHandler = async (id) => {
        const idRegex = /^[a-z\d_]{5,10}$/;
        if (id === '') {
            setIdError('아이디: 필수 정보입니다.');
            return false;
        } else if (!idRegex.test(id)) {
            setIdError('아이디는 5~10자의 영소문자, 숫자와 _만 입력 가능합니다.')
            return false;
        } else {
            setIdError('');
            return true;
        }
    }

    const onChangeIdNumberHandler = (e) => {
        const idNumberValue = e.target.value;
        setIdNumber(idNumberValue);
        idNumberCheckHandler(idNumberValue);
    }

    const idNumberCheckHandler = async (idNumber) => {
        const idNumberRegex = /^\d{1,8}$/;
        if (idNumber === '') {
            setIdNumberError('주민등록번호: 필수 정보입니다..')
            return false;
        } else if (!idNumberRegex.test(idNumber)) {
            setIdNumberError('주민등록번호는 앞자리와 뒷 1자리를 모두 입력해주세요.')
            return false;
        } else {
            setIdNumberError('');
            return true;
        }
    }

    const onChangePasswordHandler = (e) => {
        const { name, value } = e.target;
        if (name === 'password') {
            setPassword(value);
            passwordCheckHandler(value, confirmPassword);
        } else {
            setConfirmPassword(value);
            passwordCheckHandler(password, value);
        }
    }

    const passwordCheckHandler = (password, confirmPassword) => {
        const passwordRegex = /^[a-z\d!@*&-_]{8,16}$/;
        if (password === '') {
            setPasswordError('비밀번호: 필수 정보입니다.');
            return false;
        } else if (!passwordRegex.test(password)) {
            setPasswordError('비밀번호는 8~16자의 영소문자, 숫자, "!@*&-_"등 특수기호만 입력 가능합니다');
            return false;
        } else if (confirmPassword === '' || password !== confirmPassword) {
            setConfirmError('비밀번호가 일치하지 않습니다.');
            return false;
        } else {
            setPasswordError('');
            setConfirmError('');
            return true;
        }
    }

    const onChangeEmailHandler = (e) => {
        const emailValue = e.target.value;
        setEmail(emailValue);
    };

    const onChangePhoneNumberHandler = (e) => {
        const phoneValue = e.target.value;
        setPhoneNumber(phoneValue);
    };

    const sendVerificationCode = () => {
        // 여기서는 간단히 콘솔에 로그를 출력하는 대신에 실제로는 서버로 요청을 보내서 인증 코드를 발송합니다.
        console.log(`Verification code sent to ${phoneNumber}`);
    };

    const verifyCode = () => {
        // 여기서는 간단히 인증 코드가 일치하는지 확인하는 예제를 제공합니다.
        if (verificationCode === '1234') { // 실제로는 서버와의 통신을 통해 인증 코드를 검증합니다.
            setIsVerified(true);
            setVerificationError('');
        } else {
            setIsVerified(false);
            setVerificationError('인증 코드가 일치하지 않습니다.');
        }
    };

    const completeHandler = (data) => {
        const { address, zonecode } = data;
        setZonecode(zonecode);
        setAddress(address);
    };

    const closeHandler = (state) => {
        if (state === 'FORCE_CLOSE' || state === 'COMPLETE_CLOSE') {
            setIsOpen(false);
        }
    };

    const toggleHandler = () => {
        setIsOpen((prevOpenState) => !prevOpenState);
    };

    const inputChangeHandler = (event) => {
        setDetailedAddress(event.target.value);
    };


    const signupHandler = async (e) => {
        e.preventDefault();

        const isIdValid = await idCheckHandler(id);
        const isPasswordValid = passwordCheckHandler(password, confirmPassword);
        const isNameValid = nameCheckHandler(name);

        if (!isIdValid || !isPasswordValid || !isNameValid) {
            return;
        }

        nextPage(e);

        // 아이디, 비밀번호 유효성 검사 등을 수행
        try {
            const response = await axios.post('http://localhost:8080/api/auth/signUp',
                {
                    name,
                    nickName,
                    id,
                    idNumber,
                    password,
                    confirmPassword,
                    email,
                    address,
                    detailedAddress,
                    phoneNumber
                });
            console.log('Signup Response:', response); // Log the response
            if (response.data.result) {
                setOpenModal(true);
            } else {
                setShow(true);
                // alert('회원가입에 실패했습니다. 다시 시도해주세요.');
            }
        } catch (error) {
            setShow(true);
            // alert('회원가입에 실패했습니다. 다시 시도해주세요.');
            console.error('회원가입 에러:', error);
        }
    };

    const handleCheckboxChange = (event) => {
        const { id, checked } = event.target;
        setTermsChecked(prevState => ({
            ...prevState,
            [id]: checked
        }));
    };

    const nextPage = (event) => {
        event.preventDefault();

        if (page === 1 && !termsChecked) {
                setShow(true);
                return;
        } 
        
        if (page === 2 
            && !nameCheckHandler(name) 
            && phoneNumber === '' 
            && !isVerified) {
            
        }
        setPage(page + 1);
    };

    const prevPage = (event) => {
        event.preventDefault();
        setPage(page - 1);
    }

    const handleCloseModal = () => {
        setOpenModal(false);
        navigate('/')
    };

    return (
        <Container className='join'>
            {page === 1 && (
                <Form className='terms_form' onSubmit={nextPage}>
                    <Terms handleCheckboxChange={handleCheckboxChange} termsChecked={termsChecked} />
                    <div style={{ display: 'flex', marginLeft: '80px', marginBottom: '10px', justifyContent: 'center' }}>
                        <Button variant="primary" type="submit">다음</Button>
                    </div>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>약관 동의</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>필수 약관에 동의하셔야 합니다.</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                확인
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Form>
            )}
            {page === 2 && (
                <Form className='form' onSubmit={nextPage}>
                    <Form.Group className="mb-3">
                        <input
                            onChange={onChangeNameHandler}
                            type="text"
                            id='name'
                            name='name'
                            value={name}
                            theme='underLine'
                            maxLength={5}
                            required
                        />
                        <label>성함</label>
                        <span></span>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <input
                            onChange={onChangeIdNumberHandler}
                            type="text"
                            id='idNumber'
                            name='idNuber'
                            value={idNumber}
                            theme='underLine'
                            maxLength={8}
                            required
                        />
                        <label>주민등록번호</label>
                        <span></span>
                    </Form.Group>

                    <div className='phoneNumber'>
                        <div className='SMS'>
                            <Form.Group className="mb-3">
                                <input
                                    onChange={onChangePhoneNumberHandler}
                                    type="text"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={phoneNumber}
                                    required
                                />
                                <label>휴대전화번호</label>
                                <span></span>
                            </Form.Group>
                            <div className='join-find-item'><Button variant='light' onClick={sendVerificationCode}>인증 번호 전송</Button></div>
                        </div>

                        <div className='phone-number-check'>
                            <Form.Group className="mb-3">
                                <input
                                    onChange={(e) => setVerificationCode(e.target.value)}
                                    type="text"
                                    id="verificationCode"
                                    name="verificationCode"
                                    value={verificationCode}
                                    required
                                />
                                <label>인증 번호</label>
                                <span></span>
                            </Form.Group>
                            <div className='join-find-item'><Button variant='light' onClick={verifyCode}>인증</Button></div>
                        </div>
                    </div>
                    <div className='error'>
                        <div>{nameError && <small>{nameError}</small>}</div>
                        <div>{idNumberError && <small>{idNumberError}</small>}</div>
                        <div>{phoneError && <small className="text-danger">{phoneError}</small>}</div>
                        <div>{verificationError && <small className="text-danger">{verificationError}</small>}</div>
                    </div>
                    <div className='form-btn-box'>
                        <Button variant="danger" onClick={prevPage}>이전</Button>
                        <Button variant="primary" type="submit">다음</Button>
                    </div>
                </Form>
            )}

            {page === 3 && (
                <Form className='form' onSubmit={signupHandler}>
                    <Form.Group className="mb-3">
                        <input
                            onChange={onChangeNickNameHandler}
                            type="text"
                            id='nickName'
                            name='nickName'
                            value={nickName}
                            theme='underLine'
                            maxLength={5}
                            required
                        />
                        <label>닉네임</label>
                        <span></span>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <input
                            onChange={onChangeIdHandler}
                            type="text"
                            id='id'
                            name='id'
                            value={id}
                            theme='underLine'
                            maxLength={10}
                            required
                        />
                        <label>아이디</label>
                        <span></span>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <input
                            onChange={onChangePasswordHandler}
                            type="password"
                            id='password'
                            name='password'
                            value={password}
                            theme='underLine'
                            maxLength={16}
                            required
                        />
                        <label>비밀번호</label>
                        <span></span>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <input
                            onChange={onChangePasswordHandler}
                            type="password"
                            id='confirm'
                            name='confirm'
                            value={confirmPassword}
                            theme='underLine'
                            maxLength={16}
                            required
                        />
                        <label>비밀번호 확인</label>
                        <span></span>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <input
                            onChange={onChangeEmailHandler}
                            type="text"
                            id='email'
                            name='email'
                            value={email}
                            theme='underLine'
                            required
                        />
                        <label>이메일</label>
                        <span></span>
                    </Form.Group>

                    <div>
                        <div className='address'>
                            <Form.Group className="mb-3">
                                <input
                                    placeholder='주소 찾기 클릭'
                                    type="text"
                                    readOnly
                                    required
                                />
                            </Form.Group>
                            <div className='join-find-item'>
                                <Button
                                    variant='light'
                                    type="button"
                                    onClick={toggleHandler}
                                >
                                    주소 찾기
                                </Button>
                            </div>
                            {isOpen && (
                                <div className='postmodal'>
                                    <DaumPostcode
                                        onComplete={completeHandler}
                                        onClose={closeHandler}
                                    />
                                </div>
                            )}
                        </div>
                        <Form.Group className="mb-3" style={{ marginTop: '0'}}>
                            <div style={{ textAlign: 'left', marginBottom: '40px' }}>(우편번호: {zonecode}) {address}</div>
                            <input
                                type='text'
                                value={detailedAddress}
                                onChange={inputChangeHandler}
                                required
                            />
                            <label>나머지 주소</label>
                            <span></span>
                        </Form.Group>
                    </div>

                    <div className='error'>
                        <div>{idError && <small>{idError}</small>}</div>
                        <div>{passwordError && <small>{passwordError}</small>}</div>
                        <div>{confirmError && <small>{confirmError}</small>}</div>
                        <div>{emailError && <small>{emailError}</small>}</div>
                    </div>

                    <div className='form-btn-box'>
                        <Button variant="danger" onClick={prevPage}>이전</Button>
                        <Button variant="primary" type="submit">회원가입</Button>
                    </div>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>회원가입 실패</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>회원가입에 실패했습니다. 다시 시도해 주십시오.</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                확인
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Form>
            )}
            <SignupModal show={openModal} handleClose={handleCloseModal} />
        </Container>
    )
}

export default Join