import React from 'react'
import mapboxgl from 'mapbox-gl';
import { useEffect } from 'react'

const Heatmap = () => {

  mapboxgl.accessToken = 'pk.eyJ1IjoiYmxhY2t6YWNoYnVybiIsImEiOiJja3g3eXUxbXAzNnd1Mm5xb2RxcXEwNmZwIn0.ZqBX3k2SFoDvJB1nbYfB4w';
  useEffect(() => { const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/blackzachburn/ckxgbn8rc1in214oeh707kbyt', // style URL
      center: [-100, 35], // starting position [lng, lat]
      zoom: 2 // starting zoom
  });
},[]);
  
  return (
    <div className="mt-3">
    <div height='500px'>
    <div id='map'>
    </div>
    </div>
    </div>
  )
}

export default Heatmap
