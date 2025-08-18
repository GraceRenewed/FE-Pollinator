'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getAllPlants } from '../../api/plantData';
import PlantCard from '../../components/PlantCard';
// import { useAuth } from '../../../utils/context/authContext';

export default function ViewAllPlants() {
// Set state for plants
  const [plants, setPlants] = useState([]);

  // const { user } = useAuth();

  const getAllThePlants = () => {
    getAllPlants().then(setPlants);
  };

  useEffect(() => {
    getAllThePlants();
  }, []);

  return (
    <div className="text-center my-4">
      <Link href="/plants/new" passHref>
        <Button>Add a Plant</Button>
      </Link>
      <div className="d-flex flex-wrap">{plants.length === 0 ? <h2>Oh no there are no plants!</h2> : plants.map((plant) => <PlantCard key={plant.id} plantObj={plant} onUpdate={getAllThePlants} />)}</div>
    </div>
  );
}
