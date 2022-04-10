import { Db } from 'mongodb';
import { buildQuery, SearchBuilder } from 'mongodb-extension';
import { Log, Manager, Search } from 'onecore';
import { Tour, TourFilter, tourModel, TourRepository, TourService } from './tour';
import { TourController } from './tour-controller';
export * from './tour';
export { TourController };

import { MongoTourRepository } from './mongo-tour-repository';

export class TourManager extends Manager<Tour, string, TourFilter> implements TourService {
  constructor(search: Search<Tour, TourFilter>, repository: TourRepository) {
    super(search, repository);
  }
}
export function useTourService(db: Db): TourService {
  const builder = new SearchBuilder<Tour, TourFilter>(db, 'tour', buildQuery, tourModel);
  const repository = new MongoTourRepository(db);
  return new TourManager(builder.search, repository);
}
export function useTourController(log: Log, db: Db): TourController {
  return new TourController(log, useTourService(db));
}
