import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import ReorderIcon from '@mui/icons-material/Reorder';
import SummarizeIcon from '@mui/icons-material/Summarize';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import LogoutIcon from '@mui/icons-material/Logout';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { getAuth, signOut } from "firebase/auth";
import logo from '../../imgs/Media-logo.png'
import { useNavigate } from 'react-router-dom'
import "./navbardb.scss"
const Navbardb = () => {
  const navigate = useNavigate()
  const auth = getAuth();

  const handleLogout = (e) => {

    e.preventDefault()
    signOut(auth).then((e) => {
      console.log(e)
      // Sign-out successful.
      if(auth) {
        navigate('/login')
      }
    }).catch((error) => {
      alert("Log out không thành công!!!")
    });
  }
  return (
    <div className='navbardb'>
        <div className='logonavbar'>
            <img src={logo} alt="logo" />
        </div>
        <div className='navbarul'>
            <span><DashboardIcon style={{marginRight: '0.5rem'}} /> <a href='/'>Dashboard</a></span>
            <span><ImportantDevicesIcon style={{marginRight: '0.5rem'}} /> <a href='/devices'>Thiết bị</a></span>
            <span><DesignServicesIcon style={{marginRight: '0.5rem'}} /> <a href="/services"
            >Dịch vụ</a></span>
            <span><ReorderIcon style={{marginRight: '0.5rem'}} /> <a href='/indexprovide'>Cấp số</a></span>
            <span><SummarizeIcon style={{marginRight: '0.5rem'}} /> <a href='/report'>Báo cáo</a></span>
            <span className='handledrop'><SettingsApplicationsIcon style={{marginRight: '0.5rem'}} /> Cài đặt hệ thống <MoreVertIcon style={{ marginLeft: '1rem' }} /></span>
            <ul className='dropdown'>
              <li><a href='/managerole'>Quản lý vai trò</a></li>
              <li><a href='/manageaccount'>Quản lý tài khoản</a></li>
              <li><a href='/diaryuser'>Quản lý người dùng</a></li>
            </ul>
            <button className='buttonnavbar' onClick={handleLogout}><LogoutIcon /> Đăng xuất</button>
        </div>
    </div>
  )
}

export default Navbardb
