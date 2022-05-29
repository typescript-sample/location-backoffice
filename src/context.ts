import { Storage } from '@google-cloud/storage';
import { HealthController, LogController, Logger, Middleware, MiddlewareController, ModelConfig, resources, useBuild } from 'express-ext';
import { deleteFile, GoogleStorageRepository, map, StorageConfig, useBuildUrl } from 'google-storage';
import { LocationUploadController } from 'location/location-controller';
import { Db } from 'mongodb';
import { MongoChecker } from 'mongodb-extension';
import { StorageConf } from 'one-storage';
import shortid from 'shortid';
import { UploadController } from 'upload-express';
import { createValidator } from 'xvalidators';
import { ArticleController, useArticleController } from './article';
import { BookableController, useBookableController } from './bookable';
import { EventController, useEventController } from './event';
import { LocationController, useLocationController, useLocationUploadController } from './location';
import { TourController, useTourController } from './tour';

resources.createValidator = createValidator;

export interface ApplicationContext {
  health: HealthController;
  log: LogController;
  middleware: MiddlewareController;
  article: ArticleController;
  location: LocationController;
  event: EventController;
  bookable: BookableController;
  tour: TourController;
  locationUpload: LocationUploadController;
}

export interface ConfigStorage {
  bucket: string;
  storage: StorageConf;
}


export function useContext(db: Db, logger: Logger, midLogger: Middleware, conf: ModelConfig, configStorage: ConfigStorage): ApplicationContext {
  const log = new LogController(logger);
  const middleware = new MiddlewareController(midLogger);
  const mongoChecker = new MongoChecker(db);
  const health = new HealthController([mongoChecker]);

  const build = useBuild(conf, generate);
  const article = useArticleController(logger.error, db);
  const sizesCover: number[] = [576, 768];
  const sizesImage: number[] = [40, 400];
  const storageConfig: StorageConfig = { bucket: configStorage.bucket, public: true };
  const storage = new Storage();
  const bucket = storage.bucket(configStorage.bucket);
  const storageRepository = new GoogleStorageRepository(bucket, storageConfig, map);
  const location = useLocationController(logger.error, db, storageRepository, deleteFile, generate, useBuildUrl(configStorage.bucket), sizesCover, sizesImage, build);
  const locationUpload = useLocationUploadController(logger.error, db, storageRepository, deleteFile, generate, useBuildUrl(configStorage.bucket), sizesCover, sizesImage);
  const event = useEventController(logger.error, db);
  const bookable = useBookableController(logger.error, db);
  const tour = useTourController(logger.error, db);

  return { health, log, middleware, article, location, event, bookable, tour, locationUpload };
}
export function generate(): string {
  return shortid.generate();
}
