import { Attributes, DateRange, Filter, Repository, Service } from 'onecore';

export interface EventFilter extends Filter {
  id?: string;
  name?: string;
  type?: string;
  status?: string[]|string;
  startTime?: Date|DateRange;
  endTime?: Date|DateRange;
  latitude?: number;
  longitude?: number;
  locationId?: string[]|string;
}
export interface Event {
  id?: string;
  name?: string;
  type?: string;
  description?: string;
  status?: string;
  imageURL?: string;
  startTime?: Date;
  endTime?: Date;
  latitude?: number;
  longitude?: number;
  customURL?: string;
  locationId?: string;
}
export interface EventRepository extends Repository<Event, string> {
}
export interface EventService extends Service<Event, string, EventFilter> {
}

export const eventModel: Attributes = {
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
  latitude: {
    type: 'number',
  },
  longitude: {
    type: 'number',
  },
  locationId: {
    match: 'equal'
  }
};
