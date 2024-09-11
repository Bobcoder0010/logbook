import ReactDOM from 'react-dom';
import React, { useState } from 'react';

const App = () => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Register here
      </button>
      {isOpen && <div>You have been registered to our site go through the login for further process
        </div>}
    </div>
  );
};

export default App;