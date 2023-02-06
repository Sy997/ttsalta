import React, {useState, useEffect} from 'react'
import Navbardb from '../navbar/Navbardb'
import Avatar from '../../imgs/avatar.png'
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms'
import "./updatedevice.scss"
import { db } from '../../firebase'
import { collection, Collection, getDoc } from 'firebase/firestore'

const Updatedevice = () => {
    const [device, setDevice] = useState('')
    const deviceCollection = collection(db, 'devices')

    useEffect(() => {
        const getDevice = async () => {
            const data = await getDoc(deviceCollection)
            console.log(data)
        }

        getDevice()
    }, [])

    const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="devicesup">
        <div style={{position: 'fixed'}} className='navup'>
            <Navbardb />
        </div>
        <div className='mainup'>
            <div className='headup'>
                <h3>Thiết bị {`>`} <a style={{textDecoration: 'none', color: 'black'}} href='./devices'>Danh sách thiết bị</a> {`>`} <span style={{color: 'orange'}}>Thêm thiết bị</span></h3>
                <div className='infoup'>
                    <AccessAlarmsIcon className="alertup" />
                    <div className='nameup'>
                        <img src={Avatar} alt="" />
                        <p>Xin chào <br />
                        <strong>Phạm Hoàng Sỹ</strong></p>
                    </div>
                </div>                
            </div>
            <div className='fieldsup'>
                <h3 style={{color: 'orange'}}>Quản lý thiết bị</h3>
                <form className='formup'>
                    <h4>Thông tin thiết bị</h4>
                    <div className='fieldup'>                      
                        <div className='item item1'>
                            <label>Mã thiết bị: *</label>
                            <input type="text" placeholder='Nhập mã thiết bị' /> 
                        </div>
                        <div className='item item2'>
                            <label>Loại thiết bị: *</label>
                            <select style={{height: '33px'}}>
                                <option>Kiosk</option>
                                <option>Display Couter</option>
                            </select>
                        </div>
                        <div className='item item3'>
                            <label>Tên thiết bị: *</label>
                            <input type="text" placeholder='Nhập tên thiết bị' /> 
                        </div>
                        <div className='item item4'>
                            <label>Tên đăng nhập: *</label>
                            <input type="text" placeholder='Nhập tài khoản' /> 
                        </div>
                        <div className='item item5'>
                            <label>Địa chỉ IP: *</label>
                            <input type="text" placeholder='Nhập địa chỉ IP' /> 
                        </div>
                        <div className='item item6'>
                            <label>Mật khẩu: *</label>
                            <input type="text" placeholder='Nhập mật khẩu' /> 
                        </div>                       
                        <div className='item item7'>
                            <label>Dịch vụ sử dụng: *</label>
                            <input type="text" placeholder='Nhập dịch vụ sử dụng' /> 
                            <p>* Là trường thông tin bắt buộc</p>
                        </div>
                    </div>
                    <div className="buttonup">
                        <button type='reset'>Hủy bỏ</button>
                        <button type='submit' style={{background: 'orange'}}>Cập nhật</button>
                    </div>
                </form>
            </div>
        </div>
        
    </div>
  )
}

export default Updatedevice
