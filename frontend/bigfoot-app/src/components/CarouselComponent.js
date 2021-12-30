import React from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'



const CarouselComponent = (props) => {
  return (
    <div className="background-image p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
              <div className="col-md fs-4"><img src="photos/bigfoot-tracker-logo.svg" height="50px" alt="bigfoot-tracker-logo"/></div>
              <br />
              <h1 className="display-5 fw-bold">The #1 Source for Bigfoot Information</h1>
              <p className="col-md fs-4">Say what you want about the legendary Bigfoot, the patron saint of forests across North America, but say it quietly: he could be closer than you think. Here you can view which sightings have been closest to you, read latest news about Bigfoot, and read about the hairy, humanoid creature.</p>
              <DropdownButton class="dropdown-menu" align="end" title="View Sightings" id="dropdown-menu-align-end">
                        <Dropdown.Item onClick={()=>props.setStateSelected("alabama")}>Alabama</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("alaska")}>Alaska</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("arizona")}>Arizona</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("arkansas")}>Arkansas</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("california")}>California</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Colorado")}>Colorado</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Connecticut")}>Connecticut</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Delaware")}>Delaware</Dropdown.Item>                     
                        <Dropdown.Item onClick={()=>props.setStateSelected("Florida")}>Florida</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Georgia")}>Georgia</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Hawaii")}>Hawaii</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Idaho")}>Idaho</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Illinois")}>Illinois</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Indiana")}>Indiana</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Iowa")}>Iowa</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Kansas")}>Kansas</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Kentucky")}>Kentucky</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Louisiana")}>Louisiana</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Maine")}>Maine</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Maryland")}>Maryland</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Massachusetts")}>Massachusetts</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Michigan")}>Michigan</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Minnesota")}>Minnesota</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Mississippi")}>Mississippi</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Missouri")}>Missouri</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Montana")}>Montana</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Nebraska")}>Nebraska</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Nevada")}>Nevada</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("New Hampshire")}>New Hampshire</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("New Jersey")}>New Jersey</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("New Mexico")}>New Mexico</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("New York")}>New York</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("North Carolina")}>North Carolina</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("North Dakota")}>North Dakota</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Ohio")}>Ohio</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Oklahoma")}>Oklahoma</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Oregon")}>Oregon</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Pennsylvania")}>Pennsylvania</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Rhode Island")}>Rhode Island</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("South Carolina")}>South Carolina</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("South Dakota")}>South Dakota</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Tennessee")}>Tennessee</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Texas")}>Texas</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Utah")}>Utah</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Vermont")}>Vermont</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Virginia")}>Virginia</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("washington")}>Washington</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("West Virginia")}>West Virginia</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Wisconsin")}>Wisconsin</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Wyoming")}>Wyoming</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </DropdownButton>  
          </div>
      </div>
  )
}

export default CarouselComponent
