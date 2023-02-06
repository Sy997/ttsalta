import React, { useState, useEffect } from 'react'
import Main from '../../components/main/Main'
//import Navbar from '../../components/navbar/Navbar'
import Navbardb from '../../components/navbar/Navbardb'
import Overview from '../../components/overview/Overview'
import "./homepage.scss"
import Widgetdb from '../../components/widget/Widgetdb'
import Chartdb from '../../components/chart/Chartdb'
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore"
import { db } from '../../firebase'

const Homepage = () => {
  
  const [device, getDevices] = useState([])
  const deviceCollection = collection(db, 'devices')
  const [newCode, setNewCode] = useState("")
  const [newName, setNewName] = useState("")

  useEffect(() => {
    const getDevice = async () => {
      const data = await getDocs(deviceCollection)
      getDevices(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    };

    getDevice()
    
  }, [])

  const updateCode = async (id, code_device) => {
    const deviceDoc = doc(db, "devices", id)
    const newUp = {code_device: code_device+1}
    await updateDoc(deviceDoc, newUp)

    return (
      <>
        <h4>mã thiết bị: {}</h4>
        <button onClick={updateCode}>thay đổi</button>
      </>
    )
  }

  const createNewdevice = async () => {
    await addDoc(deviceCollection, {code_device: newCode, name_device: newName})

    return (
      <div>
        <input name='code device' type="text" onChange={e => setNewCode(e.target.value)} />
        <input name='name device' type="text" onChange={e => setNewName(e.target.value)} />
        <button onClick={createNewdevice}>Click me to add!!!</button>
      </div>
    )
  }

  console.log(device)
  return (
    <div className='homepage'>
        <div className='lefthome'>
            <Navbardb />  
        </div>
        
        <div className='middlehome'>
            <Main />
            <div className="widgets">
              <Widgetdb type="indexed" />
              <Widgetdb type="indexing" />
              <Widgetdb type="indexpending" />
              <Widgetdb type="indexignore" />
            </div>
            <div className='charts'>
              <Chartdb />
            </div>
        </div>
        
        <div className='righthome'>
            <Overview />
        </div>   
    </div>
  )
}

export default Homepage