import axios from 'axios';
import { BillingValues, PaymentValues, ShippingValues } from './types/formTypes';
import { Product } from './types/orderTypes';
import { Coordinates } from './types/locationTypes';

const getProductsUrl = `https://mocki.io/v1/59eb2e27-8414-4add-acf2-55d25692a20d`;
const postUserData = 'https://demo6921937.mockable.io/';
const geoApiBaseUrl = 'https://maps.googleapis.com/maps/api/geocode/json';
const key = 'AIzaSyCNwYQmw-kbeotD-GYimnmchEAUpE6-ALs';

type GetProductsResponse = {
  data: Product[];
};

export const fetchProducts = () => {
  return axios.get<GetProductsResponse>(getProductsUrl);
};

export const setUsersData = (shippingData: ShippingValues, billingData: BillingValues, paymentData: PaymentValues) => {
  return axios.post(postUserData, {
    shippingData: shippingData,
    billingData: billingData,
    paymentData: paymentData,
  });
};

export const getUserLocation = (coords: Coordinates) => {
  return axios.get(
    `${geoApiBaseUrl}?result_type=country|postal_code|locality|street_address&language=en&latlng=${coords.lat},${coords.lng}&key=${key}`,
  );
};
