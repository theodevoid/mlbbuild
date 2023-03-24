import { createTRPCRouter } from "@server/api/trpc";
import { getSpells } from "./getSpells";

export const spellRouter = createTRPCRouter({
  getSpells,
});
