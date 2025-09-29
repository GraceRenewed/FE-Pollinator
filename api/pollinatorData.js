import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getAllPollinators = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/Pollinator/`, {
    method: 'GET',
    headers: {
      'Content-Type':
    'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getPollinatorsByPlantId = (plantId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/Pollinator/plant/${plantId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getPollinatorsByGardenId = (gardenId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/Pollinators/garden${gardenId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getPollinatorsById = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/Pollinators/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const createPollinator = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/Pollinator/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updatePollinator = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/Pollinator/${payload.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const deletePollinator = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/Pollinator/${id}`, {
    method: 'DELETE',
    headers: { 'Conent-Type': 'application/json' },
  })
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getAllPollinators, getPollinatorsByPlantId, getPollinatorsByGardenId, getPollinatorsById, createPollinator, updatePollinator, deletePollinator,
};
