import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const{setUser} = useContext(UserContext);


    const handleSubmit = (e) => {
        e.preventDefault();

        setUser({username, password})

    }
    
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1>Login</h1>
        <input type='text'
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        placeholder='Username'
         />
         <input type='text'
         value={password}
         onChange={(e)=>setPassword(e.target.value)}
         placeholder='Password'
         />

        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
