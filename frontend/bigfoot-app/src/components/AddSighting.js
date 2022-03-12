import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import API from '../api/API';

const AddSighting = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [description, setDescription] = useState("");
  const [sightingId, setSightingId] = useState(null);
  const [sightings, setSightings] = useState([]);

  useEffect(() => {
    refreshSightings();
  }, []);

  const refreshSightings = () => {
    API.get("/", {params:{}, headers: {Authorization: `JWT ${localStorage.getItem("auth-user")}`}})
      .then((res) => {
        setSightings(res.data);
      })
      .catch(console.error);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let item = { title, year, month, description };
    API.post("/", item, {headers: {Authorization: `JWT ${localStorage.getItem("auth-user")}`}}).then(() => refreshSightings());
  };

  const onUpdate = (id) => {
    let item = { title };
    API.patch(`/${id}/`, item, {headers: {Authorization: `JWT ${localStorage.getItem("auth-user")}`}}).then((res) => refreshSightings());
  };

  const onDelete = (id) => {
    API.delete(`/${id}/`, {headers: {Authorization: `JWT ${localStorage.getItem("auth-user")}`}}).then((res) => refreshSightings());
  };

  function selectSighting(id) {
    let item = sightings.filter((sighting) => sighting.id === id)[0];
    setTitle(item.title);
    setYear(item.year);
    setMonth(item.month);
    setDescription(item.description);
    setSightingId(item.id);
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <h3 className="float-left">Log a new Sighting</h3>
          <Form onSubmit={onSubmit} className="mt-4">
            <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Label>{sightingId}Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title of sighting"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicYear">
              <Form.Label>Year</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Year of Sighting"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicMonth">
              <Form.Label>Month</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Month of the Sighting"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Description of the Sighting"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>

            <div className="float-right">
              <Button
                variant="primary"
                type="submit"
                onClick={onSubmit}
                className="mx-2"
              >
                Save
              </Button>
              <Button
                variant="primary"
                type="button"
                onClick={() => onUpdate(sightingId)}
                className="mx-2"
              >
                Update
              </Button>
            </div>
          </Form>
        </div>
        <div className="col-md-8 m">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Sighting Title</th>
                <th scope="col">Year</th>
                <th scope="col">Month</th>
                <th scope="col">Description</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {sightings.map((sighting, index) => {
                return (
                  <tr key="">
                    <th scope="row">{sighting.id}</th>
                    <td>{sighting.title}</td>
                    <td>{sighting.year}</td>
                    <td>{sighting.month}</td>
                    <td>{sighting.description}</td>
                    <td>
                      <p className="text-danger d-inline mx-3"
                        onClick={() => selectSighting(sighting.id)}
                      >Edit</p>
                      <p className="text-danger d-inline mx-3"
                        onClick={() => onDelete(sighting.id)}
                      >Delete</p>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddSighting;