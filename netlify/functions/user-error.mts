import type { Config, Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  throw new Error("Oh dear, this looks like a user error");
  return new Response("Hello, world!");
};

export const config: Config = {
  path: "/user-error",
};
