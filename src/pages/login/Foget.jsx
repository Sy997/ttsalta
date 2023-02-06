import React, { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, } from 'firebase/auth'
import auth from '../../firebase'
import './login.scss'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { useContext } from 'react'
import { useUserContext } from '../../context/AuthContext'
import './forget.scss'

const Forget = () => {
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
    <div className='forget'>
        <div className='leftforget'>
            <h1>Alta Media</h1>
            <form className='formforget'>
                <h3>Đặt lại mật khẩu</h3>
                <div className='fieldemail'>
                    <label>Vui lòng nhập email để đặt lại mật khẩu của bạn *</label>
                    <input type="email" name="email" required />
                </div>
                <div className="buttonforget">
                    <button type="reset">Hủy</button>
                    <button style={{background: 'orange'}} type="submit">Tiếp tục</button>
                </div>
            </form>
        </div>
        <div className='rightforget'></div>
    </div>
  )
}

export default Forget