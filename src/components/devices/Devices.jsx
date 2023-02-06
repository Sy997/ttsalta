import React, {useState, useEffect} from 'react'
import Navbardb from '../navbar/Navbardb'
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms'
import Avatar from '../../imgs/avatar.png'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./devices.scss"
import Datatabledb from '../datatable/Datatabledb';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { db } from '../../firebase'
import { collection, Collection, getDocs } from 'firebase/firestore'

const Devices = () => {
    const [ind, setIn] = useState('');
    const [inde, setInde] = useState('')
    const [devices, setDevice] = useState([])
    const deviceCollection = collection(db, 'devices')

    useEffect(() => {
        const getDevice = async () => {
            const data = await getDocs(deviceCollection)
            console.log(data)
            setDevice(data.docs.map((doc) => ({...doc.data(), ip: doc.id})))
        }

        getDevice()
    }, [])

    
    const handleChange = (event) => {
        setInde(event.target.value);
    };

    const handleChangee = (event) => {
        setIn(event.target.value);
    };
  return (
    <div className="devices">
        <div className='navde'>
            <Navbardb />
        </div>
        <div className='mainde'>
            <div className='headde'>
                <h3>Thiết bị {`>`} <span style={{color: 'orange'}}>Danh sách thiết bị</span></h3>
                <div className='infode'>
                    <AccessAlarmsIcon className="alertde" />
                    <div className='namede'>
                        <img src={Avatar} alt="" />
                        <p>Xin chào <br />
                        <strong>Phạm Hoàng Sỹ</strong></p>
                    </div>
                </div>                
            </div>
            <div className="listde">
                <h2>Danh sách thiết bị</h2>
                <div className='selectsde'>
                    <div className='selectde'>
                        <div>
                            <label>Trạng thái hoạt động</label>                          
                            <FormControl fullWidth>
                                
                                <Select

                                    className="boxde"
                                    labelId="demo-simple-select-label"                                                              value={inde}    
                                    onChange={handleChange}
                                >
                                <MenuItem value={1} defaultValue>Tất Cả</MenuItem>
                                <MenuItem value={2}>Hoạt Động</MenuItem>
                                <MenuItem value={3}>Ngưng Hoạt Động</MenuItem>
                                </Select>
                            </FormControl>                         
                        </div>
                        <div>
                            <label>Trạng thái kết nối</label>                            
                            <FormControl fullWidth>
                                
                                <Select

                                    className="boxde"

                                    labelId="demo-simple-select-label"
                                    value={ind}
                                    
                                    onChange={handleChangee}
                                >
                                    <MenuItem value={1} defaultValue>Tất Cả</MenuItem>
                                    <MenuItem value={2}>Kết nối</MenuItem>
                                    <MenuItem value={3}>Ngưng Kết Nối</MenuItem>
                                </Select>
                            </FormControl>                            
                        </div>
                    </div>
                    <div className='inputde'>
                        <label>Từ khóa</label>                       
                        {/* <input style={{height: '40px', background: 'white', marginTop: '0.5rem', borderRadius: '6px', paddingLeft: '5px'}} className="inputde" type="text" placeholder="Nhap tu khoa..." /> */}
                        <Paper
                            className="boxde"
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
            <div className="datasde">
                <div className='datade'>
                    <Datatabledb />
                </div>
                <a className="adddev" href='./updatedevice'><AddBoxIcon /> Thêm thiết bị</a>
            </div>
        </div>
    </div>
  )
}

export default Devices
