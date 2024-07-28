import React, { useState } from 'react';
import ChatWindow from './ChatWindow';
import ChatSummary from './ChatSummary';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/LiveChat.scss';

const LiveChat = () => {
    const [messages, setMessages] = useState([]);

    const addMessage = (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
    };

    return (
        <Container className="live-chat">
            <Row>
                <Col>
                    <h1>Live Chat with Summary</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ChatWindow addMessage={addMessage} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <ChatSummary messages={messages} />
                </Col>
            </Row>
        </Container>
    );
};

export default LiveChat;
