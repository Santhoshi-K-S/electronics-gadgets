import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Zoom from 'react-reveal/Zoom';
import '../styles/ChatSummary.scss';

const ChatSummary = ({ messages }) => {
    return (
        <Container className="chat-summary">
            <Row>
                <Col>
                    <Zoom>
                        <h2>Chat Summary</h2>
                        <ul>
                            {messages.map((msg, index) => (
                                <li key={index}>{msg}</li>
                            ))}
                        </ul>
                    </Zoom>
                </Col>
            </Row>
        </Container>
    );
};

export default ChatSummary;
