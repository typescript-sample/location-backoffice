import { Build, Controller, Log } from 'express-ext';
import { Location, LocationFilter, LocationService, LocationUploadService } from './location';
import { UploadController } from '../controller';
export class LocationController extends Controller<Location, string, LocationFilter> {
  constructor(log: Log, service: LocationService, build?: Build<Location>) {
    super(log, service, undefined, build);
  }
}


export class LocationUploadController extends UploadController {
  constructor(
    log: Log,
    private service: LocationService,
    generateId: () => string,
    sizesCover: number[],
    sizesImage: number[]
  ) {
    super(log, service, service.getGalllery, generateId, sizesCover, sizesImage, 'id');
  }

}
 