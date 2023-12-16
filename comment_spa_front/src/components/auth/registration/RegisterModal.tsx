import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

interface RegisterModalProps {
    isOpen: boolean;
    onClose: () => void;
    onRegister: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose, onRegister }) => {
    const [registerData, setRegisterData] = useState({ name: '', email: '', password: '' });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setRegisterData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Добавьте логику регистрации
        onRegister();
        onClose();
    };

    return (
        <Modal show={isOpen} onHide={onClose} id="modalRegisterForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <Modal.Dialog role="document">
                <Modal.Body>
                    <Modal.Header closeButton>
                        <Modal.Title className="w-100 font-weight-bold">Register</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formBasicName">
                                <Form.Label>Your name</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" name="name" value={registerData.name} onChange={handleInputChange} />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Your email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="email" value={registerData.email} onChange={handleInputChange} />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Your password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" value={registerData.password} onChange={handleInputChange} />
                            </Form.Group>

                            <Button variant="default" type="submit">
                                Register
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal.Body>
            </Modal.Dialog>
        </Modal>
    );
};

export default RegisterModal;
