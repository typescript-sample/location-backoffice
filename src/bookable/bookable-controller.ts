import { Controller, Log } from 'express-ext';
import { Bookable, BookableFilter, BookableService } from './bookable';

export class BookableController extends Controller<Bookable, string, BookableFilter> {
  constructor(log: Log, service: BookableService) {
    super(log, service);
  }
}
