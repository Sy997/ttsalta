import React, {useState, useEffect} from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import './datatabledb.scss'
import { db } from '../../firebase'
import { doc, addDoc, collection, getDocs, updateDoc } from 'firebase/firestore'


const Datatabledb = () => {

  const [user, setUser] = useState("")
  const [age, setAge] = useState()

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

  const renderdata = () => {
    devices.map((device, index) => {
      return(
        <tr>
          <td>{device.code_device}</td>
          <td>{device.name_device}</td>
          <td>{device.IP_Address}</td>
          <td>{device.status_active}</td>
          <td>{device.connect_status}</td>
        </tr>
      )
    })
  }

  const renderheader = () => {
    return(
      <tr>
        <th>Mã thiết bị</th>
        <th>Tên thiết bị</th>
        <th>Địa chỉ IP</th>
        <th>Trạng thái hoạt động</th>
        <th>Trang thái kết nối</th>
      </tr>
    )
  }

  const handleCreate = async () => {

    await addDoc(deviceCollection, {name: setUser, age: setAge})

  }

  const handleUpdate = async (id, name, age) => {

    const userDoc = doc(db, 'users',id)
    const newFields = {age: age + 1}
    await updateDoc(userDoc, newFields)

  }

  const create = () => {
    return (
      <div>
        <input type="text" placeholder='Name....' onChange={(e) => {setUser(e.target.value)}} />
        <input type="number" placeholder='Age...' onChange={(e) => {setAge(e.target.value)}} />

        <button onClick={handleCreate}>Create User</button>
        <button onClick={() => handleUpdate(user.id, user.age)}>Update User</button>
      </div>
    )
  }
  const columns = [
    
    { field: 'id', headerName: 'Mã thiết bị', width: 70 },
    { field: 'nameDevices', headerName: 'Tên thiết bị', width: 130 },
    { field: 'ipAddress', headerName: 'Địa chỉ IP', width: 130 },
    {
      field: 'statusActive',
      headerName: 'Trạng thái hoạt động',
      type: 'number',
      width: 90,
    },
    {
      field: 'statusconnect',
      headerName: 'Trạng thái kết nối',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    { field: 'services', headerName: 'Dịch vụ sử dụng', width: 130 },
    { field: 'details', headerName: '', width: 130 },
    { field: 'update', headerName: '', width: 130 },
  ];
  
  const rows = [
    { id: 1, nameDevices: 'Snow', ipAddress: 'jame born', statusActive: 35, statusconnect: 'pending', services: 'nha khoa, eyes, mouth', details: <a href='./'>Chi tiết</a>, update: '<a href="#">Cập nhật</a>'} ,
    { id: 2, nameDevices: 'Lannister', ipAddress: 'Cersei', statusActive: 42, statusconnect: 'pending', services: 'nha kha, eyes, mouth', details: <a href='./'>Chi tiết</a>, update: '<a href="#">Cập nhật</a>' },
    { id: 3, nameDevices: 'Lannister', ipAddress: 'Jaime', statusActive: 45, statusconnect: 'pending', services: 'nha kha, eyes, mouth', details: <a href='./'>Chi tiết</a>, update: '<a href="#">Cập nhật</a>' },
    { id: 4, nameDevices: 'Stark', ipAddress: 'Arya', statusActive: 16, statusconnect: 'pending', services: 'nha kha, eyes, mouth', details: <a href='./'>Chi tiết</a>, update: '<a href="#">Cập nhật</a>' },
    { id: 5, nameDevices: 'Targaryen', ipAddress: 'Daenerys', statusActive: null, statusconnect: 'pending', services: 'nha kha, eyes, mouth', details: <a href='./'>Chi tiết</a>, update: '<a href="#">Cập nhật</a>' },
    { id: 6, nameDevices: 'Melisandre', ipAddress: null, statusActive: 150, statusconnect: 'pending', services: 'nha kha, eyes, mouth', details: <a href='./'>Chi tiết</a>, update: '<a href="#">Cập nhật</a>' },
    { id: 7, nameDevices: 'Clifford', ipAddress: 'Ferrara', statusActive: 44, statusconnect: 'pending', services: 'nha kha, eyes, mouth', details: <a href='./'>Chi tiết</a>, update: '<a href="#">Cập nhật</a>' },
    { id: 8, nameDevices: 'Frances', ipAddress: 'Rossini', statusActive: 36, statusconnect: 'pending', services: 'nha kha, eyes, mouth', details: <a href='./'>Chi tiết</a>, update: '<a href="#">Cập nhật</a>' },
    { id: 9, nameDevices: 'Roxie', ipAddress: 'Harvey', statusActive: 65, statusconnect: 'pending', services: 'nha kha, eyes, mouth', details: <a href='./'>Chi tiết</a>, update: '<a href="#">Cập nhật</a>' },
  ];

  return (
    <div className='datatabledb'>
      <DataGrid 
        style={{ height: "350px", width: '100%', fontSize: '15px' }}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[8]}
      /> 
      {/* <table>
        <tr>
          <th>Mã thiết bị</th>
          <th>Tên thiết bị</th>
          <th>Địa chỉ IP</th>
          <th>Trạng thái hoạt động</th>
          <th>Trạng thái kết nối</th>
        </tr>
        {devices.map((device) => <tr><td>{device.code_device}</td></tr>)}
        {devices.map((device) => <tr><td>{device.name_device}</td></tr>)}
        {devices.map((device) => <tr><td>{device.IP_Address}</td></tr>)}
        {devices.map((device) => <tr><td>{device.status_active}</td></tr>)}
        {devices.map((device) => <tr><td>{device.connect_status}</td></tr>)}
      </table> */}
      {/* <ul>
        <i className='title'>Mã thiết bị</i>
        {devices.map((device) => 
          <li>{device.code_device}</li>  
        )}
      </ul>
      <ul>
        <i>Tên thiết bị</i>
        {devices.map((device) => 
          <li>{device.name_device}</li>  
        )}
      </ul>
      <ul>
        <i>Địa chỉ IP</i>
        {devices.map((device) => 
          <li>{device.IP_Address}</li>
        )}
      </ul>
      <ul>
        <i>
          Trạng thái hoạt động
        </i>
        {devices.map((device) => 
          <li>{device.status_active}</li>  
        )}
      </ul>
      <ul>
        <i>Trạng thái kết nối</i>
        {devices.map((device) => 
          <li>{device.connect_status}</li>  
        )}
      </ul>
      <ul>
        <i>Chi tiết</i>
        {devices.map((device) => 
          <li>Khám tai mũi họng <a href=''>Chi tiết</a></li>
        )}
      </ul>
      <ul>
        <i>Cập nhật</i>
        {devices.map((device) => 
          <li><a href=''>Cập nhật</a></li>
        )}
      </ul> */}
    </div>
  )
}

export default Datatabledb
