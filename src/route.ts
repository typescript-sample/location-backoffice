import {Application} from 'express';
import {ApplicationContext} from './context';

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
}
