import { createTRPCRouter } from "../../trpc";
import { getHeroes } from "./getHeroes";

export const heroRouter = createTRPCRouter({
  getHeroes,
});
