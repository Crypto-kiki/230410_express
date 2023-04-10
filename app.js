// import 하기
const express = require("express");

const app = express();

const port = 3010;
// create-react-app 자체에서는 3000번 포트가 켜지게 되어있음. react 서버랑 겹치지 않게 3010으로 임의로 할당.

// Rest API get요청임.
// 서버인 '/'에 접속하고 (req, res) => 를 전달하면 {}를 실행해라!
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.get("/abc", (req, res) => {
  res.send("ABC Express!");
});

app.post("/", (req, res) => {
  res.send("This is post request!");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
// 서버에 실행되는 내용

app.put("/", (req, res) => {
  res.send("This is put request!");
});

app.delete("/", (req, res) => {
  res.send("This is delete request!");
});

/* get, post, put, delete에 맞게 (restful하게) 써야 함
**GET**           /movies        (영화의 리스트를 가져옵니다.)

**GET**           /movies/:id  (특정 영화의 정보를 조회합니다.)

**POST**        /movies        (새로운 영화를 생성합니다.)

**PUT**          /movies         (영화의 정보를 업데이트 합니다.)

**DELETE**   /movies         (영화 데이터를 삭제합니다.)

CRUD (Create, Read, Update, Delete)

*/
