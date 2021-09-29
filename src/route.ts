import { Application } from 'express';
import { ApplicationContext } from './context';

export function route(app: Application, ctx: ApplicationContext): void {
  app.get('/health', ctx.health.check);

  app.get('/locations', ctx.location.all);
  app.get('/locations/search', ctx.location.search);
  app.post('/locations/search', ctx.location.search);
  app.get('/locations/:id', ctx.location.load);
  app.post('/locations', ctx.location.insert);
  app.put('/locations/:id', ctx.location.update);
  app.patch('/locations/:id', ctx.location.patch);
  app.delete('/locations/:id', ctx.location.delete);

  app.get('/events/search', ctx.event.search);
  app.post('/events/search', ctx.event.search);
  app.get('/events/:id', ctx.event.load);
  app.post('/events', ctx.event.insert);
  app.put('/events/:id', ctx.event.update);
  app.patch('/events/:id', ctx.event.patch);
  app.delete('/events/:id', ctx.event.delete);

  app.get('/bookables/search', ctx.bookable.search);
  app.post('/bookables/search', ctx.bookable.search);
  app.get('/bookables/:id', ctx.bookable.load);
  app.post('/bookables', ctx.bookable.insert);
  app.put('/bookables/:id', ctx.bookable.update);
  app.patch('/bookables/:id', ctx.bookable.patch);
  app.delete('/bookables/:id', ctx.bookable.delete);
}
