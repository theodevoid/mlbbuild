import { spellRouter } from "./../../features/spell/api/index";
import { createTRPCRouter } from "@server/api/trpc";
import { heroRouter } from "@features/hero/api/index";
import { guideRouter } from "@features/guide/api";

/**
 * This is the primary router for your server.
 *
 * All routers added in /features/.../api should be manually added here.
 */
export const appRouter = createTRPCRouter({
  guide: guideRouter,
  hero: heroRouter,
  spell: spellRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
