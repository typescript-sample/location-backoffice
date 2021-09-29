import { Request, Response } from 'express';
import { GenericSearchController, SearchResult } from 'express-ext';
import { Location, LocationSM } from 'onecore';
import { LocationService } from './LocationService';

export class LocationController extends GenericSearchController<Location, string, LocationSM> {
  constructor(log: (msg: string, ctx?: any) => void, find: (s: LocationSM, limit?: number, skip?: number | string, fields?: string[]) => Promise<SearchResult<Location>>, private locationService: LocationService) {
    super(log, find, locationService, {} as any);
    this.all = this.all.bind(this);
  }
  all(req: Request, res: Response) {
    this.locationService.all()
      .then(locations => res.status(200).json(locations).end).catch(err => res.status(500).end(err));
  }
}
