import { redirect, stripBasename } from '@remix-run/router';
import { useState } from 'react';
import { User } from 'react-feather';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export function Login() {
  const [Name, setName] = useState('');
  const [Password, setPassword] = useState('');

  const LoggaIn = (e: any) => {
    const User = {
      id: 3,
      name: Name,
      password: Password,
    };
    const Users = [
      {
        id: 1,
        name: 'Anton',
        password: 'mam',
      },
      {
        id: 2,
        name: 'Jonas',
        password: '123',
      },
    ];
    e.preventDefault();

    //hittar i local storage
    localStorage.setItem('User', JSON.stringify(Users));

    // hämtat localStorage
    var getLocalStorageId = JSON.parse(localStorage.getItem('User') || '[]');

    // inloggning
    if (User.name === 'Anton' && User.password === '123') {
      console.log('cool');
      localStorage.setItem('userId', JSON.stringify(User.id));
      window.location.replace('/');
    } else {
      console.log('not cool');
      return (
        <>
          <p>Username or Password not found</p>
        </>
      );
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
          type="password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input className="btn" type="submit" />
      </form>
    </div>
  );
}
