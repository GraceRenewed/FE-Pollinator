'use client';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import UserProfileForm from '../../../components/UserProfileForm';
import { getSingleUser } from '../../../api/userProfileData';

// setup function that allows a User to be edited
export default function EditUser({ params }) {
  const [editUser, setEditUser] = useState({});
  // gets the uid
  const { uid } = params;

  // makes a call to the API to get the user data
  useEffect(() => {
    getSingleUser(uid).then(setEditUser);
  }, [uid]);

  // pass object to form
  return <UserProfileForm obj={editUser} />;
}

EditUser.propTypes = {
  params: PropTypes.objectOf({}).isRequired,
};
