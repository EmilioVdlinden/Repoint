const Sensors = [
  {id: "C3A61D",
   location: "Aalst stadhuis",
   height: 610,
   maxFill: 80
  },
]

const fetchData = async (deviceID) => {
  try {
    const response = await fetch(`https://portal.io-things.eu/api/key/uplink/${deviceID}?size=1&start=1700553133&key=AIzaSyDl85J9L1_SUIo1QlY62moycjCTjhyxJC4`);
    const data = await response.json();
    return data;

  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};


const fetchNewData = async () => {
  const newData = [];
  for (let i = 0; i < Sensors.length; i++) {
    const response = await fetchData(Sensors[i].id);
    const id = Sensors[i].id;
    const location = getLocation(id);
    const temp = response.items[0].parsedPayload.temperature; 
    const fill = (response.items[0].parsedPayload.roiMax > 200 && response.items[0].parsedPayload.roiMax < 610) ? ((610 - response.items[0].parsedPayload.roiMax ) / 610 * 100).toFixed(0) : ((610 -  response.items[0].parsedPayload.od1) / 610 * 100).toFixed(0);
    const time = new Date(response.items[0].time.seconds * 1000).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true });
    newData.push({id: id, location: location, time: time, distance: fill, temp: temp});
  }
  return newData;
}

const getFullBins = async () => {
  let fullBins = 0;
  const data = await fetchNewData();
  for (let i = 0; i < Sensors.length; i++){
    for (let j = 0; j < data.length; j++ ){
      if(Sensors[i].id == data[j].id){
        if(Sensors[i].maxFill < data[j].distance){
          fullBins = fullBins + 1 ;
        }
      }
    }
  }
  return fullBins;
}

const getLocation = (id) => {
  for (let i = 0; i < Sensors.length; i++){
    if(Sensors[i].id == id){
      return Sensors[i].location;
    }
  }
}

const getFillLevel = (id) => {
  for (let i = 0; i < Sensors.length; i++){
    if(Sensors[i].id == id){
      return Sensors[i].height;
    }
  }
}

const result = await getFullBins();
console.log(result);



export { fetchNewData, getLocation, getFullBins };



 /*Math.round(response.items[0].parsedPayload.distance / getFillLevel(id));*/

 
 