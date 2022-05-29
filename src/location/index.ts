import { Build } from 'express-ext';
import { StorageRepository } from 'google-storage';
import { Db } from 'mongodb';
import { buildQuery, PointMapper, SearchBuilder } from 'mongodb-extension';
import { BuildUrl, Delete, Generate, Log, Manager, Search } from 'onecore';
import { GenericSearchStorageService, ModelConf, StorageConf, UploadInfo } from '../storage';
import { Location, LocationFilter, locationModel, LocationRepository, LocationService } from './location';
import { LocationController, LocationUploadController } from './location-controller';
import { MongoLocationRepository } from './mongo-location-repository';

export * from './location';
export { LocationController };


export class LocationManager extends GenericSearchStorageService<Location, string, LocationFilter> implements LocationService {
  constructor(search: Search<Location, LocationFilter>, repository: LocationRepository,
    storage: StorageRepository,
    deleteFile: Delete,
    generateId: Generate,
    buildUrl: BuildUrl,
    sizesCover: number[],
    sizesImage: number[],
    config?: StorageConf,
    model?: ModelConf) {
    super(search, repository, storage, deleteFile, generateId, buildUrl, sizesCover, sizesImage, config, model);
  }
  getGalllery(id: string): Promise<UploadInfo[]> {
    return this.repository.load(id).then((user) => {
      if (user) {
        delete (user as any)['settings'];
        return (user as any)[this.model.gallery];
      }
      return [];
    });
  }
}
export function useLocationService(db: Db, storage: StorageRepository, deleteFile: Delete, generateId: Generate, buildUrl: BuildUrl, sizesCover: number[],
  sizesImage: number[], config?: StorageConf, model?: ModelConf): LocationService {
  const mapper = new PointMapper<Location>('geo', 'latitude', 'longitude');
  const builder = new SearchBuilder<Location, LocationFilter>(db, 'location', buildQuery, locationModel, mapper.fromPoint);
  const repository = new MongoLocationRepository(db, mapper.toPoint, mapper.fromPoint);
  return new LocationManager(builder.search, repository, storage, deleteFile, generateId, buildUrl, sizesCover, sizesImage, model, config);
}
export function useLocationController(log: Log, db: Db, storage: StorageRepository, deleteFile: Delete, generateId: Generate, buildUrl: BuildUrl, sizesCover: number[],
  sizesImage: number[], build?: Build<Location>, config?: StorageConf, model?: ModelConf): LocationController {
  return new LocationController(log, useLocationService(db, storage, deleteFile, generateId, buildUrl, sizesCover, sizesImage, config, model), build);
}
export function useLocationUploadController(log: Log, db: Db, storage: StorageRepository, deleteFile: Delete, generateId: Generate, buildUrl: BuildUrl, sizesCover: number[],
  sizesImage: number[], config?: StorageConf, model?: ModelConf): LocationUploadController {
  return new LocationUploadController(log, useLocationService(db, storage, deleteFile, generateId, buildUrl, sizesCover, sizesImage, config, model), generateId, sizesCover, sizesImage);
}
