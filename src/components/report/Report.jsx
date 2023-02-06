import React, { useState } from 'react'
import Navbardb from '../navbar/Navbardb'
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms'
import Avatar from '../../imgs/avatar.png'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import './report.scss'


const columns = [
    { field: 'id', headerName: 'Mã dịch vụ', width: 150 },
    { field: 'nameServices', headerName: 'Tên dịch vụ', width: 180 },
    { field: 'describe', headerName: 'Mô tả', width: 200 },
    { field: 'status', headerName: 'Trạng thái hoạt động', width: 200 },
    { field: 'detail', headerName: '', width: 100 },
    { field: 'update', headerName: '', width: 100 },
  ];
  
  const rows = [
    { id: 1, nameServices: 'Snow', describe: 'Jon', status: 'Hoạt động', detail: 'Chi tiết', update: 'Cập nhật' },
    { id: 2, nameServices: 'Lannister', describe: 'Cersei', status: 'Hoạt động', detail: 'Chi tiết', update: 'Cập nhật' },
    { id: 3, nameServices: 'Lannister', describe: 'Jaime', status: 'Hoạt động', detail: 'Chi tiết', update: 'Cập nhật' },
    { id: 4, nameServices: 'Stark', describe: 'Arya', status: 'Hoạt động', detail: 'Chi tiết', update: 'Cập nhật' },
    { id: 5, nameServices: 'Targaryen', describe: 'Daenerys', status: 'Hoạt động', detail: 'Chi tiết', update: 'Cập nhật' },
    { id: 6, nameServices: 'Melisandre', describe: null, status: 'Hoạt động', detail: 'Chi tiết', update: 'Cập nhật' },
    { id: 7, nameServices: 'Clifford', describe: 'Ferrara', status: 'Hoạt động', detail: 'Chi tiết', update: 'Cập nhật' },
    { id: 8, nameServices: 'Frances', describe: 'Rossini', status: 'Hoạt động', detail: 'Chi tiết', update: 'Cập nhật' },
    { id: 9, nameServices: 'Roxie', describe: 'Harvey', status: 'Hoạt động', detail: 'Chi tiết', update: 'Cập nhật' },
    { id: 10, nameServices: 'Snow', describe: 'Jon', status: 'Hoạt động', detail: 'Chi tiết', update: 'Cập nhật' },
    { id: 11, nameServices: 'Lannister', describe: 'Cersei', status: 'Hoạt động', detail: 'Chi tiết', update: 'Cập nhật' },
    { id: 12, nameServices: 'Lannister', describe: 'Jaime', status: 'Hoạt động', detail: 'Chi tiết', update: 'Cập nhật' },
    { id: 13, nameServices: 'Stark', describe: 'Arya', status: 'Hoạt động', detail: 'Chi tiết', update: 'Cập nhật' },
    { id: 14, nameServices: 'Targaryen', describe: 'Daenerys', status: 'Hoạt động', detail: 'Chi tiết', update: 'Cập nhật' },
    { id: 15, nameServices: 'Melisandre', describe: null, status: 'Hoạt động', detail: 'Chi tiết', update: 'Cập nhật' },
    { id: 16, nameServices: 'Clifford', describe: 'Ferrara', status: 'Hoạt động', detail: 'Chi tiết', update: 'Cập nhật' },
    { id: 17, nameServices: 'Frances', describe: 'Rossini', status: 'Hoạt động', detail: 'Chi tiết', update: 'Cập nhật' },
    { id: 18, nameServices: 'Roxie', describe: 'Harvey', status: 'Hoạt động', detail: 'Chi tiết', update: 'Cập nhật' },
  ];
const Report = () => {
    const [value, setValue] = useState([null, null]);
    
  return (
    <div className="report">
        <div className='navreport'>
            <Navbardb />
        </div>
        <div className='mainreport'>
            <div className='headreport'>
                <h3>Thiết bị {`>`} <span style={{color: 'orange'}}>Danh sách thiết bị</span></h3>
                <div className='inforeport'>
                    <AccessAlarmsIcon className="alertreport" />
                    <div className='namereport'>
                        <img src={Avatar} alt="" />
                        <p>Xin chào <br />
                        <strong>Phạm Hoàng Sỹ</strong></p>
                    </div>
                </div>                
            </div>
            <div className='bodyreport'>
                <div className='timereport'>
                    <label>Chọn thời gian</label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateRangePicker
                            label="Advanced keyboard"
                            value={value}
                            onChange={(newValue) => setValue(newValue)}
                            renderInput={(startProps, endProps) => (
                            <React.Fragment>
                                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                    <input className="input" ref={startProps.inputRef} {...startProps.inputProps} />
                                    <Box sx={{ mx: 1 }}> <ArrowRightIcon style={{marginTop: '1rem'}} /> </Box>
                                    <input className="input" ref={endProps.inputRef} {...endProps.inputProps} />
                                </div>
                            </React.Fragment>
                            )}
                        />
                    </LocalizationProvider>
                </div>
                <div className='datareport'>
                    <DataGrid
                        style={{background: 'white'}}
                        rows={rows}
                        columns={columns}
                        pageSize={8}
                        rowsPerPageOptions={[6]}
                    />
                    <a href='./updateservice'><ArrowCircleDownIcon />Tải về</a>
                </div>
            </div>
        </div>
    </div>    
  )
}

export default Report