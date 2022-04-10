import { Db } from 'mongodb';
import { Repository } from 'mongodb-extension';
import { Tour, tourModel, TourRepository } from './tour';

export class MongoTourRepository extends Repository<Tour, string> implements TourRepository {
  constructor(db: Db) {
    super(db, 'tour', tourModel);
  }
}
