import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
// import { DarkModeContext } from "../../context/darkModeContext";
// import { useContext } from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import ReorderIcon from '@mui/icons-material/Reorder';
import SummarizeIcon from '@mui/icons-material/Summarize';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import LogoutIcon from '@mui/icons-material/Logout';
const Navbar = () => {
  //const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      {/* <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div> */}
      <div>
        <h1>Alta Media</h1>
      </div>
      <div>
        <ul>
          <li><DashboardIcon /> Dashboard</li>
          <li><ImportantDevicesIcon /> Thiết bị</li>
          <li><DesignServicesIcon /> Dịch vụ</li>
          <li><ReorderIcon /> Cấp số</li>
          <li><SummarizeIcon /> Báo cáo</li>
          <li><SettingsApplicationsIcon /> Cài đặt hệ thống</li>
        </ul>
      </div>
      <button><LogoutIcon /> Đăng xuất</button>
    </div>
  );
};

export default Navbar;