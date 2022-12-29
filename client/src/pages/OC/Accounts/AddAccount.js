import React, { useRef,useState } from 'react';
// Import Components
import { Card, Form, Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export function AddAccount() {

    const username = useRef();
    const email = useRef();
    const password = useRef();
    const confirmedPassword = useRef();
    const [modal, setModal] = useState(false);
    const handleSubmit = async (e) => {

        console.log("click");
        e.preventDefault();
        let role = "";
        console.log(username.current.value.substring(0, 3))
        switch (username.current.value.substring(0, 3)) {
            case "Fac":
                role = 'factory';
                break;
            case "Sto":
                role = 'store';
                break;
            case "SeC":
                role = "service center";
                break;
            case "OpC":
                role = 'admin';
                break;

        }
        console.log(role)
        const user = {
            username: username.current.value,
            email: email.current.value,
            password: password.current.value,
            role: role
        };

        console.log(user)
        // if (password.current.value == confirmedPassword.current.value) {
        //     dispatch(SignUpStart());
        //     try {
        //         const res = await axios.post("http://localhost:8080/api/auth/signup", user);
        //         setModal(true);
        //         // navigate("/signin")
        //     }
        //     catch (err) {
        //         console.log(err);
        //     }
        // }



    }


    return (
        <div>
            <Modal
                show={modal}
                onHide={() => {
                    setModal(false);
                    
                }}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Reponse</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Waiting for accept.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={() => {
                        setModal(false);
                        
                    }}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
            <div className="page-header">
                <Row>
                    <Col sm={12}>
                        <h3 className="page-title">Add Account</h3>

                    </Col>
                </Row>
            </div>

            <Row>
                <Col sm={12}>
                    <Card>
                        <Card.Body>
                            <Form>
                                <Row>
                                    <Col sm={12}>
                                        <h5 className="form-title"><span>Account Information</span></h5>
                                    </Col>

                                    <Col xs={12} sm={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Username</Form.Label>
                                            <Form.Control type="text" ref={username} />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" ref={password} />
                                        </Form.Group>
                                    </Col>

                                    <Col xs={12} sm={6} >
                                        <Form.Group className="mb-3">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="text" ref={email} />
                                        </Form.Group >
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Confirm Password</Form.Label>
                                            <Form.Control type="text" ref={confirmedPassword} />
                                        </Form.Group>
                                    </Col>

                                    <Col xs={12}>
                                        <Button variant="primary" type="submit" onClick={handleSubmit}>
                                            Submit
                                        </Button>
                                    </Col>
                                </Row>

                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )

}

