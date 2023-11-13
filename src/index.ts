import { Elysia } from "elysia";

const app = new Elysia().get("/", () => "Hello Elysia").listen(3000);


const server = app.listen({ port: port });
console.log(`Server listening on ${server.hostname}:${port}`);
