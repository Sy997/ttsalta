import React, {useState} from 'react'
import Navbardb from '../../navbar/Navbardb'
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms'
import Avatar from '../../../imgs/avatar.png'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import './diaryuser.scss'

const Diaryuser = () => {
    const [value, setValue] = useState([null, null]);
    const columns = [
        { field: 'id', headerName: 'ID', width: 150 },
        { field: 'namelogin', headerName: 'Tên dịch vụ', width: 180 },
        { field: 'time', headerName: 'Mô tả', width: 200 },
        { field: 'IPsetup', headerName: 'Trạng thái hoạt động', width: 200 },
        { field: 'sync', headerName: '', width: 100 },
    ]
      const rows = [
        { id: 1, namelogin: 'Snow', time: 'Jon', IPsetup: 'Hoạt động', sync: 'Chi tiết', },
        { id: 2, namelogin: 'Lannister', time: 'Cersei', IPsetup: 'Hoạt động', sync: 'Chi tiết',  },
        { id: 3, namelogin: 'Lannister', time: 'Jaime', IPsetup: 'Hoạt động', sync: 'Chi tiết', },
        { id: 4, namelogin: 'Stark', time: 'Arya', IPsetup: 'Hoạt động', sync: 'Chi tiết', },
        { id: 5, namelogin: 'Targaryen', time: 'Daenerys', IPsetup: 'Hoạt động', sync: 'Chi tiết', },
        { id: 6, namelogin: 'Melisandre', time: null, IPsetup: 'Hoạt động', sync: 'Chi tiết', },
        { id: 7, namelogin: 'Clifford', time: 'Ferrara', IPsetup: 'Hoạt động', sync: 'Chi tiết', },
        { id: 8, namelogin: 'Frances', time: 'Rossini', IPsetup: 'Hoạt động', sync: 'Chi tiết', },
        { id: 9, namelogin: 'Roxie', time: 'Harvey', IPsetup: 'Hoạt động', sync: 'Chi tiết', },
        { id: 10, namelogin: 'Snow', time: 'Jon', IPsetup: 'Hoạt động', sync: 'Chi tiết', },
        { id: 11, namelogin: 'Lannister', time: 'Cersei', IPsetup: 'Hoạt động', sync: 'Chi tiết', },
        { id: 12, namelogin: 'Lannister', time: 'Jaime', IPsetup: 'Hoạt động', sync: 'Chi tiết', },
        { id: 13, namelogin: 'Stark', time: 'Arya', IPsetup: 'Hoạt động', sync: 'Chi tiết', },
        { id: 14, namelogin: 'Targaryen', time: 'Daenerys', IPsetup: 'Hoạt động', sync: 'Chi tiết', },
        { id: 15, namelogin: 'Melisandre', time: null, IPsetup: 'Hoạt động', sync: 'Chi tiết', },
        { id: 16, namelogin: 'Clifford', time: 'Ferrara', IPsetup: 'Hoạt động', sync: 'Chi tiết', },
        { id: 17, namelogin: 'Frances', time: 'Rossini', IPsetup: 'Hoạt động', sync: 'Chi tiết', update: 'Cập nhật' },
        { id: 18, namelogin: 'Roxie', time: 'Harvey', IPsetup: 'Hoạt động', sync: 'Chi tiết', },
      ];
  return (
    <div className="diaryuser">
        <div className='navdiary'>
            <Navbardb />
        </div>
        <div className='maindiary'>
            <div className='headdiary'>
                <h3>Cài đặt hệ thống {`>`} <span style={{ color: 'orange' }}>Nhật ký hoạt động</span></h3>
                <div className='infodiary'>
                    <AccessAlarmsIcon className="alertdiary" />
                    <div className='namediary'>
                        <img src={Avatar} alt="" />
                        <p>Xin chào <br />
                        <strong>Phạm Hoàng Sỹ</strong></p>
                    </div>
                </div>                
            </div>
            <div className='bodydiary'>
                <div className='timesearch'>
                    <div className='timediary'>
                        <label>Chọn thời gian</label>
                        <br />
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
                                        <input disabled className="input" ref={endProps.inputRef} {...endProps.inputProps} />
                                    </div>
                                </React.Fragment>
                                )}
                            />
                        </LocalizationProvider>
                    </div>
                    <div className='field field3'>
                        <label>Từ khóa</label>                       
                        <Paper
                            className="searchdiary"
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
                <div className='datadiary'>
                    <DataGrid
                        style={{background: 'white'}}
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[6]}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Diaryuser