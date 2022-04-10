import { Attributes, DateRange, Filter, Repository, Service } from 'onecore';

export interface TourFilter extends Filter {
  id?: string;
  name?: string;
  type?: string;
  status?: string[]|string;
  startTime?: Date|DateRange;
  endTime?: Date|DateRange;
  locations?: string[];
}
export interface Tour {
  id?: string;
  name?: string;
  type?: string;
  description?: string;
  status?: string;
  imageURL?: string;
  startTime?: Date;
  endTime?: Date;
  locations: string[]|Location[];
  customURL?: string;
}
export interface TourRepository extends Repository<Tour, string> {
}
export interface TourService extends Service<Tour, string, TourFilter> {
}

export const tourModel: Attributes = {
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
  startTime: {
    type: 'datetime',
  },
  endTime: {
    type: 'datetime',
  },
  locationId: {
    match: 'equal'
  }
};
