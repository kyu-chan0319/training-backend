import * as http from "http";

const port = 3000;

const server = http.createServer((request, response) => {
  if (request.method === "GET" && request.url === "/books") {
    getBookData(response);
  } else if (request.method === "POST" && request.url === "/borrow") {
    borrowBook(response);
  } else if (request.method === "POST" && request.url === "/register") {
    registerBook(response);
  } else if (request.method === "GET" && request.url === "/history") {
    getHistoryBookData(response);
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

// 貸出履歴データ
const history: Book[] = [
  { title: "人間失格", borrower: "kyu-chan" },
  { title: "ノルウェイの森", borrower: "kyu-chan" },
  { title: "羅生門", borrower: "kyu-chan" },
];

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

// 本を登録するAPI (POST path: /register)
const registerBook = (response: http.ServerResponse) => {
  data.title = "人間失格2";
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify(data));
};

// 貸出履歴データを取得するAPI (GET path: /history)
const getHistoryBookData = (response: http.ServerResponse) => {
  console.log("History Book Data", history);
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify(history));
};

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
