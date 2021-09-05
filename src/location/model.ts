import { Model } from 'mongodb-extension';

export const locationModel: Model = {
  name: 'location',
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
    }
  }
};
