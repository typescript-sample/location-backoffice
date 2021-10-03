import { HealthController, LowCodeController } from 'express-ext';
import { Article, ArticleSM, Bookable, BookableSM, Event, EventSM } from 'onecore';
import { LocationController } from './location';
import { Tour, TourSM } from './model';

export interface ApplicationContext {
  health: HealthController;
  location?: LocationController;
  event?: LowCodeController<Event, string, EventSM>;
  bookable?: LowCodeController<Bookable, string, BookableSM>;
  tour?: LowCodeController<Tour, string, TourSM>;
  article?: LowCodeController<Article, string, ArticleSM>;
}
