import React from 'react';
// Import Components
import {  Card, Form, Button } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export function ProductRecall() {

   
    return (
        <div>
            <div className="page-header">
                <Row>
                    <Col sm={12}>
                        <h3 className="page-title">Product Recall</h3>
                        {/* <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/students">Students</a></li>
                                <li className="breadcrumb-item active">Add Students</li>
                            </ul> */}
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
                                        <h5 className="form-title"><span>Product Recall</span></h5>
                                    </Col>

                                    <Col xs={12} sm={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Username</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" />
                                        </Form.Group>
                                    </Col>
                                    
                                    <Col xs={12} sm={6} >
                                        <Form.Group className="mb-3">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control  type="text" />
                                        </Form.Group >
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Address</Form.Label>
                                            <Form.Control  type="text" />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} sm={6} >
                                        <Form.Group className="mb-3">
                                            <Form.Label>Fax</Form.Label>
                                            <Form.Control  type="text" />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} sm={6} >
                                        <Form.Group className="mb-3">
                                            <Form.Label>Hotline</Form.Label>
                                            <Form.Control  type="text" />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12}>
                                        <Button variant="primary" type="submit">
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

