import React from 'react'
import Navbardb from '../../navbar/Navbardb'
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms'
import Avatar from '../../../imgs/avatar.png'
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import './manageaccount.scss'

const ManageAccount = () => {
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
  return (
    <div className="manageAccount">
        <div className='navaccount'>
            <Navbardb />
        </div>
        <div className='mainaccount'>
            <div className='headaccount'>
                <h4>Cài đặt hệ thống {`>`} <span style={{color: 'orange'}}></span>Quản lý tài khoản</h4>
                <div className='infoaccount'>
                    <AccessAlarmsIcon className="alertaccount" />
                    <div className='nameaccount'>
                        <img src={Avatar} alt="" />
                        <p>Xin chào <br />
                        <strong>Phạm Hoàng Sỹ</strong></p>
                    </div>
                </div>                
            </div>
            <div className='bodyaccount'>
                <div className='fields'>
                    <h3 style={{color: 'orange'}}>Danh sách tài khoản</h3>
                    <div className="searchaccount">
                        <div className="roleaccount">
                            <label>Tên vai trò</label>
                            <br />
                            <select>
                                <option defaultValue>Tất cả</option>
                                <option>Hoạt động</option>
                                <option>Ngưng hoạt động</option>
                            </select>
                        </div>
                        <div className="searchacc">
                            <label style={{marginBottom: '0.8rem'}}>Từ khóa</label>                       
                            <Paper
                                className='search'
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
                </div>
                <div className='dataaccount'>
                    <DataGrid
                        style={{background: 'white'}}
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[6]}
                    />
                    <a href='./updateservice'><AddIcon />Thêm tài khoản</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ManageAccount