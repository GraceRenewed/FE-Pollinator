'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getSingleUser } from '../../../../api/userProfileData';
import UserProfileCard from '../../../../components/UserProfileCard';
import { useAuth } from '../../../../utils/context/authContext';

export default function ViewUserProfile() {
  // * Set state for verses
  const [userProfile, setUserProfile] = useState([]);
  // *Get user ID using useAuth hook
  const { user } = useAuth();

  // *Function to get all verses
  const getTheUserProfile = () => {
    getSingleUser(user.uid).then(setUserProfile);
  };

  // Api call to get all verses
  useEffect(() => {
    getTheUserProfile();
  }, [user.uid]);

  return (
    <div className="text-center my-4">
      <Link href="/userProfile/new" passHref>
        <Button>Add a Profile</Button>
      </Link>
      <div className="d-flex flex-wrap">{userProfile.length === 0 ? <h2>You have not created a profile yet</h2> : <UserProfileCard key={user.uid} userObj={user} onUpdate={getTheUserProfile} />}</div>
    </div>
  );
}
