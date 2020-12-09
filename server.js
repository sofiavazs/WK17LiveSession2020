import express from 'express';
const app = express();

app.get('/', (request, response) => {
  response.send('Hello API! I hope this API has good documentation!');
});

app.listen(8080, () => {
  console.log('Hello console, the server is now running.');
});
