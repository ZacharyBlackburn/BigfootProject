import React from 'react'
import Accordion from 'react-bootstrap/Accordion'

const BigfootTypes = () => {
  return (
    <div>
      <Accordion defaultActiveKey="0" flush>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Bigfoot</Accordion.Header>
    <Accordion.Body>
    Perhaps the most common shorthand for Sasquatch, the term "Bigfoot" first came about in 1958. Gerald Crew, a Bluff Creek local in Del Norte County, California, was featured in the Humboldt Times for the cast he made of large footprints found near his bulldozer. Fellow Bluff Creek locals began referring to the mysterious maker of the tracks as "Big Foot," which Humboldt Times editor Andrew Genzoli decided to stylize as "Bigfoot." The term has earned considerable recognition since then, particularly in its use by the Bigfoot Field Researchers Organization, one of the most widely respected groups of Bigfooters.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Sasquatch</Accordion.Header>
    <Accordion.Body>
    The term "Sasquatch" has become the most universally respected name for the enigmatic primate/person hybrid. Derived from the Halkomelem dialectal word "Sésquac," meaning "wild man," the word was first used by the Coast Salish peoples. These indigenous peoples inhabited the Fraser Valley in the Pacific Northwest and parts of Vancouver Island, British Columbia—two regions that have yielded more recorded Sasquatch sightings than anywhere else.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Samsquanch</Accordion.Header>
    <Accordion.Body>
      Canadian nickname for a Sasquatch.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4">
    <Accordion.Header>Yeti</Accordion.Header>
    <Accordion.Body>
    The Yeti, in Himalayan folklore, is an ape-like creature purported to inhabit the Himalayan mountain range in Asia. In western popular culture, the creature is commonly referred to as the Abominable Snowman.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
    </div>
  )
}

export default BigfootTypes
