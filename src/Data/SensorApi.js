

const fetchData = async (deviceID) => {
  try {
    const response = await fetch(`https://portal.io-things.eu/api/key/uplink/${deviceID}?size=1&start=1700553133&key=AIzaSyDl85J9L1_SUIo1QlY62moycjCTjhyxJC4`);
    const data = await response.json();
    console.log(data.items[0].parsedPayload.distance);
    return data.items[0].parsedPayload.distance;

  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};



export { fetchData };




 

 
 