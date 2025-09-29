'use client';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { getSingleUser } from '../../api/userProfileData';
import UserProfileCard from '../../components/UserProfileCard';

export default function UserProfile() {
  // set state for user
  const [userProfile, setUserProfile] = useState([]);
  const { user } = useAuth();

  // function to get user profile
  const getUserProfile = () => {
    getSingleUser(user.uid).then(setUserProfile);
  };

  // make api call to get user profile
  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="text-white ms-5 details">{!userProfile || !userProfile.uid ? (
        <>
          <h2>You have not created your userProfile yet</h2>
          <Link href="/userProfile/new" passHref>
            <Button>Make a User Profile</Button>
          </Link>
        </>
      ) : (
        <><h5>{userProfile.name}</h5>
          <h6>
            <UserProfileCard key={userProfile.uid} userObj={userProfile} onUpdate={getUserProfile} />
          </h6>
        </>
      )}
      </div>
    </div>
  );
}
