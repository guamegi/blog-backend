import Koa from "koa";
import Router from "koa-router";
import bodyParser from "koa-bodyparser";

import api from "./api/index.js";

const app = new Koa();
const router = new Router();

// router.get("/", (ctx) => {
//   ctx.body = "home";
// });
// router.get("/about/:name?", (ctx) => {
//   const { name } = ctx.params;
//   ctx.body = name ? `${name}의 소개` : "소개";
// });
// router.get("/posts", (ctx) => {
//   const { id } = ctx.query;
//   ctx.body = id ? `포스트 #${id}` : "포스트 아이디가 없습니다.";
// });
router.use("/api", api.routes());

// 라우터 적용 전에 bodyParser 적용
app.use(bodyParser());

// app 인스턴스에 router 적용
app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
  console.log("Listening to port 4000");
});
