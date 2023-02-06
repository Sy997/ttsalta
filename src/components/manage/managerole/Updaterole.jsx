import React from 'react'
import Navbardb from '../../navbar/Navbardb'
import Avatar from '../../../imgs/avatar.png'
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms'
import "./updaterole.scss"

const Updaterole = () => {
  return (
    <div className="roleup">
        <div style={{position: 'fixed'}} className='navroleup'>
            <Navbardb />
        </div>
        <div className='mainroleup'>
            <div className='headroleup'>
                <h3>Cài đặt hệ thống {`>`} <a style={{textDecoration: 'none', color: 'black'}} href='./devices'>Quản lý vai trò</a> {`>`} <span style={{color: 'orange'}}>Thêm vai trò</span></h3>
                <div className='inforoleup'>
                    <AccessAlarmsIcon className="alertroleup" />
                    <div className='nameroleup'>
                        <img src={Avatar} alt="" />
                        <p>Xin chào <br />
                        <strong>Phạm Hoàng Sỹ</strong></p>
                    </div>
                </div>                
            </div>
            <div className='bodyroleup'>
                <h3>Danh sách vai trò</h3>
                <div className='fields'>
                    <form className='forms'>
                        <div className="fieldbac">
                            <h4>Thông tin vai trò</h4>
                            <div className='field'>
                                <div className="left">
                                    <div>
                                        <label>Tên vai trò *</label>
                                        <br />
                                        <input type="text" name="text" placeholder='Nhập tên vai trò' />
                                    </div>
                                    <div className="descrb">
                                        <label>Mô tả:</label>
                                        <br />
                                        <textarea></textarea>
                                    </div>
                                    * Là trường thông tin bắt buộc
                                </div>
                                <div className="right">
                                    <p>Phân quyền chức năng</p>
                                    <div className="func">
                                        <div>
                                            <strong>Nhóm chức năng A</strong><br />
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                            <label for="vehicle1"> Tất cả</label><br />
                                            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                                            <label for="vehicle2"> Chức năng X</label><br />
                                            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                                            <label for="vehicle3"> Chức năng Y</label><br />
                                            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                                            <label for="vehicle3"> Chức năng Z</label><br />
                                        </div>
                                        <div>
                                            <strong>Nhóm chức năng B</strong><br />
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                            <label for="vehicle1"> Tất cả</label><br />
                                            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                                            <label for="vehicle2"> Chức năng X</label><br />
                                            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                                            <label for="vehicle3"> Chức năng Y</label><br />
                                            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                                            <label for="vehicle3"> Chức năng Z</label><br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='buttonuprole'>
                            <button type="reset">Hủy bỏ</button>
                            <button style={{ background: 'orange' }} type='submit'>Thêm</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Updaterole