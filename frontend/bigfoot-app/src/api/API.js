import axios from 'axios';
// import React, { useContext } from 'react';
// import UserContext from './contexts/UserContext';


export default axios.create({

    baseURL: "http://localhost:8000/user_sightings_api/sightings/",
    headers: {
        'Accept':'application/json',
        'Content-Type':'application/json',
        // 'Authorization': `JWT ${token}`
    }
})


  
//   const getSightings = (token) => {
//     return fetch('http://localhost:8000/user_sightings_api/sightings/', {
//       headers: {
//         'Accept':'application/json',
//         'Content-Type': 'application/json',
//         'Authorization': `JWT ${token}`
//       }
//     }).then(res => res)
//   };
  
//   const postSighting = (postObject) => {
//     return fetch('http://localhost:8000/user_sightings_api/sightings/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(postObject)
//     }).then(res => res)
//   };
  
//   export { getSightings, postSighting }