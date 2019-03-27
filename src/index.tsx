import React, { useState } from 'react';
import * as ReactDOM from 'react-dom';

interface Props {
  name: string;
}

const App: React.FC = () => {
  return (
    <React.Fragment>
      <h3>
        hazesoft
      </h3>
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

