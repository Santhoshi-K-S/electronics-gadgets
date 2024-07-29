import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fade from 'react-reveal/Fade';
import '../styles/ChatWindow.scss';

const socket = io('https://electronics-gadgets-serv.vercel.app');

const ChatWindow = ({ addMessage }) => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.on('message', (msg) => {
            setMessages((prevMessages) => [...prevMessages, msg]);
        });
    }, []);

    const sendMessage = () => {
        socket.emit('message', message);
        addMessage(message);
        setMessage('');
    };

    return (
        <Container className="chat-window">
            <Row className="mb-3">
                <Col>
                    <div className="chat-messages">
                        {messages.map((msg, index) => (
                            <Fade key={index}>
                                <div className="chat-message">{msg}</div>
                            </Fade>
                        ))}
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Control
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type your message here..."
                    />
                </Col>
                <Col xs="auto">
                    <Button variant="primary" onClick={sendMessage}>Send</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ChatWindow;
