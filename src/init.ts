import { HealthController, resources } from 'express-ext';
import { Db } from 'mongodb';
import { buildQuery, MongoChecker, PointMapper, SearchBuilder } from 'mongodb-extension';
import { createValidator } from 'validator-x';
import { ApplicationContext } from './context';
import { Location, locationModel, LocationSM, MongoLocationService } from './location';
import { LocationController } from './location/LocationController';

export function log(msg: any): void {
  console.log(JSON.stringify(msg));
}
resources.createValidator = createValidator;
export function createContext(db: Db): ApplicationContext {
  const mapper = new PointMapper('geo', 'latitude', 'longitude');
  const locationService = new MongoLocationService(db, 'location', mapper);
  const searchLocation = new SearchBuilder<Location, LocationSM>(db, 'location', buildQuery as any, locationModel.attributes, mapper.fromPoint);
  const s = searchLocation.search;
  const locationController = new LocationController(null, s, locationService);
  const mongoChecker = new MongoChecker(db);
  const healthController = new HealthController([mongoChecker]);
  const ctx: ApplicationContext = { location: locationController, health: healthController };
  return ctx;
}
