import React from 'react';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'


const BigfootData = (props) => {
  const [features, setFeatures] = useState(null)
  const [showComponent, setShowComponent] = useState(true);
  const handleShowComponent = () => setShowComponent(true);
  const handleHideComponent = () => setShowComponent(false);

  useEffect(() => {
    const getAPI = async () => {
    const url = `https://services2.arcgis.com/sJvSsHKKEOKRemAr/arcgis/rest/services/Bigfoot%20Locations/FeatureServer/0/query?where=STATE_NAME%20%3D%20'${props.stateSelected}'&outFields=name,descriptio,timestamp_,ObjectId,Lon,Lat,STATE_NAME,Year,ID,sourceCountry&outSR=4326&f=json`
    const response = await fetch(url);
    const data = await response.json();
    setFeatures(data["features"].sort((a,b) => (parseInt(b.attributes.Year) - parseInt(a.attributes.Year))))
  }; getAPI()
},[props.stateSelected]);

  const renderSightings = () => {
    const DisplayData=features.map(
      (element) =>{
            return(
              <tr>
              <td>{element.attributes.Year}</td>
                <td>{element.attributes.STATE_NAME}, {element.attributes.sourceCountry}</td>
                <td>Longitude: {element.attributes.Lon}, Latitude: {element.attributes.Lat}</td>
                <td>{element.attributes.descriptio}</td>
              </tr>
            );
          }
  )

  
      
  return(
    <Container>
      <div className='col-xs-3 mb-2'>
      <Button className="btn mr-1" onClick={handleShowComponent}>Show Data</Button> 
      <Button className="btn mr-1" variant="secondary" onClick={handleHideComponent}>Hide Data</Button>
      </div>
      {showComponent ?
      <div className="mt-3">
        <Container style={{height: '500px', overflow: 'auto'}}> 
            <table className="table table-striped">
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
             
        </Container>
        </div>
        :
        null
  }
      </Container>
    )
 }
      return (
        <div>
            {features && renderSightings()}
        </div>
      );
}

export default BigfootData;