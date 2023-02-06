import React from 'react'
import auth from '../../firebase'
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import ListIcon from '@mui/icons-material/List';
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./widget.scss"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import PhonePausedIcon from '@mui/icons-material/PhonePaused';
import NotificationsPausedIcon from '@mui/icons-material/NotificationsPaused';
const Widgetdb = ({ type }) => {
    let data;
    let amount = {
      indexed: 4.221,
      indexing: 3.721,
      indexpending: 468,
      indexignore: 32
    };
    let diff = 20
    switch (type) {
        case 'indexed':
            data = {
                title: "Số thứ tự đã cấp",
                isMoney: false,
                link: "See all users",
                query:"users",
                index: amount.indexed,
                icon: (
                  <CalendarMonthIcon
                    className="icon"
                    style={{
                      color: "crimson",
                      backgroundColor: "rgba(255, 0, 0, 0.2)",
                    }}
                  />
                ),
            }
            break;
        case 'indexing':
            data = {
                title: "Số thứ tự đã sử dụng",
                isMoney: false,
                link: "See all users",
                query:"users",
                index: amount.indexing,
                icon: (
                  <EventAvailableIcon
                    className="icon"
                    style={{
                      color: "crimson",
                      backgroundColor: "rgba(255, 0, 0, 0.2)",
                    }}
                  />
                ),
            }
            break;
        case 'indexpending':
            data = {
                title: "Số thứ tự đang chờ",
                isMoney: false,
                link: "See all users",
                query:"users",
                index: amount.indexpending, 
                icon: (
                  <PhonePausedIcon
                    className="icon"
                    style={{
                      color: "crimson",
                      backgroundColor: "rgba(255, 0, 0, 0.2)",
                    }}
                  />
                ),
            }
            break;
        case 'indexignore':
            data = {
                title: "Số thứ tự đã bỏ qua",
                isMoney: false,
                link: "See all users",
                query:"users",
                index: amount.indexignore,
                icon: (
                  <NotificationsPausedIcon
                    className="icon"
                    style={{
                      color: "crimson",
                      backgroundColor: "rgba(255, 0, 0, 0.2)",
                    }}
                  />
                ),
            }
            break;
        default:
            break;
    }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {data.index}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className={`percentage ${diff < 0 ? "negative" : "positive"}`}>
          {diff < 0 ? <KeyboardArrowDownIcon/> : <KeyboardArrowUpIcon/> }
          <span>{diff}%</span>
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widgetdb
