import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { REGISTER_USER } from '../../../queries';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [registerUser] = useMutation(REGISTER_USER, {
    onCompleted: (data) => {
      console.log('User registered:', data);
      // Додайте код для обробки успішної реєстрації
    },
    onError: (error) => {
      console.error('Registration error:', error.message);
      // Додайте код для обробки помилок реєстрації
    },
  });

  const handleRegister = () => {
    registerUser({ variables: { username, password } });
  };

  return (
    <div>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default RegisterForm;

