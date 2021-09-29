import { HealthController, LowCodeController } from 'express-ext';
import { Bookable, BookableSM, Event, EventSM } from 'onecore';
import { LocationController } from './location';

export interface ApplicationContext {
  health: HealthController;
  location?: LocationController;
  event?: LowCodeController<Event, string, EventSM>;
  bookable?: LowCodeController<Bookable, string, BookableSM>;
}
