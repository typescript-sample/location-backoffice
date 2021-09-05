import { HealthController } from 'express-ext';
import { LocationController } from './location';

export interface ApplicationContext {
  location: LocationController;
  health: HealthController;
}
