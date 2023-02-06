import React, { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import auth from '../../firebase'
import './login.scss'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { useContext } from 'react'
import { useUserContext } from '../../context/AuthContext'

const Login = () => {
    const [error, setError] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {SigninUser} = useUserContext()
    const navigate = useNavigate()

    //const { dispatch } = useContext(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
            console.log(res)
            navigate('/')
        })
        .catch((err) => setError(err.code))
        .finally(() => setError(true));
        
    }
  return (
    <div className='login'>
        <div className='leftlogin'>
            <form className='form' onSubmit={handleLogin}>
                <h1>Alta Software</h1>
                <div className='inputs'>
                    <div className='input'>
                        <label className='label1'>Email *</label>
                        <input type="email" placeholder="email..." onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='input'>
                        <label className='label2'>Mật khẩu *</label>
                        <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
                    </div>                   
                    <a className='fglogin' href='#'>Quên mật khẩu?</a>
                    <button className='buttonlogin' type='submit'>Login</button>
                {error && <span>Wrong email or password!</span>}
                </div>
            </form>
        </div>
        <div className='rightlogin'></div>
    </div>
  )
}

export default Login