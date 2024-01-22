import React, { useState, useEffect } from 'react';
import { fetchData } from '../Data/SensorApi';
import { sensors } from '../Data/senors';
import Dropdown from '../Components/Dropdown';
import StatsIcon from '../Components/StatsIcon';
import Toggle from '../Components/Toggle';
import SensorTable from '../Components/SensorTable';
import { PiTrash } from "react-icons/pi";
import { FaCheck } from "react-icons/fa6";
import { IoTimeOutline } from "react-icons/io5";



const Dashboard = () => {

  const [sensorData, setSensorData] = useState(null);
  const fetchDataPeriodically = async () => {
    try {
      const data = await fetchData(sensors[0].id);
      setSensorData(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchDataPeriodically();
  }, []);

  return (
    <div className='p-10 w-screen'>
      <h1 className='text-4xl font-medium text-rebin-darkblue'>Dashboard</h1>
      <div className='grid grid-cols-4 gap-x-5 gap-y-5 mt-14	' style={{ gridAutoRows: "minmax(80px, auto)" }}>
        <Dropdown></Dropdown>
        <StatsIcon kpi='Full bins' value={sensorData} Icon={PiTrash}></StatsIcon>
        <StatsIcon kpi='Sensor status' value='73 sensors' Icon={FaCheck}></StatsIcon>
        <StatsIcon kpi='Last collection moment' value='18 Jan 2024' Icon={IoTimeOutline}></StatsIcon>
        <div className='flex flex-col rounded-lg bg-white py-4 px-3 text-left shadow-md gap-y-10' style={{ gridColumn: "span 3", gridRow: "span 5" }}>
          <div className='flex justify-between items-center'>
            <span className='text-rebin-darkblue text-lg font-semibold'>Dashboard</span>
            <Toggle></Toggle>
          </div>
        <SensorTable></SensorTable>
        </div>
        <div className='rounded-lg bg-white py-4 pl-3 text-left shadow-md' style={{ gridRow: "span 3" }}>6</div>
        <div className='rounded-lg bg-white py-4 pl-3 text-left shadow-md' style={{ gridRow: "span 2" }}>7</div>
      </div>
    </div>
  )
}

export default Dashboard;

