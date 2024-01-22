import * as React from 'react';
import DataTable from 'react-data-table-component';


const columns = [
	{
    id: 'location',
		name: 'LOCATION',
		selector: row => row.location,
	},
	{
    id: 'last',
		name: 'LAST SEEN',
		selector: row => row.last,
	},
  {
    id: 'fill',
		name: 'FILL LEVEL',
		selector: row => row.fill,
	},
  {
    id: 'temperature',
		name: 'TEMPERATURE',
    selector: row => row.temperature,
	},

];

const data = [
  {
		id: 1,
		location: 'Zottegem',
		last: '10:22 PM',
    fill: "60%",
    temperature: "5°C"
	},
  {
		id: 2,
		location: 'Gent',
		last: '10:32 PM',
    fill: "30%",
    temperature: "3°C"
	},
  {
		id: 3,
		location: 'Oudenaarde',
		last: '11:16 PM',
    fill: "80%",
    temperature: "5°C"
	},
  {
		id: 4,
		location: 'Oudenaarde',
		last: '11:16 PM',
    fill: "80%",
    temperature: "5°C"
	},
  {
		id: 5,
		location: 'Oudenaarde',
		last: '11:16 PM',
    fill: "80%",
    temperature: "5°C"
	},
  
]



const SensorTable = () => {
  return (
    <DataTable
			columns={columns}
			data={data}
      pagination     
      highlightOnHover={true}
		/>
  );
}

export default SensorTable;



