import React, { useState, useEffect } from 'react'
import Navbardb from '../navbar/Navbardb'
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms'
import Avatar from '../../imgs/avatar.png'
import './services.scss'
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
import ReactPaginate from 'react-paginate';
import { db } from '../../firebase'
import { collection, getDocs } from 'firebase/firestore'

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

const Services = () => {

    const [sevices, setSevice] = useState([])
    const deviceCollection = collection(db, 'services')
    var dataTable = ""
    useEffect(() => {
        const getSevice = async () => {
            const data = await getDocs(deviceCollection)
            console.log(data)
            setSevice(data.docs.map((doc) => ({...doc.data(), ip: doc.id})))
        }

        getSevice()
    }, [])

    const [value, setValue] = useState([null, null]);

    const data = () => {
        return(
            <>
                {sevices.map((device) => {

                })}
            </>
        )
    }

  return (
    <div className='services'>
      <div className='navser'>
        <Navbardb />
      </div>
      <div className='mainser'>
        <div className='headser'>
            <h3>Dịch vụ {`>`} <span style={{color: 'orange'}}>Danh sách dịch vụ</span></h3>
            <div className='infoser'>
                <AccessAlarmsIcon className="alertser" />
                <div className='nameser'>
                    <img src={Avatar} alt="" />
                    <p>Xin chào <br />
                    <strong>Phạm Hoàng Sỹ</strong></p>
                </div>
            </div>                
        </div>
        <div className='fieldsser'>
            <h4 style={{color: 'orange'}}>Quản lý dịch vụ</h4>
            <div className='fieldser'>
                <div className='field'>
                    <label>Quản lý dịch vụ</label>
                    <select>
                        <option defaultValue={`Tất cả`}>Tất cả</option>
                        <option>Hoạt động</option>
                        <option>Ngưng hoạt động</option>
                    </select>
                </div>
                <div className='field'>
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
                <div className='field field3'>
                    <label>Từ khóa</label>                       
                    <Paper
                        className="searchservice"
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
        <div className='tabservice'>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[6]}
            />
            {/* <table>
                <thead>
                    <tr>
                        <td>Mã dịch vụ</td>
                        <td>Tên dịch vụ</td>
                        <td>Mô tả</td>
                        <td>Trạng thái hoạt động</td>
                        <td></td>
                        <td></td>
                    </tr>

                </thead>
                <tbody id='table_body'>                   
                    {sevices.map((service) => 
                        {dataTable += `{<tr>
                                <td>${service.code_service}</td>
                            </tr>}`}
                    )}
                </tbody>
            </table> */}
            <a href='./updateservice'><AddBoxIcon />Thêm dịch vụ</a>
        </div>
      </div>
    </div>
  )
}

export default Services