import { Application } from 'express';
import multer from 'multer';
import { ApplicationContext } from './context';

export function route(app: Application, ctx: ApplicationContext): void {
  const parser = multer();
  app.get('/health', ctx.health.check);
  app.patch('/log', ctx.log.config);
  app.patch('/middleware', ctx.middleware.config);

  app.post('/articles/search', ctx.article.search);
  app.get('/articles/search', ctx.article.search);
  app.get('/articles/:id', ctx.article.load);
  app.post('/articles', ctx.article.create);
  app.put('/articles/:id', ctx.article.update);
  app.patch('/articles/:id', ctx.article.patch);
  app.delete('/articles/:id', ctx.article.delete);

  app.post('/bookables/search', ctx.bookable.search);
  app.get('/bookables/search', ctx.bookable.search);
  app.get('/bookables/:id', ctx.bookable.load);
  app.post('/bookables', ctx.bookable.create);
  app.put('/bookables/:id', ctx.bookable.update);
  app.patch('/bookables/:id', ctx.bookable.patch);
  app.delete('/bookables/:id', ctx.bookable.delete);

  app.post('/events/search', ctx.event.search);
  app.get('/events/search', ctx.event.search);
  app.get('/events/:id', ctx.event.load);
  app.post('/events', ctx.event.create);
  app.put('/events/:id', ctx.event.update);
  app.patch('/events/:id', ctx.event.patch);
  app.delete('/events/:id', ctx.event.delete);

  app.post('/locations/search', ctx.location.search);
  app.get('/locations/search', ctx.location.search);
  app.get('/locations/:id', ctx.location.load);
  app.post('/locations', ctx.location.create);
  app.put('/locations/:id', ctx.location.update);
  app.patch('/locations/:id', ctx.location.patch);
  app.delete('/locations/:id', ctx.location.delete);
  app.post('/locations/:id/cover', parser.array('files'), ctx.locationUpload.uploadCover);
  app.post('/locations/:id/upload', parser.array('files'), ctx.locationUpload.uploadImage);

  app.post('/tours/search', ctx.tour.search);
  app.get('/tours/search', ctx.tour.search);
  app.get('/tours/:id', ctx.tour.load);
  app.post('/tours', ctx.tour.create);
  app.put('/tours/:id', ctx.tour.update);
  app.patch('/tours/:id', ctx.tour.patch);
  app.delete('/tours/:id', ctx.tour.delete);
}
