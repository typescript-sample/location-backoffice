import { Db } from 'mongodb';
import { buildQuery, SearchBuilder } from 'mongodb-extension';
import { Log, Manager, Search } from 'onecore';
import { Location, LocationFilter, locationModel, LocationRepository, LocationService } from './location';
import { LocationController } from './location-controller';
export * from './location';
export { LocationController };

import { MongoLocationRepository } from './mongo-location-repository';

export class LocationManager extends Manager<Location, string, LocationFilter> implements LocationService {
  constructor(search: Search<Location, LocationFilter>, repository: LocationRepository) {
    super(search, repository);
  }
}
export function useLocationService(db: Db): LocationService {
  const builder = new SearchBuilder<Location, LocationFilter>(db, 'location', buildQuery, locationModel);
  const repository = new MongoLocationRepository(db);
  return new LocationManager(builder.search, repository);
}
export function useLocationController(log: Log, db: Db): LocationController {
  return new LocationController(log, useLocationService(db));
}
