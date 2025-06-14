'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { createPlant, updatePlant } from '../api/plantData';

// clears out the form after the user submits the form
const initialState = {
  id: '',
  userProfileUid: '',
  name: '',
  region: '',
  season: '',
  type: '',
  description: '',
  picture: '',
  sun: '',
  liked: '',
};

// pulls in plant object details
function PlantForm({ obj = initialState }) {
  const [plantDetails, setPlantDetails] = useState(initialState);
  const router = useRouter();

  // brings plant data in for editing
  useEffect(() => {
    if (obj.id) setPlantDetails(obj);
  }, [obj]);

  // Grants access to the plant object, destructuring the name and the value of the form input
  const handlePlantUpdate = (e) => {
    const { name, value } = e.target;
    // calling the setPlantDetails modifying prevState and spreading it
    setPlantDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // when submit button is pressed this function runs and prevents the page from reloading
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...plantDetails, id: obj.id };
    // if the object already has an id then the updatePlant function is called and router pushes the updated information to the plant page-else it creates a new plant
    if (obj.id) {
      updatePlant(payload).then(() => router.push('/plants'));
    } else {
      createPlant(payload).then(() => {
        router.push('/plants');
      });
    }
  };
  return (
    <Form onSubmit={handleSubmit} className="text-black">
      <h2 className="text-white mt-5">{obj.id ? 'Update' : 'Create'} a Plant </h2>

      <FloatingLabel controlId="floatingInput1" label="Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Name"
          name="name"
          value={plantDetails.name}
          onChange={handlePlantUpdate}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput2" label="Region" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Region"
          name="region"
          value={plantDetails.region}
          onChange={handlePlantUpdate}
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput3" label="Season" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Season"
          name="season"
          value={plantDetails.season}
          onChange={handlePlantUpdate}
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput4" label="Type" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Type"
          name="type"
          value={plantDetails.type}
          onChange={handlePlantUpdate}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput5" label="Description" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Description"
          name="description"
          value={plantDetails.description}
          onChange={handlePlantUpdate}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput6" label="Picture" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Picture"
          name="picture"
          value={plantDetails.picture}
          onChange={handlePlantUpdate}
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput7" label="Sun" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Sun"
          name="sun"
          value={plantDetails.sun}
          onChange={handlePlantUpdate}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput8" label="Liked" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Favorite ?"
          name="liked"
          value={plantDetails.liked}
          onChange={handlePlantUpdate}
          required
        />
      </FloatingLabel>

      <Button type="submit">{obj.id ? 'Update' : 'Create'} a Plant </Button>
    </Form>
  );
}

PlantForm.propTypes = {
  // eslint-disable-next-line react/require-default-props
  obj: PropTypes.shape({
    id: PropTypes.string,
    userProfileUid: PropTypes.string,
    name: PropTypes.string,
    region: PropTypes.string,
    season: PropTypes.string,
    type: PropTypes.string,
    description: PropTypes.string,
    picture: PropTypes.string,
    sun: PropTypes.string,
    liked: PropTypes.string,
  }),
};

export default PlantForm;
