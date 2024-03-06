import * as http from "http";

const port = 3000;

const server = http.createServer((request, response) => {
  if (request.method === "GET" && request.url === "/books") {
    getBookData(response);
  } else if (request.method === "POST" && request.url === "/borrow") {
    borrowBook(response);
  } else {
    response.writeHead(404);
    response.end("Not Found");
  }
});

interface Book {
  title: string;
  borrower: string | null;
}

// 本データ
const data: Book = { title: "人間失格", borrower: null };

// 本データを取得するAPI (GET path: /books)
const getBookData = (response: http.ServerResponse) => {
  console.log("Book Data", data);
  // レスポンスヘッダーを設定
  // レスポンスヘッダーには、ステータスコード(200)とコンテンツタイプ(json)を設定
  response.writeHead(200, { "Content-Type": "application/json" });
  // response bodyには、本データを設定
  response.end(JSON.stringify(data));
};

// 本を借りるAPI (POST path: /borrow)
const borrowBook = (response: http.ServerResponse) => {
  data.borrower = "kyu-chan";
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify(data));
};

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
