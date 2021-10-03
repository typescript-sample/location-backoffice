import { Model } from 'onecore';
import { DateRange, SearchModel } from 'onecore';

export interface Tour {
  id?: string;
  startTime: Date;
  endTime: Date;
  locations: string[]|Location[];
  imageURL?: string;
}
export interface TourSM extends SearchModel {
  id?: string;
  startTime?: DateRange;
  endTime?: DateRange;
  locations?: string[];
}

export const eventModel: Model = {
  name: 'event',
  attributes: {
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
  }
};
export const bookableModel: Model = {
  name: 'bookable',
  attributes: {
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
    capacity: {
      type: 'number',
    },
    locationId: {
      match: 'equal'
    }
  }
};
export const tourModel: Model = {
  name: 'tour',
  attributes: {
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
  }
};

export const articleModel: Model = {
  name: 'article',
  attributes: {
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
    content: {
      q: true
    },
    status: {
      match: 'equal'
    },
    tags: {
      type: 'primitives'
    },
    imageURL: {},
  }
};
