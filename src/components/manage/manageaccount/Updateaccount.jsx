import React from 'react'
import Navbardb from '../../navbar/Navbardb'
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms'
import Avatar from '../../../imgs/avatar.png'
import './updateaccount.scss'

const Updateaccount = () => {
  return (
    <div className="accup">
        <div style={{position: 'fixed'}} className='navupacc'>
            <Navbardb />
        </div>
        <div className='mainupacc'>
            <div className='headupacc'>
                <h4>Cài đặt hệ thống  {`>`} <a style={{textDecoration: 'none', color: 'black'}} href='./devices'>Quản lý tài khoản</a> {`>`} <span style={{color: 'orange'}}>Thêm tài khoản</span></h4>
                <div className='infoupacc'>
                    <AccessAlarmsIcon className="alertupacc" />
                    <div className='nameupacc'>
                        <img src={Avatar} alt="" />
                        <p>Xin chào <br />
                        <strong>Phạm Hoàng Sỹ</strong></p>
                    </div>
                </div>                
            </div>
            <div className='bodyaccount'>
                <h3>Quản lý tài khoản</h3>
                <form className="forms">
                    <div className="fields">
                        <div className="item item1">
                            <h3>Thông tin tài khoản</h3>
                        </div>
                        <div className="item">
                            <label>Họ tên *</label>
                            <br />
                            <input type="text" placeholder='Nhập họ tên' name="name" required/>
                        </div>
                        <div className="item">
                            <label>Tên đăng nhập *</label>
                            <br />
                            <input type="text" placeholder='Nhập tên đăng nhập' name="name" required/>
                        </div>
                        <div className="item">
                            <label>Số điện thoại *</label>
                            <br />
                            <input type="number" placeholder='Nhập số điện thoại' name="Số điện thoại" required/>
                        </div>
                        <div className="item">
                            <label>Mật khẩu *</label>
                            <br />
                            <input type="password" placeholder='Nhập mật khẩu' name="Mật khẩu" required/>
                        </div>
                        <div className="item">
                            <label>Email *</label>
                            <br />
                            <input type="email" placeholder='Nhập Email' name="name" required/>
                        </div>
                        <div className="item">
                            <label>Nhập lại mật khẩu *</label>
                            <br />
                            <input type="password" placeholder='Nhập lại mật khẩu' name="password" required/>
                        </div>
                        <div className="item">
                            <label>Vai trò *</label>
                            <br />
                            <select placeholder='Chọn vai trò'>
                                <option>Tất cả</option>
                            </select>
                        </div>
                        <div className="item">
                            <label>Tình trạng *</label>
                            <br />
                            <select>
                                <option>
                                    Hoạt động
                                </option>
                            </select>
                        </div>
                        <p className="item9">* Là trường thông tin bắt buộc</p>
                    </div>
                    <div className='buttonupacc'>
                        <button type='reset'>Hủy bỏ</button>
                        <button style={{background: 'orange'}} type="submit">Thêm</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Updateaccount