import { Db } from 'mongodb';
import { MongoWriter, PointMapper } from 'mongodb-extension';
import { Location } from './Location';
import { locationModel } from './model';

export class MongoLocationService extends MongoWriter<Location, string> {
  constructor(db: Db, collectionName: string, mapper: PointMapper<Location>) {
    super(db, collectionName, locationModel.attributes, mapper.toPoint, mapper.fromPoint);
  }
}
