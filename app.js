const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "pug");
// 사용자에게 화면을 전송할 때 views 라는 폴더 탐색
// 파일명은 ".pug" 생략가능

// /assets/styles.css --> 절대경로
// __dirname(=> 현재 우리 경로) + "/assets"
app.use("/assets", express.static(path.join(__dirname, "/assets")));

app.get("/main1", (req, res) => {
  // "/main"의 신호를 받은 후에 콜백함수가 실행됨 !
  res.render("main1");
  // pug file 통째로 전달 --> render() 함수
});

app.get("/main2", (req, res) => {
  res.render("main2");
});

app.get("/main3", (req, res) => {
  res.render("main3");
});

// const action = (a) => {
//      ()=>{}      --> inner function
// }

app.listen(3000, () => {
  console.log("3000 SERVER START!");
});
