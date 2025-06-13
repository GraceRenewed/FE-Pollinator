'use client';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useAuth } from '../../../utils/context/authContext';
import { getSingleUser } from '../../../api/userProfileData';
import UserProfileCard from '../../../components/UserProfileCard';

export default function UserProfile({ params }) {
  // set state for user
  const [userProfile, setUserProfile] = useState([]);
  const { uid } = params;
  const { user } = useAuth();

  // function to get user profile
  const getUserProfile = () => {
    getSingleUser(uid).then(setUserProfile);
  };

  // make api call to get user profile
  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="text-white ms-5 details">
        <h5>{userProfile.obj}</h5>
        <h6>
          <UserProfileCard key={user.uid} userObj={user} onUpdate={getUserProfile} />
        </h6>
      </div>
    </div>
  );
}

UserProfile.propTypes = {
  params: PropTypes.objectOf({}).isRequired,
};
