import { useState } from 'react'
import './App.css'

import { Button, Container, Card, Row, Col } from 'react-bootstrap';


const App = () => {
  const [expression, setExpression] = useState('');
  
  const handleClick = (text: string) => {
    if ((text) === '=') {
      setExpression(eval(expression).toString())
    } else if (text === 'C') {
      setExpression('');
    } else {
      setExpression((prev) => prev + text);
    }
  }

  const renderButton = (text: string, type: 'number' | 'operator' | 'control') => (
    <button className={type} onClick={() => handleClick(text)}>{text}</button>
  );
  
  
  return (
    <Container className="text-center mt-4">
      <h1>電卓アプリ <br /> React,Ts,Bootstrap</h1>
      <div id="result">{expression || '0'}</div>
      <Card>
        <Row>
          <Col>{renderButton('+', 'operator')}</Col>
          <Col >{renderButton('-', 'operator')}</Col>
          <Col >{renderButton('*', 'operator')}</Col>
          <Col >{renderButton('/', 'operator')}</Col>
        </Row>
        <Row>
          <Col >{renderButton('1', 'number')}</Col>
          <Col >{renderButton('2', 'number')}</Col>
          <Col >{renderButton('3', 'number')}</Col>
          <Col >{renderButton('=', 'operator')}</Col>
        </Row>
        <Row>
          <Col >{renderButton('4', 'number')}</Col>
          <Col >{renderButton('5', 'number')}</Col>
          <Col >{renderButton('6', 'number')}</Col>
          <Col >{renderButton('C', 'control')}</Col>
        </Row>
        <Row>
          <Col >{renderButton('7', 'number')}</Col>
          <Col >{renderButton('8', 'number')}</Col>
          <Col >{renderButton('9', 'number')}</Col>
          <Col >{renderButton('0', 'number')}</Col>
        </Row>
      </Card>
    </Container>
  );
}


export default App;

