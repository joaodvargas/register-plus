import express from 'express';
import { Send } from 'express-serve-static-core';

// typed response & request
interface TypedRequestBody<T> extends express.Request {
  body: T;
}
interface TypedResponse<T> extends express.Response {
  json: Send<T, this>;
}

// init app
const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// test endpoints
app.get('/ping', (_, res: express.Response) => {
  res.json({
    ok: true,
    message: 'pong',
  });
});

app.post(
  '/hello',
  (
    req: TypedRequestBody<{ name: string }>,
    res: TypedResponse<{ message: string }>
  ) => {
    const { name } = req.body;
    const message = name ? `Hello ${name}, how are you?` : `Hello stranger!`;
    res.status(200).json({ message });
  }
);

// 404 handler
app.use((_, res: express.Response) => {
  res.status(404).send('Not found');
});

app.listen(PORT, () => {
  console.log(`The application is listening on port ${PORT}!`);
});
