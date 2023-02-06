import React from 'react'
import Navbardb from '../navbar/Navbardb'
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms'
import Avatar from '../../imgs/avatar.png'
import "./updateindex.scss"
import CloseIcon from '@mui/icons-material/Close';

const Updateindex = () => {

    const buttonClick = () => {
        const buttonsubmit = document.getElementById('indexprov')
        const provideupindex = document.getElementById('provideupindex')
        const randomindex = Math.floor(Math.random() * 10000) + 1

        buttonsubmit.style.display = 'block'
        const randomshow = document.getElementById('randomshow')
        randomshow.innerHTML = randomindex
    }

    const hiddenIndex = () => {
        document.getElementById('indexprov').style.display = 'none'
        
        
    }
  return (
    <div id='provideupindex' className='provideupindex'>
        <div className="navupindex">
            <Navbardb />
        </div>
        <div className='mainupindex'>
            <div className='headupindex'>
                <h3>Thiết bị {`>`} <a style={{textDecoration: 'none', color: 'black'}} href='./devices'>Danh sách thiết bị</a> {`>`} <span style={{color: 'orange'}}>Thêm thiết bị</span></h3>
                <div className='infoupindex'>
                    <AccessAlarmsIcon className="alertupindex" />
                    <div className='nameupindex'>
                        <img src={Avatar} alt="" />
                        <p>Xin chào <br />
                        <strong>Phạm Hoàng Sỹ</strong></p>
                    </div>
                </div>                
            </div>
            <div className='bodyupindex'>
                <h3>Quản lý cấp số</h3>
                <form className='forms'>
                    <h2>CẤP SỐ MỚI</h2>
                    <strong>Dịch vụ khách hàng lựa chọn</strong>
                    <select>
                        <option>Khám tim mạch</option>
                        <option>Khám sản - phụ khoa</option>
                        <option>Khám răng hàm mặt</option>
                        <option>Khám tai mũi họng</option>
                    </select>
                    <div className='buttonindex'>
                        <p type='reset'>Hủy bỏ</p>
                        <p style={{background: 'orange'}} onClick={buttonClick} id="buttonsubmit">In số</p>
                    </div>
                </form>
                <div id='indexprov' className='numberindex'>
                    <CloseIcon className='closeindex' onClick={hiddenIndex} />
                    <strong>Số thứ tự được cấp</strong>
                    <p id='randomshow'></p>
                    DV: Khám răng hàm mặt (tại quầy số 1)
                    <div className='daterange'>
                        <p>Thời gian cấp: 11:11 11/11/2022</p>
                        <p>Hạn sử dụng: 12:12 12/12/2022</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Updateindex