const appModule = require('./index');
const app = appModule.default || appModule.handler;
const port = process.env.PORT || 3000;

require('http').createServer((req, res) => {
  return app(req, res);
}).listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});