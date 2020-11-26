import React from 'react';
import ReactDOM from 'react-dom';

import './contents.css';

const Main = () => {
  chrome.runtime.onMessage.addListener(function (request, _sender) {
    console.log(request);
  });

  return <div className='test'>App</div>;
};

const app = document.createElement('div');
app.id = 'my-extension-root';
document.body.appendChild(app);
ReactDOM.render(<Main />, app);
