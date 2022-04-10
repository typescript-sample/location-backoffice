import { HealthController, LogController, Logger, Middleware, MiddlewareController, resources } from 'express-ext';
import { Db } from 'mongodb';
import { MongoChecker } from 'mongodb-extension';
import { createValidator } from 'xvalidators';
import { ArticleController, useArticleController } from './article';
import { BookableController, useBookableController } from './bookable';
import { EventController, useEventController } from './event';
import { LocationController, useLocationController } from './location';
import { TourController, useTourController } from './tour';

resources.createValidator = createValidator;

export interface ApplicationContext {
  health: HealthController;
  log: LogController;
  middleware: MiddlewareController;
  article: ArticleController;
  bookable: BookableController;
  event: EventController;
  location: LocationController;
  tour: TourController;
}
export function useContext(db: Db, logger: Logger, midLogger: Middleware): ApplicationContext {
  const log = new LogController(logger);
  const middleware = new MiddlewareController(midLogger);
  const mongoChecker = new MongoChecker(db);
  const health = new HealthController([mongoChecker]);

  const article = useArticleController(logger.error, db);
  const bookable = useBookableController(logger.error, db);
  const event = useEventController(logger.error, db);
  const location = useLocationController(logger.error, db);
  const tour = useTourController(logger.error, db);

  return { health, log, middleware, article, bookable, event, location, tour };
}
