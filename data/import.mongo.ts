import { Db } from 'mongodb';
import { bookables, bookings, events, locationInfo, locations, rates, savedLocations, tours, trips } from './data.mongo';

export function createData(db: Db): void {
  db.collection('location').insertMany(locations);
  db.collection('locationInfo').insertMany(locationInfo);
  db.collection('locationRate').insertMany(rates);
  db.collection('savedLocations').insertMany(savedLocations);
  db.collection('event').insertMany(events);
  db.collection('tour').insertMany(tours);
  db.collection('trip').insertMany(trips);
  db.collection('bookable').insertMany(bookables);
  db.collection('booking').insertMany(bookings);
}
