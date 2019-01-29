const Koa = require('koa');
const app = new Koa();

app.use(async(ctx) => {
    ctx.body = 'Hello World!'
});
app.listen(3001);

console.log('app is starting at port 3001');