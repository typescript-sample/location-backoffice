import { Attributes, DateRange, Filter, Repository, Service } from 'onecore';

export interface LocationFilter extends Filter {
  id?: string;
  username?: string;
  email?: string;
  phone?: string;
  dateOfBirth?: Date | DateRange;
}
export interface Location {
  id?: string;
  username?: string;
  email?: string;
  phone?: string;
  dateOfBirth?: string;
}
export interface LocationRepository extends Repository<Location, string> {
}
export interface LocationService extends Service<Location, string, LocationFilter> {
}

export const locationModel: Attributes = {
  id: {
    key: true
  },
  name: {
    required: true,
    q: true
  },
  type: {
    match: 'equal',
    required: true
  },
  description: {
    q: true
  },
  status: {
    match: 'equal'
  },
  imageURL: {},
  latitude: {
    type: 'number',
  },
  longitude: {
    type: 'number',
  }
};
