import { Db } from 'mongodb';
import { Repository } from 'mongodb-extension';
import { Event, eventModel, EventRepository } from './event';

export class MongoEventRepository extends Repository<Event, string> implements EventRepository {
  constructor(db: Db, toPoint: (v: Event) => Event, fromPoint: (v: Event) => Event) {
    super(db, 'event', eventModel, toPoint, fromPoint);
  }
}
