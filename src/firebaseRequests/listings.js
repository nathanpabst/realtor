import axios from 'axios';
import constants from '../constants';

const getRequest = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/listings.json`)
      .then((results) => {
        const listings = [];
        if (results.data !== null) {
          Object.keys(results.data).forEach((key) => {
            results.data[key].id = key;
            listings.push(results.data[key]);
          });
        }
        resolve(listings);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default {getRequest};
