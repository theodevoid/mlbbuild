import { createTRPCRouter } from "../../trpc";
import { createGuide } from "./createGuide";
import { createSpellGuide } from "./createSpellGuide";
import { getGuide } from "./getGuide";
import { getSpellGuidesByGuideId } from "./getSpellGuideByGuideId";

export const guideRouter = createTRPCRouter({
  createGuide,
  getSpellGuidesByGuideId,
  createSpellGuide,
  getGuide,
});
