import { createSpellGuide } from "./createSpellGuide";
import { getSpellGuidesByGuideId } from "./getSpellGuideByGuideId";
import { createGuide } from "./createGuide";
import { createTRPCRouter } from "@server/api/trpc";

export const guideRouter = createTRPCRouter({
  createGuide,
  getSpellGuidesByGuideId,
  createSpellGuide,
});
