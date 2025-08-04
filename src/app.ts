import configureOpenAPI from "@/lib/configure-open-api";
import createApp from "@/lib/create-app";

const app = createApp();

configureOpenAPI(app);

// app.get("/", (c) => {
//   return c.text("Hello Hono!");
// });

// app.get("/error", (c) => {
//   c.status(422);
//   c.var.logger.info("Wow! Log here!");
//   throw new Error("Oh no!");
// });

export default app;
