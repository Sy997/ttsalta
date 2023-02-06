import React, { useState } from 'react'
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { useUserContext } from "./context/AuthContext";
import Homepage from "./pages/home/Homepage";
import Devices from "./components/devices/Devices";
import Updatedevice from "./components/devices/Updatedevice";
import Services from "./components/services/Services";
import Updateservice from "./components/services/Updateservice";
import Indexprovide from "./components/index/Indexprovide";
import Updateindex from "./components/index/Updateindex";
import Report from "./components/report/Report";
import ManageRole from "./components/manage/managerole/ManageRole";
import Updaterole from "./components/manage/managerole/Updaterole";
import ManageAccount from "./components/manage/manageaccount/ManageAccount";
import Updateaccount from "./components/manage/manageaccount/Updateaccount";
import Diaryuser from "./components/manage/diaryuser/Diaryuser";
import Index from "./components/Index";
import Reducer from "./components/Reducer";
import Profile from "./components/profile/Profile";
import { onAuthStateChanged } from 'firebase/auth';
import auth from './firebase';
import Forget from './pages/login/Foget';
import Resetpass from './pages/login/Resetpass';
import Detailsservice from './components/services/Detailsservice';


function App() {
  const [user, setUser] = useState("")

  const currentUser = auth.currentUser
  
  // const { darkMode } = useContext(DarkModeContext);

  // const {currentUser} = useContext(useUserContext)

  const RequireAuth = () => {
     return currentUser === null ? <Navigate to="/" /> : <Navigate to="/login" />;
  };

  // console.log(currentUser)
  //className={darkMode ? "app dark" : "app"}
  return (
    <div style={{margin: 0, padding: 0}}>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          {/* <Route path="/home" element={<Home />} /> */}
          <Route index path="/" element={
            
              <Homepage />
            
          }/>
          <Route path="/devices" element={<Devices />} />
          <Route path="/updatedevice" element={<Updatedevice />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/updateservice" element={<Updateservice />} />
          <Route path="/indexprovide" element={<Indexprovide />}/>
          <Route path="/newindex" element={<Updateindex />} />
          <Route path="/report" element={<Report />} />
          <Route path="/managerole" element={<ManageRole />} />
          <Route path="/upmanagerole" element={<Updaterole />}/>
          <Route path="/manageaccount" element={<ManageAccount />} />
          <Route path="/updateaccount" element={<Updateaccount />} />
          <Route path="/diaryuser" element={<Diaryuser />}/>
          <Route path="profile" element={<Profile />}/>
          <Route path='/forget' element={<Forget />}/>
          <Route path='/resetpass' element={<Resetpass />}/>
          <Route path='/detail_service' element={<Detailsservice />}/>
          {/* <Route path="/reducer" element={<Reducer />} /> */}
          {/* <Route path="/index" element={<Index />}/> */}
          {/* <Route path="/">
            <Route path="login" element={<Login />} />
            <Route
              index
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route path="users">
              <Route
                index
                element={
                  <RequireAuth>
                    <List />
                  </RequireAuth>
                }
              />
              <Route
                path=":userId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <New inputs={userInputs} title="Add New User" />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="products">
              <Route
                index
                element={
                  <RequireAuth>
                    <List />
                  </RequireAuth>
                }
              />
              <Route
                path=":productId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <New inputs={productInputs} title="Add New Product" />
                  </RequireAuth>
                }
              />
            </Route>
          </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
