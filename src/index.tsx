import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { Form, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [layoutParams, setLayoutParams] = useState<{
    width: string;
    max_width: string;
  }>({ width: '', max_width: '' });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      console.log(tabs);
      tabs[0] &&
        tabs[0].id &&
        chrome.tabs.sendMessage(tabs[0].id, { layout: layoutParams });
    });
  };

  const changeMaxWidthValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLayoutParams({
      ...layoutParams,
      max_width: e.target.value,
    });
  };

  const changeWidthValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLayoutParams({
      ...layoutParams,
      width: e.target.value,
    });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='formMaxWidth'>
          <Form.Label>max-width</Form.Label>
          <Form.Control
            type='text'
            name='max-width'
            placeholder='1200px'
            onChange={changeMaxWidthValue}
            value={layoutParams.max_width}
          />
        </Form.Group>

        <Form.Group controlId='formWidth'>
          <Form.Label>width</Form.Label>
          <Form.Control
            type='text'
            placeholder='90%'
            name='width'
            onChange={changeWidthValue}
            value={layoutParams.width}
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
