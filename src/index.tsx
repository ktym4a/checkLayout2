import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

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

  return <div>App</div>;
};

ReactDOM.render(<App />, document.getElementById('root'));
