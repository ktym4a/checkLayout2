import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { Form, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [widthParam, setWidthParam] = useState<string>('');
  const [maxWidthParam, setMaxWidthParam] = useState<string>('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      console.log(tabs);
      tabs[0] &&
        tabs[0].id &&
        chrome.tabs.sendMessage(tabs[0].id, { widthParam, maxWidthParam });
    });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <input
          type='text'
          name='max_width_param'
          placeholder='1200px'
          onChange={(e) => setMaxWidthParam(e.target.value)}
          value={maxWidthParam}
        />

        <input
          type='text'
          placeholder='90%'
          name='width_param'
          onChange={(e) => setWidthParam(e.target.value)}
          value={widthParam}
        />

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
