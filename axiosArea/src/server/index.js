const koa = require("koa");
const Router = require("koa-router");
const cors = require("koa2-cors");
const bodyParser = require("koa-bodyparser");

const app = new koa();

app.use(bodyParser());
app.use(cors()); // 允许跨域

const router = new Router();

router.get("/getAllStudent", (ctx, next) => {
  ctx.body = [
    { id: 1, name: "zhangsan", age: 10 },
    { id: 2, name: "lisi", age: 20 },
  ];
});
router.get("/findStudentById", (ctx, next) => {
  const { id } = ctx.request.query;
  console.log(id);
  ctx.body = { id: 1, name: "zhangsan", age: 10 };
});

router.post("/postAllStudent", (ctx, next) => {
  ctx.body = [
    { id: 1, name: "zhangsan", age: 10 },
    { id: 2, name: "lisi", age: 20 },
  ];
});
router.post("/findStudentByName", (ctx, next) => {
  const { name } = ctx.request.body;
  console.log(name);
  ctx.body = { id: 1, name: "zhangsan", age: 10 };
});
app.use(router.routes()); //作用:启动路由
app.use(router.allowedMethods()); //作用: 当请求出错时的处理逻辑
app.listen(3000, () => {
  console.log("starting at port 3000");
});
