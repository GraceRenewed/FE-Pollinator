'use client';

import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import ListGroup from 'react-bootstrap/ListGroup';
import { deletePlant } from '../api/plantData';
import { useAuth } from '../utils/context/authContext';

function PlantCard({ plantObj, onUpdate }) {
  const { user } = useAuth;
  //
  // When plant is deleted this will remove the book and rerender the view
  const deleteThePlant = () => {
    if (window.confirm(`Delete ${plantObj.name}?`)) {
      deletePlant(plantObj.id).then(() => onUpdate());
    }
  };
  const isOwner = !plantObj.id || plantObj.userProfileUid === user.userProfileUid;

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={plantObj.picture} alt="/purple-flower.jpg" />
      <Card.Body>
        <Card.Title>{plantObj.name}</Card.Title>
        <p className="card-text bold">
          {plantObj.liked && (
            <span>
              🤍
              <br />
            </span>
          )}{' '}
        </p>
        <Card.Text>
          {plantObj.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{plantObj.type}</ListGroup.Item>
        <ListGroup.Item>{plantObj.season}</ListGroup.Item>
        <ListGroup.Item>{plantObj.sun}</ListGroup.Item>
        <ListGroup.Item>{plantObj.region}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        {isOwner && (
        <Link href={`/plants/edit/${plantObj.id}`} passHref>
          <Button id="edit" className="m-2">
            Edit
          </Button>
        </Link>
        )}
        {isOwner && (
          <Button id="delete" onClick={deleteThePlant} className="m-2">
            DELETE
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

PlantCard.propTypes = {
  plantObj: PropTypes.shape({
    id: PropTypes.string,
    userProfileUid: PropTypes.string,
    name: PropTypes.string,
    region: PropTypes.string,
    season: PropTypes.string,
    type: PropTypes.string,
    description: PropTypes.string,
    picture: PropTypes.string,
    sun: PropTypes.string,
    liked: PropTypes.bool,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default PlantCard;
