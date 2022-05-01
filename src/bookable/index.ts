import { Build } from 'express-ext';
import { Db } from 'mongodb';
import { buildQuery, SearchBuilder } from 'mongodb-extension';
import { Log, Manager, Search } from 'onecore';
import { Bookable, BookableFilter, bookableModel, BookableRepository, BookableService } from './bookable';
import { BookableController } from './bookable-controller';
export * from './bookable';
export { BookableController };

import { MongoBookableRepository } from './mongo-bookable-repository';

export class BookableManager extends Manager<Bookable, string, BookableFilter> implements BookableService {
  constructor(search: Search<Bookable, BookableFilter>, repository: BookableRepository) {
    super(search, repository);
  }
}
export function useBookableService(db: Db): BookableService {
  const builder = new SearchBuilder<Bookable, BookableFilter>(db, 'bookable', buildQuery, bookableModel);
  const repository = new MongoBookableRepository(db);
  return new BookableManager(builder.search, repository);
}
export function useBookableController(log: Log, db: Db, build?: Build<Bookable>): BookableController {
  return new BookableController(log, useBookableService(db), build);
}
