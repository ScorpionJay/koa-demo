const Koa = require('koa');
const app = new Koa();

const route = require('koa-route');

// response
//app.use(ctx => {
//  ctx.body = 'Hello Koa';
//});

app.use(route.get('/test',ctx => {
  ctx.body = 'test';
}));

app.use(route.get('/test2',ctx => {
  ctx.body = 'test2';
}));

app.listen(3000);