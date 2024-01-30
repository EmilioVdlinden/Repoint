import React, { useState, useEffect } from 'react';
import Dropdown from '../Components/Dropdown';
import StatsIcon from '../Components/StatsIcon';
import Toggle from '../Components/Toggle';
import SensorTable from '../Components/SensorTable';
import ProgressBarBox from '../Components/ProgressBarBox';
import { PiTrash } from "react-icons/pi";
import { FaCheck } from "react-icons/fa6";
import { IoTimeOutline } from "react-icons/io5";
import {fetchNewData, getFullBins, getBinDistribution} from '../Data/SensorApi';

const fullbins = await getFullBins();
const binDistribution = await getBinDistribution();

const Dashboard = () => {
  const [sensorData, setSensorData] = useState([]);

  const fetchDataPeriodically = async () => {
    try {
      const data = await fetchNewData();
      setSensorData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataPeriodically();
  }, []);

  return (
    <div className='p-10 w-screen'>
      <h1 className='text-4xl font-medium text-rebin-darkblue'>Dashboard</h1>
      <div className='grid grid-cols-4 gap-x-5 gap-y-5 mt-14	' style={{ gridAutoRows: "minmax(80px, auto)" }}>
        <Dropdown></Dropdown>
        {sensorData && (
          <>
            <StatsIcon kpi='Full bins' value={fullbins} Icon={PiTrash}></StatsIcon>
            <StatsIcon kpi='Sensor status' value={`${sensorData.length} sensors`} Icon={FaCheck}></StatsIcon>
            <StatsIcon kpi='Last collection moment' value='No data available' Icon={IoTimeOutline}></StatsIcon>
          </> 
        )}
        <div className='flex flex-col rounded-lg bg-white py-4 px-3 text-left shadow-md gap-y-10' style={{ gridColumn: "span 3", gridRow: "span 5" }}>
          <div className='flex justify-between items-center'>
            <span className='text-rebin-darkblue text-lg font-semibold'>Dashboard</span>
            <Toggle></Toggle>
          </div>
          {sensorData && (
            <SensorTable sensorData={sensorData}></SensorTable>
          )}
        </div>
        <div className='rounded-lg bg-white py-4 pl-3 pr-3 text-left shadow-md' style={{ gridRow: "span 3" }}>
        {sensorData && (
            <ProgressBarBox fullBins={binDistribution.fullBins} mediumBins={binDistribution.mediumBins} emptyBins={binDistribution.emptyBins}></ProgressBarBox>
          )}
        </div>
        <div className='rounded-lg bg-white py-4 pl-3 text-left shadow-md' style={{ gridRow: "span 2" }}>
          <h1 className="block font-bold text-rebin-grey text-xs ">Saved collection costs</h1>
          <span className="block text-rebin-darkblue text-lg font-semibold truncate">No data available</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

