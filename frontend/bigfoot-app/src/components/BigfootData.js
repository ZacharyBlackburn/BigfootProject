import React from 'react';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';


const BigfootData = () => {
  const [features, setFeatures] = useState(null)

  useEffect(() => {
    const getAPI = async () => {
    const url = "https://services2.arcgis.com/sJvSsHKKEOKRemAr/arcgis/rest/services/Bigfoot%20Locations/FeatureServer/0/query?where=1%3D1&outFields=name,descriptio,timestamp_,ObjectId,Lon,Lat,STATE_NAME,Year,ID,sourceCountry&outSR=4326&f=json"
    const response = await fetch(url);
    const data = await response.json();
    setFeatures(data["features"])
  }; getAPI()
},[]);

  const renderSightings = () => {
    const DisplayData=features.map(
      (element)=>{
          return(
            <tr>
            <td>{element.attributes.Year}</td>
              <td>{element.attributes.STATE_NAME}, {element.attributes.sourceCountry}</td>
              <td>Longitude: {element.attributes.Lon}, Latitude: {element.attributes.Lat}</td>
              <td>{element.attributes.descriptio}</td>
            </tr>
          )
      }
  )
      
  return(
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                      <th>Year</th>
                      <th>State, Country</th>
                      <th>Latitude/Longitude</th>
                      <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                 
                    
                    {DisplayData}
                    
                </tbody>
            </table>
             
        </div>
    )
 }
      return (
        <div>
            {features && renderSightings()}
        </div>
      );
}

export default BigfootData;