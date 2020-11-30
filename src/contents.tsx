import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './contents.css';

const Main = () => {
  const [widthParam, setWidthParam] = useState<string>('');
  const [maxWidthParam, setMaxWidthParam] = useState<string>('');

  chrome.runtime.onMessage.addListener(
    (request: { widthParam: string; maxWidthParam: string }, _sender) => {
      console.log(request);
      setWidthParam(request.widthParam);
      setMaxWidthParam(request.maxWidthParam);
    }
  );

  return (
    <div className='test'>
      {widthParam} px + {maxWidthParam} px
    </div>
  );
};

const app = document.createElement('div');
app.id = 'my-extension-root';
document.body.appendChild(app);
ReactDOM.render(<Main />, app);
