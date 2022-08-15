import * as axios from 'axios';

const getProductsUrl = `https://mocki.io/v1/59eb2e27-8414-4add-acf2-55d25692a20d`;
const postUserData = 'https://demo6921937.mockable.io/';

export const fetchProducts = () => {
  return axios.get(getProductsUrl);
};

export const setUsersData = (shippingData, billingData, paymentData) => {
  return axios.post(postUserData, {
    shippingData: shippingData,
    billingData: billingData,
    paymentData: paymentData,
  });
};

export const getUserLocation = (coords) => {
  return axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?result_type=country|postal_code|locality|street_address&language=en&latlng=${52.2262028},${21.0108905}&key=AIzaSyCNwYQmw-kbeotD-GYimnmchEAUpE6-ALs`,
  );
};
