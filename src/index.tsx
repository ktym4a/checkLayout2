import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Form, Button } from 'react-bootstrap';

const App = () => {
  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      console.log(tabs);
      tabs[0] &&
        tabs[0].id &&
        chrome.tabs.sendMessage(
          tabs[0].id,
          { message: '選択範囲ちょうだい' },
          (item) => console.log(item)
        );
    });
  }, []);

  return (
    <Form>
      <Form.Group controlId='formBasicEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control type='email' placeholder='Enter email' />
        <Form.Text className='text-muted'>
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId='formBasicPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control type='password' placeholder='Password' />
      </Form.Group>
      <Form.Group controlId='formBasicCheckbox'>
        <Form.Check type='checkbox' label='Check me out' />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
