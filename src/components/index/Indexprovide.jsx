import React, {useState} from 'react'
import Navbardb from '../navbar/Navbardb'
import './indexprovide.scss'
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms'
import Avatar from '../../imgs/avatar.png'
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
import AddBoxIcon from '@mui/icons-material/AddBox';

const Indexprovide = () => {
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
    ];

    const [value, setValue] = useState([null, null]);
  return (
    <div className='provideindex'>
        <div className='navindex'>
            <Navbardb />
        </div>
        <div className='mainindex'>
            <div className='headindex'>
                <h3>Dịch vụ {`>`} <span style={{color: 'orange'}}>Danh sách dịch vụ</span></h3>
                <div className='infoindex'>
                    <AccessAlarmsIcon className="alertindex" />
                    <div className='nameindex'>
                        <img src={Avatar} alt="" />
                        <p>Xin chào <br />
                        <strong>Phạm Hoàng Sỹ</strong></p>
                    </div>
                </div>                
            </div>
            <div className='bodyindex'>
                <h3>Quản lý cấp số</h3>
                <div className='checksindex'>
                    <div className="checkindex checkindex1">
                        <label>Tên dịch vụ</label>
                        <select>
                            <option defaultValue>Tất cả</option>
                            <option>Khám sản - phụ khoa</option>
                            <option>Khám răng hàm mặt</option>
                            <option>Khám tai mũi họng</option>
                        </select>
                    </div>
                    <div className="checkindex">
                        <label>Tình trạng</label>
                        <select>
                            <option defaultValue>Tất cả</option>
                            <option>Đang chờ</option>
                            <option>Đã qua sử dụng</option>
                            <option>Bỏ qua</option>
                        </select>
                    </div>
                    <div className="checkindex">
                        <label>Nguồn cấp</label>
                        <select>
                            <option defaultValue>Tất cả</option>
                            <option>Kiosk</option>
                            <option>Hệ thống</option>
                        </select>
                    </div>
                    <div className="checkindex">
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
                                    <input className="input" ref={endProps.inputRef} {...endProps.inputProps} style={{cursor: 'not-allowed'}}/>
                                </React.Fragment>
                                )}
                            />
                        </LocalizationProvider>
                    </div>
                    <div className="checkindex">
                        <label>Từ khóa</label>
                        <Paper
                            className="searchindex"
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
                <div className='tabindex'>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[6]}
                    />
                    <a href='./newindex'><AddBoxIcon />Thêm dịch vụ</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Indexprovide
