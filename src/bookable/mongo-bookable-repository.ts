import { Db } from 'mongodb';
import { Repository } from 'mongodb-extension';
import { Bookable, bookableModel, BookableRepository } from './bookable';

export class MongoBookableRepository extends Repository<Bookable, string> implements BookableRepository {
  constructor(db: Db) {
    super(db, 'bookable', bookableModel);
  }
}
