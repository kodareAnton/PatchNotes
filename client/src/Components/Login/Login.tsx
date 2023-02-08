
import { useState } from 'react';
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
      localStorage.setItem('userId', User.name);
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
        <label>Name:</label>
        <input
          type="text"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Password:</label>
        <input
          type="password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input value={'Login'} className="btn" type="submit" />
      </form>
    </div>
  );
}
