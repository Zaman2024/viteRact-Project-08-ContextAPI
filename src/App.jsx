import { useState } from 'react'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Component/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
        <h1 className='bg-slate-600 text-white p-5'>Zaman</h1>
        <Login/>
    </UserContextProvider>
  )
}

export default App
