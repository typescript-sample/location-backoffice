import { Controller, Log } from 'express-ext';
import { Event, EventFilter, EventService } from './event';

export class EventController extends Controller<Event, string, EventFilter> {
  constructor(log: Log, service: EventService) {
    super(log, service);
  }
}
