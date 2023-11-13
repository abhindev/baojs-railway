import Bao from "baojs";

const app = new Bao();

app.get("/", (ctx) => {
  return ctx.sendText("Hello World!");
});

const server = app.listen();

console.log(`Listening on ${server.hostname}:${server.port}`);

// import { Elysia } from "elysia";

// const app = new Elysia()
//   .get("/", () => "Hello Elysia")
//   .listen(3000, "0.0.0.0");

// console.log(
//   `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
// );
