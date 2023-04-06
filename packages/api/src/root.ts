import { guideRouter } from "./router/guide";
import { heroRouter } from "./router/hero";
import { spellRouter } from "./router/spell";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  hero: heroRouter,
  guide: guideRouter,
  spell: spellRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
