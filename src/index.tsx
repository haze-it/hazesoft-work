import React from 'react';
import * as ReactDOM from 'react-dom';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Routes />
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
