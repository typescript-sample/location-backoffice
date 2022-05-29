import { UploadGallery } from 'one-storage';
import { Attributes, DateRange, Filter, Repository, Service } from 'onecore';
import { UploadData, UploadInfo } from 'upload-express';

export interface LocationFilter extends Filter {
  id?: string;
  username?: string;
  email?: string;
  phone?: string;
  dateOfBirth?: Date | DateRange;
}
export interface Location {
  id?: string;
  username?: string;
  email?: string;
  phone?: string;
  dateOfBirth?: string;
}
export interface LocationRepository extends Repository<Location, string> {
}
export interface LocationService extends Service<Location, string, LocationFilter> {
  uploadCoverImage(id: string, data: UploadData[], sizes?: number[]): Promise<string>;
  uploadImage(id: string, data: UploadData[], sizes?: number[]): Promise<string>;
  uploadGalleryFile(uploadGallery: UploadGallery<string>): Promise<UploadInfo[]>;
  updateGallery(id: string, data: UploadInfo[]): Promise<boolean>;
  deleteGalleryFile(id: string, url: string): Promise<boolean>;
  getGalllery(id: string): Promise<UploadInfo[]>;
  addExternalResource(id: string, data: UploadInfo): Promise<boolean>;
  deleteExternalResource(id: string, url: string): Promise<boolean>;
}

export const locationModel: Attributes = {
  id: {
    key: true
  },
  name: {
    required: true,
    q: true
  },
  type: {
    match: 'equal',
    required: true
  },
  description: {
    q: true
  },
  status: {
    match: 'equal'
  },
  imageURL: {},
  latitude: {
    type: 'number',
  },
  longitude: {
    type: 'number',
  }
};
