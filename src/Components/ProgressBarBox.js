import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import blue from '../Assets/blueEllips.svg';
import darkBlue from '../Assets/darkBlueEllips.svg';
import red from '../Assets/redEllipse.svg';


ChartJS.register(ArcElement, Tooltip, Legend);


const ProgressBarBox = ({fullBins, mediumBins, emptyBins}) => {


const data = {
  labels: ['< 50%', '50% - 75%', '> 75%'],
  datasets: [
    {
      data: [emptyBins, mediumBins, fullBins],
      backgroundColor: ['#0043FF', '#12274F', '#D80027'],
      hoverBackgroundColor: ['#0043FF', '#12274F', '#D80027'],
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  responsive: true,
  circumference: 180,
  rotation: 270,
  elements: {
    arc: {
      borderWidth: 2
    }
  },
  plugins: {
    legend: {
      display: false,
    }
  }
};

  return (
    <div>
      <h1 className="block font-bold text-rebin-grey text-xs mb-4">Bin distribution</h1>
      <div>
        <Doughnut data={data} options={options} />
      </div>
      <div className='flex justify-center gap-x-3 mt-10'>
        <div className='flex gap-x-2 text-xs'>
          <img src={blue} alt="" />
          <span>{'<50%'}</span>
        </div>
        <div className='flex gap-x-2 text-xs'>
          <img src={darkBlue} alt="" />
          <span>{'50-75%'}</span>
        </div>
        <div className='flex gap-x-2 text-xs'>
          <img src={red} alt="" />
          <span>{'>75%'}</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBarBox;



/**/
