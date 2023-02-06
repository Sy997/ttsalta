import React from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from './features/User'

const Login = () => {

  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => dispatch(login({name: 'Pham Sy', age: 0, email: 'email@gmail.com'}))}>Click me now to login</button>
      <button onClick={() => dispatch(logout())}>Click me now to logout</button>
    </div>
  )
}

export default Login