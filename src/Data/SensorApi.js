const Sensors = [
  {id: "C3A61D",
   location: "Stadhuis Aalst",
   height: 610,
   maxFill: 80
  }
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
    /*const fill = (response.items[0].parsedPayload.roiMax > 200 && response.items[0].parsedPayload.roiMax < 610) ? ((610 - response.items[0].parsedPayload.roiMax ) / 610 * 100).toFixed(0) : ((610 -  response.items[0].parsedPayload.od1) / 610 * 100).toFixed(0);*/
    const fill = greaterNull(Math.round(((Sensors[i].height - response.items[0].parsedPayload.roiMax) / ( Sensors[i].height ) * 100),0));
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

const getBinDistribution = async () => {
  let fullBins = 0;
  let mediumBins =0;
  let emptyBins = 0;
  const data = await fetchNewData();
  for (let i = 0; i < Sensors.length; i++){
    for (let j = 0; j < data.length; j++ ){
      if(Sensors[i].id == data[j].id){
        if( data[j].distance > 75){
          fullBins = fullBins + 1 ;
        }
        if( data[j].distance < 75 && data[j].distance > 50 ){
          mediumBins = mediumBins + 1 ;
        }
        if( data[j].distance < 50 ){
          emptyBins = emptyBins + 1 ;
        }
      }
    }
  }
  return {fullBins, mediumBins, emptyBins};
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

const greaterNull = (number) => {
  if(number >= 0) {
    return number;
  }
  if(number < 0) {
    return 0;
  }
}





export { fetchNewData, getLocation, getFullBins, getBinDistribution };



 /*Math.round(response.items[0].parsedPayload.distance / getFillLevel(id));
 
 {id: "C564D2",
   location: "WZC Andante papier ",
   height: 2700,
   maxFill: 80
  },
  {id: "C3ACA1",
   location: "WZC Andante glas ",
   height: 2700,
   maxFill: 80
  },
  {id: "C560F4",
   location: "WZC Andante PMD ",
   height: 2700,
   maxFill: 80
  },
  {id: "C3C16C",
   location: "WZC Andante restafval ",
   height: 2700,
   maxFill: 80
  },
  {id: "C54303",
   location: "WZC Ceres papier ",
   height: 2700,
   maxFill: 80
  },
  {id: "C53C6E",
   location: "Depot wervik glas GK-89",
   height: 1700,
   maxFill: 80
  },
  {id: "C3ACA2",
   location: "Depot wervik glas GK-88",
   height: 1700,
   maxFill: 80
  },
  {id: "C560EB",
   location: "Depot wervik glas 4946",
   height: 1230,
   maxFill: 80
  },
  {id: "C56EA2",
   location: "Depot wervik glas 4948",
   height: 1230,
   maxFill: 80
  },
  {id: "C56E1D",
   location: "WZC Ceres restafval",
   height: 2700,
   maxFill: 80
  },

 */

 
 