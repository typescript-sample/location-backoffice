import { Build, Controller, Log } from 'express-ext';
import { Bookable, BookableFilter, BookableService } from './bookable';

export class BookableController extends Controller<Bookable, string, BookableFilter> {
  constructor(log: Log, service: BookableService, build?: Build<Bookable>) {
    super(log, service, undefined, build);
  }
}
