import { LocationActionTypes } from '../redux/ducks/location';

export type Coordinates = { lat: number | null; lng: number | null };

export type UserLocation = {
  flat: string;
  street: string;
  city: string;
  country: string;
  zip: string;
};

export type LocationState = {
  userLocation: UserLocation;
  coords: Coordinates;
};

export type GetUserLocationAction = {
  type: LocationActionTypes.GET_USER_LOCATION;
  payload: UserLocation;
};
export type GetUserCoordinatesAction = {
  type: LocationActionTypes.GET_USER_COORDINATES;
  payload: Coordinates;
};

export type LocationActions = GetUserCoordinatesAction | GetUserLocationAction;
