import type { PinoLogger } from "hono-pino";

// eslint-disable-next-line ts/consistent-type-definitions
export interface AppBindings {
  Variables: {
    logger: PinoLogger;
  };
};

export type AppOpenAPI = OpenAPIHono<AppBindings>;
