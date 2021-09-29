import { Db } from 'mongodb';
import { MongoWriter, PointMapper } from 'mongodb-extension';
import { Location } from 'onecore';
import { locationModel } from './model';

export class MongoLocationService extends MongoWriter<Location, string> {
  constructor(protected db: Db, collectionName: string, mapper: PointMapper<Location>) {
    super(db, collectionName, locationModel.attributes, mapper.toPoint, mapper.fromPoint);
  }
  /*
  all(): Promise<Location[]> {
    return findWithMap<Location>(this.collection, {});
  }
  */
}
