// import Bao from "baojs";
import { Elysia } from "elysia";

// const app = new Elysia().get("/", () => "Hello Elysia").listen(3000);

// const app = new Bao();
const app = new Elysia();
const port = parseInt(process.env.PORT || "8080");

app.get("/", () => "Hello Elysia");
// app.get("/", () => {
//   return ctx.sendText("Hello world from Bao.js running on Railway!");
// });

const server = app.listen({ port: port });
console.log(`Server listening on ${server.hostname}:${port}`);
