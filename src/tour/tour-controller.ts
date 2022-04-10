import { Controller, Log } from 'express-ext';
import { Tour, TourFilter, TourService } from './tour';

export class TourController extends Controller<Tour, string, TourFilter> {
  constructor(log: Log, service: TourService) {
    super(log, service);
  }
}
