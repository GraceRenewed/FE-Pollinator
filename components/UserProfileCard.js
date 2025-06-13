'use client';

import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function UserProfileCard({ userProfile }) {
  return (

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={userProfile.image} alt="/bee-thistle-flower.jpg" />
      <Card.Body>
        <Card.Title>User Profile </Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{userProfile.userName}</ListGroup.Item>
        <ListGroup.Item>{userProfile.email}</ListGroup.Item>
        <ListGroup.Item>{userProfile.region}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href={`/userProfile/edit/${userProfile.uid}`} passHref><Button id="edit" variant="info"> Edit </Button></Card.Link>
        <Card.Link href={`/userProfile/${userProfile.uid}`} passHref><Button id="delete" variant="info"> Delete </Button></Card.Link>
      </Card.Body>
    </Card>
  );
}

UserProfileCard.propTypes = {
  userProfile: PropTypes.shape({
    uid: PropTypes.string,
    userName: PropTypes.string,
    email: PropTypes.string,
    image: PropTypes.string,
    region: PropTypes.string,
  }).isRequired,
};

export default UserProfileCard;
