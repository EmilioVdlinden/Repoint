import * as React from 'react';
import DataTable from 'react-data-table-component';


const columns = [
	{
    id: 'location',
		name: 'LOCATION',
		selector: row => row.location,
	},
	{
    id: 'time',
		name: 'LAST SEEN',
		selector: row => row.time,
	},
  {
    id: 'distance',
		name: 'FILL LEVEL [%]',
		selector: row => row.distance,
	},
  {
    id: 'temp',
		name: 'TEMPERATURE [°C]',
    selector: row => row.temp,
	},

];


const SensorTable = ({sensorData}) => {


  return (
    <DataTable
			columns={columns}
			data={sensorData}
      pagination     
      highlightOnHover={true}
		/>
  );
}

export default SensorTable;



