import React, { useState } from 'react'
import {
    AreaChart,
    Area,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";
import "./chartdb.scss"
import { CircularProgressbar } from "react-circular-progressbar";


const Chartdb = () => {
    
    const professions = ["ngay", "tuan", "thang"]
    const [myProfession, setMyProfession] = useState("")
    
    const datangay = {
      title: "Bảng thống kê theo ngày",
      parameter: [
        { name: "January", Total: 1200 },
        { name: "February", Total: 2100 },
        { name: "March", Total: 1600 },
        { name: "April", Total: 1600 },
        { name: "May", Total: 900 },
        { name: "June", Total: 1700 },
      ],
    }
    const datatuan = {
      title: "Bảng thống kê theo tuần",
      parameter: [
          { name: "January", Total: 1200 },
          { name: "February", Total: 2100 },
          { name: "March", Total: 800 },
          { name: "April", Total: 1600 },
          { name: "May", Total: 900 },
          { name: "June", Total: 1700 },
      ],
    }
    const datathang = {
      title: "Bảng thống kê theo tháng",
      parameter: [
          { name: "January", Total: 1200 },
          { name: "February", Total: 2100 },
          { name: "March", Total: 800 },
          { name: "April", Total: 1600 },
          { name: "May", Total: 900 },
          { name: "June", Total: 19000 },
      ],
    }

    
    return (
      <div className="chart">
        <div className="title">
            {datangay.title}
            <div className='followsee'>
                <p>Xem theo
                  <select>
                    {professions.map(profess => (
                    
                      <option 
                        type="button"
                        key={profess}
                        className=""
                        onChange={(e) => setMyProfession(e.target.value)}
                        onClick={() => setMyProfession(profess)}
                      >
                        {profess.toLocaleUpperCase()}
                      </option>
                      
                    ))}               
                  </select>
                </p>
            </div>
         </div>
        {myProfession === "ngay" && (<ResponsiveContainer width="100%" aspect={2/1}>
          <AreaChart
            width={730}
            height={100}
            data={datangay.parameter}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" stroke="gray" />
            <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Total"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#total)"
            />
          </AreaChart>
        </ResponsiveContainer>)}
        {myProfession === "thang" ? '' : (
          <ResponsiveContainer width="100%" aspect={2/1}>
          <AreaChart
            width={730}
            height={100}
            data={datathang.parameter}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" stroke="gray" />
            <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Total"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#total)"
            />
          </AreaChart>
        </ResponsiveContainer>)}
        {myProfession === "tuan" && 
        (<ResponsiveContainer width="100%" aspect={2/1}>
          <AreaChart
            width={730}
            height={100}
            data={datatuan.parameter}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" stroke="gray" />
            <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Total"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#total)"
            />
          </AreaChart>
        </ResponsiveContainer>)}
        {myProfession === "thang" && (
          <ResponsiveContainer width="100%" aspect={2/1}>
          <AreaChart
            width={730}
            height={100}
            data={datathang.parameter}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" stroke="gray" />
            <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Total"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#total)"
            />
          </AreaChart>
        </ResponsiveContainer>)}
      </div>
    );
};
  
export default Chartdb;
