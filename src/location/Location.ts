import { SearchModel } from 'express-ext';

export interface Track {
  createdBy?: string;
  createdAt?: Date;
  updatedBy?: string;
  updatedAt?: Date;
  version?: number;
}
export interface Location {
  id?: string;
  type?: string;
  name?: string;
  description?: string;
  longitude?: number;
  latitude?: number;
  thumbnail?: string;
  info?: LocationInfo;
}
export interface LocationInfo {
  viewCount: number;
  rate: number;
  rate1: number;
  rate2: number;
  rate3: number;
  rate4: number;
  rate5: number;
}
export interface LocationSM extends SearchModel {
  id?: string;
  name?: string;
  description?: string;
  type?: string;
}
