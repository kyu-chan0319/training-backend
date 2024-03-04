import * as http from "http";
import { readFileSync } from "fs";
const port = 3000;

const server = http.createServer((request, response) => {
  if (request.method === "GET" && request.url === "/books") {
    getBookData(response);
  } else if (request.method === "POST" && request.url === "/register") {
    // /registerにアクセスした時の処理を追加
    serveIndexHtml(response);
  } else {
    response.writeHead(404);
    response.end("Not Found");
  }
});

// index.htmlを読み込む
const serveIndexHtml = (res: http.ServerResponse) => {
  try {
    const indexPath = "./index.html";
    const indexContent = readFileSync(indexPath, "utf8");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(indexContent);
  } catch (error) {
    res.writeHead(500);
    res.end("Internal Server Error");
  }
};

// 本データの型定義
interface Book {
  title: string;
  borrower: string | null;
}

// 本データ
const data: Book = { title: "人間失格", borrower: null };

const getBookData = (response: http.ServerResponse) => {
  console.log("Book Data", data);
  // レスポンスヘッダーを設定
  // レスポンスヘッダーには、ステータスコード(200)とコンテンツタイプ(json)を設定
  response.writeHead(200, { "Content-Type": "application/json" });
  // response bodyには、本データを設定
  response.end(JSON.stringify(data));
};

const borrowBook = (response: http.ServerResponse) => {
  data.borrower = "kyu-chan";

  // POST実行後のデータをログに出力
  console.log("Updated Book Data", data);

  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify(data));
};

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
