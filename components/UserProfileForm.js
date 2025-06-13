'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import useAuth from '../utils/context/authContext';
import { updateUser, createUser } from '../api/userProfileData';

// clears out the form after the user submits the form
const initialState = {
  userName: '',
  email: '',
  image: '',
  region: '',
};

// pulls in user and object details
function UserProfileForm({ obj = initialState }) {
  const { user } = useAuth();
  const [userDetails, setUserDetails] = useState(initialState);
  const router = useRouter();

  // brings user data in for editing their profile
  useEffect(() => {
    if (obj.uid) setUserDetails(obj);
  }, [obj]);

  // Grants access to the user object, destructuring the name and the value of the form input
  const handleUserUpdate = (e) => {
    const { name, value } = e.target;
    // calling setUserDetails modifying prevState and spreading it
    setUserDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // when submit button is pressed this function runs and prevents page from reloading
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...userDetails, uid: user.uid };
    // if the object already has an id then the updateUser function is called router pushes the updated information to the user page-else it creates a new user
    if (obj.uid) {
      updateUser(payload).then(() => router.push('/userProfile'));
    } else {
      createUser(payload).then(() => {
        router.push('/userProfile');
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="text-black">
      <h2 className="text-white mt-5">{obj.uid ? 'Update' : 'Create'} Account Information</h2>

      <FloatingLabel controlId="floatingInput1" label="User Name" className="mb-3">
        <Form.Control type="text" placeholder="User Name" onChange={handleUserUpdate} required />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput2" label="email" className="mb-3">
        <Form.Control type="text" placeholder="E-mail" onChange={handleUserUpdate} required />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput3" label="Image" className="mb-3">
        <Form.Control type="text" placeholder="Profile Image" onChange={handleUserUpdate} />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput4" label="Region" className="mb-3">
        <Form.Control type="text" placeholder="Region" onChange={handleUserUpdate} />
      </FloatingLabel>

      <Button type="submit">{obj.uid ? 'Update' : 'Create'} User Profile </Button>
    </Form>
  );
}

UserProfileForm.propTypes = {
  // eslint-disable-next-line react/require-default-props
  obj: PropTypes.shape({
    uid: PropTypes.string,
    userName: PropTypes.string,
    email: PropTypes.string,
    image: PropTypes.string,
    region: PropTypes.string,
  }),
};

export default UserProfileForm;
