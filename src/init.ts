import { HealthController, LowCodeController, resources } from 'express-ext';
import { Db } from 'mongodb';
import { buildQuery, buildSort, MongoChecker, MongoLowCodeService, PointMapper, SearchBuilder } from 'mongodb-extension';
import { Bookable, BookableSM, Event, EventSM } from 'onecore';
import { Location, LocationSM } from 'onecore';
import { createValidator } from 'validator-x';
import { ApplicationContext } from './context';
import { locationModel, MongoLocationService } from './location';
import { LocationController } from './location/LocationController';
import { bookableModel, eventModel, tourModel } from './model';
import { Tour, TourSM } from './model';

export function log(msg: any): void {
  console.log(JSON.stringify(msg));
}
resources.createValidator = createValidator;
export function createContext(db: Db): ApplicationContext {
  const mongoChecker = new MongoChecker(db);
  const healthController = new HealthController([mongoChecker]);
  const build = buildQuery as any;

  const locationMapper = new PointMapper<Location>('geo', 'latitude', 'longitude');
  const locationService = new MongoLocationService(db, 'location', locationMapper);
  const searchLocation = new SearchBuilder<Location, LocationSM>(db, 'location', build, locationModel.attributes, locationMapper.fromPoint);
  const locationController = new LocationController(log, searchLocation.search, locationService);

  const eventMapper = new PointMapper<Event>('geo', 'latitude', 'longitude');
  const eventService = new MongoLowCodeService<Event, string, EventSM>(db, eventModel, build, buildSort, eventMapper.fromPoint, eventMapper.toPoint);
  const eventController = new LowCodeController<Event, string, EventSM>(log, eventService);

  const bookableService = new MongoLowCodeService<Bookable, string, BookableSM>(db, bookableModel, build);
  const bookableController = new LowCodeController(log, bookableService, build);

  const tourService = new MongoLowCodeService<Tour, string, TourSM>(db, tourModel, build);
  const tourController = new LowCodeController(log, tourService, build);

  const ctx: ApplicationContext = {
    health: healthController,
    location: locationController,
    event: eventController,
    bookable: bookableController,
    tour: tourController };
  return ctx;
}
