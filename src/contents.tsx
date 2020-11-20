import React from 'react';
import ReactDOM from 'react-dom';

import './contents.css';

const Main = () => {
  return <div>App</div>;
};

chrome.runtime.onMessage.addListener(function (request, _sender, sendResponse) {
  console.log(request.message);
  sendResponse('返事');
});

const app = document.createElement('div');
app.id = 'my-extension-root';
document.body.appendChild(app);
ReactDOM.render(<Main />, app);
