import React from 'react'

const SightingsTable = () => {
  const [features, setFeatures] = useState(null)

  useEffect(() => {
    const getAPI = async () => {
    const url = "https://services2.arcgis.com/sJvSsHKKEOKRemAr/arcgis/rest/services/Bigfoot%20Locations/FeatureServer/0/query?where=1%3D1&outFields=name,descriptio,timestamp_,ObjectId,Lon,Lat,STATE_NAME,Year,ID,sourceCountry&outSR=4326&f=json"
    const response = await fetch(url);
    const data = await response.json();
    setFeatures(data["features"])
  }; getAPI()
},[]);
  
  return (
    <div>
      
    </div>
  )
}

export default SightingsTable
