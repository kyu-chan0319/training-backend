/** Hono ライブラリを使用したサーバーの立ち上げ */
// import { serve } from "@hono/node-server";
// import { Hono } from "hono";

// const app = new Hono();

// app.get("/", (c) => {
//   return c.text("Hello World!");
// });

// app.get("/hello-world", (c) => {
//   return c.text("Hello World!");
// });

// const port = 3000;
// console.log(`Server is running on port ${port}`);

// serve({
//   fetch: app.fetch,
//   port,
// });

/** Node.js http を使用したサーバーの立ち上げ */
import * as http from "http";

const port = 4000;

const server = http.createServer((request, response) => {
  response.end("Hello World!");
});

server.listen(port);
