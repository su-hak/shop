import React from 'react'
import { Modal, Button } from 'react-bootstrap'


const SignupModal = ({ show, handleClose }) => (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>회원가입 완료</Modal.Title>
        </Modal.Header>
        <Modal.Body>회원가입이 완료되었습니다. 환영합니다!</Modal.Body>
        <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
                닫기
            </Button>
        </Modal.Footer>
    </Modal>
)

export default SignupModal