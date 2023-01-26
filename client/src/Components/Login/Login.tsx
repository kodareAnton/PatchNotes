import { redirect, stripBasename } from '@remix-run/router';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export function Login() {
  const [Name, setName] = useState('');
  const [Password, setPassword] = useState('');

  const LoggaIn = (e: any) => {
    e.preventDefault();
    console.log('Username', Name);
    localStorage.setItem('Username', Name);

    var getLocalStorageId = localStorage.getItem('Username');

    if ((getLocalStorageId === '')) {
      console.log('Fail Login');
      return;
    } else {
      console.log('Login susses');
      window.location.replace('/Home');
    }
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
        <input className="btn" type="submit" />
      </form>
    </div>
  );
}
