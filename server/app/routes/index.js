import reminderListRouter from './reminderList-route.js';

export default (app) => {
    app.use('/', reminderListRouter);
}