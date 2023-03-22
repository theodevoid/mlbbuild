import { createTRPCRouter } from "@server/api/trpc";
import { getHeroes } from "./getHeroes";

export const heroRouter = createTRPCRouter({
  getHeroes,
});
