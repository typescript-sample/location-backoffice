import { Db } from 'mongodb';
import { Repository } from 'mongodb-extension';
import { Location, locationModel, LocationRepository } from './location';

export class MongoLocationRepository extends Repository<Location, string> implements LocationRepository {
  constructor(db: Db) {
    super(db, 'location', locationModel);
  }
}
