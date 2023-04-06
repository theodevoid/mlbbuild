import { createTRPCRouter } from "../../trpc";
import { getSpells } from "./getSpells";

export const spellRouter = createTRPCRouter({
  getSpells,
});
