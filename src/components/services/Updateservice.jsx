import React from 'react'
import './updateservice.scss'
import Navbardb from '../navbar/Navbardb'
import Avatar from '../../imgs/avatar.png'
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms'

const Updateservice = () => {
  return (
    <div className='updateservice'>
        <div className='navupser'>
            <Navbardb />
        </div>
        <div className='mainupser'>
            <div className='headupser'>
                <h3>Thiết bị {`>`} <a style={{textDecoration: 'none', color: 'black'}} href='./devices'>Danh sách thiết bị</a> {`>`} <span style={{color: 'orange'}}>Thêm thiết bị</span></h3>
                <div className='infoupser'>
                    <AccessAlarmsIcon className="alertupser" />
                    <div className='nameupser'>
                        <img src={Avatar} alt="" />
                        <p>Xin chào <br />
                        <strong>Phạm Hoàng Sỹ</strong></p>
                    </div>
                </div>                
            </div>
            <div className='formupfields'>
                <h4>Quản lý dịch vụ</h4>
                <form className='formsup'>                   
                    <div className='fieldsupser'>
                        <h5>Thông tin dịch vụ</h5>
                        <div className='fieldser'>
                            <div className='leftupser'>
                                <div className="input">
                                    <label>Mã dịch vụ *</label>
                                    <input type="text" />
                                </div>
                                <div className="input">
                                    <label>Tên dịch vụ *</label>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className='rightupser'>
                                <label>Mô tả *</label>
                                <textarea type="text" />
                            </div>
                        </div>
                        <div className="checksupser">
                            <h5>Quy tắc cấp số</h5>
                            <div className='checkupser'>
                                <div>
                                    <input type="checkbox" id="check1" name="check2" value="Bike"/>
                                    <label for="check2"> Tăng tự động từ: </label>
                                </div>
                                <input className="numbercheck" type="number" /> <span>đến</span> <input className="numbercheck" type="number" />
                            </div>
                            <div className='checkupser'>
                                <div>
                                    <input type="checkbox" id="check2" name="check2" value="Car" />
                                    <label for="check2"> Prefix: </label>
                                </div>
                                <input className="numbercheck" type="number" />
                            </div>
                            <div className='checkupser'>
                                <div>
                                    <input type="checkbox" id="check3" name="check3" value="Boat" />
                                    <label for="check3"> Surfix: </label>
                                </div>
                                <input className="numbercheck" type="number" />
                            </div>  
                            <div>
                                <input type="checkbox" id="check4" name="check4" value="Boat" />
                                <label for="check4"> Reset mỗi ngày </label>
                            </div>                           
                        </div>
                        <p>* Là trường bắt buộc</p>
                    </div>
                    <div className='buttonupser'>
                        <button type='reset'>Hủy bỏ</button>
                        <button style={{background: 'orange'}} type='submit'>Cập nhât</button>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
  )
}

export default Updateservice