export interface IViaCepV2 {
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  service: string;
  location: ILocation;
}

export interface ILocation {
  type: string;
  coordinates: ICoordinates;
}

export interface ICoordinates {
  longitude: string;
  latitude: string;
}
