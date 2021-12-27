import React from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'



const CarouselComponent = () => {
  return (
    <div class="background-image p-5 mb-4 bg-light rounded-3">
      <div class="container-fluid py-5">
              <div class="col-md fs-4"><img src="photos/bigfoot-tracker-logo.svg" height="50px" /></div>
              <br />
              <h1 class="display-5 fw-bold">The #1 Source for Bigfoot Information</h1>
              <p class="col-md fs-4">Say what you want about the legendary Bigfoot, the patron saint of forests across North America, but say it quietly: he could be closer than you think. Here you can view which sightings have been closest to you, read latest news about Bigfoot, and read about the hairy, humanoid creature.</p>
              <DropdownButton class="btn btn-primary btn-lg" align="end" title="View Sightings" id="dropdown-menu-align-end">
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
              </DropdownButton>   
          </div>
      </div>
  )
}

export default CarouselComponent
