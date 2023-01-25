import { stripBasename } from '@remix-run/router';
import { useState } from 'react';
import './Login.css';

export function Login() {
  const [Name, setName] = useState('');
  const [Password, setPassword] = useState('');

  const LoggaIn = (e: any) => {
    e.preventDefault();
    localStorage.setItem(Name, Password);
  };

  return (
    <div id="Login">
      <form onSubmit={LoggaIn}>
        <label>Namn:</label>
        <input
          type="text"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Lössenord:</label>
        <input
          type="text"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
