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
// import * as http from "http";

// const express = require("express");
// const app = express();
// const port = 3000;

// const server = http.createServer((request, response) => {
//   response.end("Hello World!");
// });

// // server.listen(port);
// server.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

/** サーバーにアクセスする度にcounterの値が+1される */
import * as http from "http";

const port = 3000;

// カウンターの初期値を設定
let counter = 0;

const server = http.createServer((request, response) => {
  // ルートパスの場合のみカウンターを適用
  if (request.url === "/") {
    // リクエストが来るたびにカウンターを1増やす
    counter += 1;
  }
  // カウンターの値を表示し、レスポンスを返す
  response.end(`This page has been accessed ${counter} times.`);
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
