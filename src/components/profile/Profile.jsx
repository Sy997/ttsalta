import React, { useState } from 'react'
import Navbardb from '../../components/navbar/Navbardb'
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms'
import Avatar from '../../imgs/avatar.png'
import './profile.scss'
import { onAuthStateChanged } from 'firebase/auth'
import auth from '../../firebase'


const Profile = () => {
  const [user, setUser] = useState("")

  const Info = onAuthStateChanged(auth, (user) => {
    if (user) {
      return setUser(user)
    }
    else {
      alert("Invalid user")
    }
  })
  console.log(user)
  return (
      <div className='profile'>
        <div className='navprofile'>
          <Navbardb />
        </div>
        <div className='mainpro'>
          <div className='headpro'>
              <h3>Thông tin cá nhân</h3>
              <div className='infopro'>
                  <AccessAlarmsIcon className="alertpro" />
                  <div className='namepro'>
                      <img src={Avatar} alt="" />
                      <p>Xin chào <br />
                      <strong>Phạm Hoàng Sỹ</strong></p>
                  </div>
              </div>                
          </div>
          <div className='bodyprofile'>
            <div className='imgprofile'>
              <img src={Avatar} alt='profile' />
              <strong>Phạm Hoàng Sỹ</strong>
            </div>
            <div className='fields'>
              <div className='field'>
                <label>Tên người dùng</label>
                <br />
                <input type="text" name="" placeholder={user.email} disabled/>
              </div>
              <div className='field'>
                <label>Tên đăng nhập</label>
                <br />
                <input type="text" name="" placeholder={user.displayName} disabled/>
              </div>
              <div className='field'>
                <label>Số điện thoại</label>
                <br />
                <input type="number" name="" placeholder='0988539062' disabled/>
              </div>
              <div className='field'>
                <label>Mật khẩu</label>
                <br />
                <input type="text" name="" placeholder="123456" disabled/>
              </div>
              <div className='field'>
                <label>Email: </label>
                <br />
                <input type="email" name="" placeholder='phamhoangsy777@gmail.com' disabled/>
              </div>
              <div className='field'>
                <label>Vai trò</label>
                <br />
                <input type="text" name="" placeholder='Quản lý' disabled/>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Profile
