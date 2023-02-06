import React, {useState} from 'react'
import "./overview.scss"
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import Avatar from "../../imgs/avatar.png"
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import VideoSettingsIcon from '@mui/icons-material/VideoSettings';
import { CircularProgressbar } from "react-circular-progressbar";
import AnimationIcon from '@mui/icons-material/Animation';
import dayjs from "dayjs"
import range from "lodash-es/range"
import Notifications from '../notifications/Notifications';

const Overview = () => {

  const [show, setShow] = useState(false)

  const Widget = ({ type }) => {
    let data;
    switch (type) {
      case "devices":
        data = {
          title: "Thiết bị",
          total: 4.221,
          active: 3.721,
          useout: 422,
          icons: (
            <ImportantDevicesIcon />
          )
        }
        break;       
      case "services":
        data = {
          title: "Dịch vụ",
          total: 276,
          active: 210,
          useout: 66,
          icons: (
            <VideoSettingsIcon />
          )
        }
        break;
      case "progression":
        data = {
          title: "Cấp số",
          total: 4221,
          active: 3721,
          useout: 486,
          ignore: 32,
          icons: (
            <AnimationIcon />
          )
        }
        break;
      default:
        break;
    }

    return (
      <div className='evelue'>
        <CircularProgressbar className='cycleev' value={70} text={"70%"} strokeWidth={5} />
        <div>
          <p>{data.active}</p>
          <p className="titleev">{data.icons} {data.title}</p>
        </div>
        <div>
          <ul>
            <li>Đang hoạt động {data.active}</li>
            <li>Ngưng hoạt động {data.useout}</li>
          </ul>
        </div>
      </div>
    )
  }
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const todayObj = dayjs()
  const Calendar = () => {
    const [dayObj, setDayObj] = useState(dayjs())

    const thisYear = dayObj.year()
    const thisMonth = dayObj.month() // (January as 0, December as 11)
    const daysInMonth = dayObj.daysInMonth()

    const dayObjOf1 = dayjs(`${thisYear}-${thisMonth + 1}-1`)
    const weekDayOf1 = dayObjOf1.day() // (Sunday as 0, Saturday as 6)

    const dayObjOfLast = dayjs(`${thisYear}-${thisMonth + 1}-${daysInMonth}`)
    const weekDayOfLast = dayObjOfLast.day()

    const handlePrev = () => {
      setDayObj(dayObj.subtract(1, "month"))
    }

    const handleNext = () => {
      setDayObj(dayObj.add(1, "month"))
    }

    return (
      <div className="calendar">
        <div className="header">
          <button type="button" className="nav nav--prev" onClick={handlePrev}>
            &lt;
          </button>
          <div className="datetime">{dayObj.format("MMM DD YYYY")}</div>
          <button type="button" className="nav nav--prev" onClick={handleNext}>
            &gt;
          </button>
        </div>
        <div className="week-container">
          {weekDays.map(d => (
            <div className="week-cell" key={d}>
              {d}
            </div>
          ))}
        </div>
        <div className="day-container">
          {range(weekDayOf1).map(i => (
            <div className="day-cell day-cell--faded" key={i}>
              {dayObjOf1.subtract(weekDayOf1 - i, "day").date()}
            </div>
          ))}
  
          {range(daysInMonth).map(i => (
            <div
              className={`day-cell day-cell--in-month${
                i + 1 === todayObj.date() &&
                thisMonth === todayObj.month() &&
                thisYear === todayObj.year()
                  ? " day-cell--today"
                  : ""
              }`}
              key={i}
            >
              {i + 1}
            </div>
          ))}
  
          {range(6 - weekDayOfLast).map(i => (
            <div className="day-cell day-cell--faded" key={i}>
              {dayObjOfLast.add(i + 1, "day").date()}
            </div>
          ))}
        </div>
      </div>
    )
  }

  const handleclick = () => {
    setShow(show === false ? true : false)
  }

  return (
    <div className='chartdb'>
      <div className='headinfo'>
        <p className='alert'>
          <AccessAlarmsIcon onClick={handleclick} style={{color: 'orange', cursor: 'pointer'}} />
        </p>
        {show === false ? '' :
          <div className="notif">
            <Notifications />
          </div>
        }
        <div className='infoacc'>
          <img src={Avatar} alt="Avatar" />
          <div className='name'>
            <p>Xin chào <br />
            <strong>Phạm Hoàng Sỹ</strong></p>
          </div>
        </div>
      </div>
      <div className=''>
        <h2 style={{marginLeft: '0.5rem', color: 'orange'}}>Tổng quan</h2>
        <Widget type="devices" />
        <Widget type="services" />
        <Widget type="progression" />
      </div>
      <div className='timeline'>
        <Calendar />
      </div>
    </div>
  )
}

export default Overview
