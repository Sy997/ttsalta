import React, {useState, useEffect} from 'react'
import './detailsservice.scss'
import Navbardb from '../navbar/Navbardb'
import Avatar from '../../imgs/avatar.png'
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms'
import { db } from '../../firebase'
import { collection, doc, getDocs } from 'firebase/firestore'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { DataGrid } from '@mui/x-data-grid';
import EditNotificationsIcon from '@mui/icons-material/EditNotifications';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';

const columns = [
    { field: 'id', headerName: 'Số thứ tự', width: 250 },
    { field: 'status', headerName: 'Trạng thái hoạt động', width: 350 },
  ];
  
  const rows = [
    { id: 1, status: 'Hoạt động',},
    { id: 2, status: 'Hoạt động',},
    { id: 3, status: 'Hoạt động',},
    { id: 4, status: 'Hoạt động',},
    { id: 5, status: 'Hoạt động',},
    { id: 6, status: 'Hoạt động',},
    { id: 7, status: 'Hoạt động',},
    { id: 8, status: 'Hoạt động',},
    { id: 9, status: 'Hoạt động',},
  ];

const Detailsservice = () => {

    const [value, setValue] = useState([null, null]);
    const collectionSer = collection(db, 'service')
    const [service, getService] = useState([])

    useEffect(() => {
        const fetch = async () => {
            const data = await getDocs(collectionSer)
            getService(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }

        fetch()
    }, [])

  return (
    <div className='detailsserv'>
      <div className='navdetails'>
            <Navbardb />
        </div>
        <div className='maindetails'>
            <div className='headdetails'>
                <h3>Thiết bị {`>`} <a style={{textDecoration: 'none', color: 'black'}} href='./devices'>Danh sách thiết bị</a> {`>`} <span style={{color: 'orange'}}>Chi tiết</span></h3>
                <div className='infodetails'>
                    <AccessAlarmsIcon className="alertdetails" />
                    <div className='namedetails'>
                        <img src={Avatar} alt="" />
                        <p>Xin chào <br />
                        <strong>Phạm Hoàng Sỹ</strong></p>
                    </div>
                </div>                
            </div>
            <div className='bodydetails'>
                <h3>Quản lý dịch vụ</h3>
                <div className='leftright'>
                <div className='leftdetail'>
                                     
                    <div>
                        <h3>Thông tin dịch vụ</h3>
                        {service.map((serv, key) => (
                            <div key={key}>
                                <p>Mã dịch vụ: {serv.code_service}</p>
                                <p>Tên dịch vụ: {serv.name_service}</p>
                                <p>Mô tả: {serv.descr}</p>
                            </div>
                        ))}
                        <div>
                            <h3>Quy tắc cấp số</h3>
                            <div className='incredetail in1'>
                                <label>Tăng tự động</label>
                                <input className='input1' type="number" name="increase" defaultValue="000" />
                                <span>đến</span>
                                <input className='input2' type="number" name="number" defaultValue="1000"/>
                            </div>
                            <div className='incredetail in2'>                                
                                <label>Prefix</label>
                                <input type="number" name="number"/>
                            </div>
                        </div>

                        <div>
                            <p>Reset mỗi ngày</p>
                            <p>Ví dụ: 201 - 2001</p>
                        </div>
                    </div>                    
                </div>
                <div className='rightdetail'>
                    <div className='headline'>
                        <div className="status">
                            <label>Trạng thái</label>
                            <br />
                            <select>
                                <option>Tất cả</option>
                                <option>Đã hoàn thành</option>
                                <option>Đã thực hiện</option>
                                <option>Vắng</option>
                            </select>
                        </div>
                        <div className='timeline'>
                            <label>Chọn thời gian</label>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateRangePicker
                                label="Advanced keyboard"
                                value={value}
                                onChange={(newValue) => setValue(newValue)}
                                renderInput={(startProps, endProps) => (
                                <React.Fragment>
                                    <input className="input" ref={startProps.inputRef} {...startProps.inputProps} />
                                    <Box sx={{ mx: 1 }}> to </Box>
                                    <input className="input" ref={endProps.inputRef} {...endProps.inputProps} />
                                </React.Fragment>
                                )}
                            />
                            </LocalizationProvider>
                        </div>
                        <div className='search'>
                            <label>Từ khóa</label>                   
                            <Paper
                                className="searchdetail"
                                component="form"
                                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300 }}
                            >
                                <InputBase
                                    sx={{ ml: 1, flex: 1 }}
                                    placeholder="Nhập từ khóa..."
                                    inputProps={{ 'aria-label': 'Nhập từ khóa...' }}
                                />
                                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                            </Paper>
                        </div>                    
                    </div>
                    <div className='tabdetail'>
                        <DataGrid
                            className='data'
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[2]}
                        />
                    </div>
                    </div>
                    <div className='buttonup'>
                        <a href='#'><EditNotificationsIcon /> <span>Cập nhật danh sách</span></a>
                        <a className='a2' href='#'><ReplyAllIcon /> <span>Quay lại</span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Detailsservice
