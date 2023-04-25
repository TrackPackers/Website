/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import Login from '../components/AuthPage/Login';
import Register from '../components/AuthPage/Register';

function Authentication() {
  const [showLogin, setShowLogin] = useState(true);

  const handleSwitchButton = (value: boolean) => {
    setShowLogin(value);
  };

  return showLogin ? (
    <Login handleSwitchButton={handleSwitchButton} />
  ) : (
    <Register handleSwitchButton={handleSwitchButton} />
  );
}

export default Authentication;
