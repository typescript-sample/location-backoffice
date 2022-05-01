import { Build } from 'express-ext';
import { Db } from 'mongodb';
import { buildQuery, PointMapper, SearchBuilder } from 'mongodb-extension';
import { Log, Manager, Search } from 'onecore';
import { Event, EventFilter, eventModel, EventRepository, EventService } from './event';
import { EventController } from './event-controller';
export * from './event';
export { EventController };

import { MongoEventRepository } from './mongo-event-repository';

export class EventManager extends Manager<Event, string, EventFilter> implements EventService {
  constructor(search: Search<Event, EventFilter>, repository: EventRepository) {
    super(search, repository);
  }
}
export function useEventService(db: Db): EventService {
  const mapper = new PointMapper<Event>('geo', 'latitude', 'longitude');
  const builder = new SearchBuilder<Event, EventFilter>(db, 'event', buildQuery, eventModel, mapper.fromPoint);
  const repository = new MongoEventRepository(db, mapper.toPoint, mapper.fromPoint);
  return new EventManager(builder.search, repository);
}
export function useEventController(log: Log, db: Db, build?: Build<Event>): EventController {
  return new EventController(log, useEventService(db), build);
}
