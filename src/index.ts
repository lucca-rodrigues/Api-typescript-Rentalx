import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({message: 'Hello World'});
});

app.listen(3333, () => console.log("App started on port 3333"));
