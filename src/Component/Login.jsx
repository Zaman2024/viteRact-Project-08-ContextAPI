import React, {useContext, useState} from 'react';
import UserContext from '../Context/UserContext';

const Login = () => {
  const [username, setUsername] = useState ('');
  const [password, setPassword] = useState ('');
  const {setUser} = useContext (UserContext);

  const handleSubmit = e => {
    e.preventDefault ();

    setUser ({username, password});
  };

  return (
    <div className="flex flex-col justify-center items-center gap-3 text-white">
      <h1>Login</h1>
      <input
        type="text"
        value={username}
        onChange={e => setUsername (e.target.value)}
        placeholder="Username"
        className='text-black px-2 rounded-lg bg-white/25'
      />
      <input
        type="text"
        value={password}
        onChange={e => setPassword (e.target.value)}
        placeholder="Password"
        className='text-black px-2 rounded-lg bg-white/25'
      />

      <button className='bg-yellow-700 text-black px-3 py-1 rounded-xl' onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;
