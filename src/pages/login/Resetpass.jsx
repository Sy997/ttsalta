import React, { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, } from 'firebase/auth'
import auth from '../../firebase'
import './login.scss'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { useContext } from 'react'
import { useUserContext } from '../../context/AuthContext'
import './resetpass.scss'

const Resetpass = () => {
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
            navigate('/homepage')
        })
        .catch((err) => setError(err.code))
        .finally(() => setError(true));
        
    }
  return (
    <div className='resetpass'>
        <div className='leftreset'>
            <h1>Alta Media</h1>
            <form className='formreset'>
                <h3>Đặt lại mật khẩu</h3>
                <div className='fieldreset'>
                    <label>Mật khẩu *</label>
                    <input type="email" name="email" required />
                </div>
                <div className='fieldreset'>
                    <label>Nhập lại mật khẩu *</label>
                    <input type="email" name="email" required />
                </div>
                <div className="buttonreset">
                    <button style={{background: 'orange'}} type="submit">Xác nhận</button>
                </div>
            </form>
        </div>
        <div className='rightreset'></div>
    </div>
  )
}

export default Resetpass