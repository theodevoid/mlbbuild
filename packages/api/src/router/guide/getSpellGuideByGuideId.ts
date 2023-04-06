import { z } from "zod";

import { publicProcedure } from "../../trpc";

export const getSpellGuidesByGuideId = publicProcedure
  .input(
    z.object({
      guideId: z.string(),
    }),
  )
  .query(async ({ ctx, input }) => {
    const { guideId } = input;
    const { prisma } = ctx;

    const spellGuides = await prisma.spellGuide.findMany({
      where: {
        guideId,
      },
      include: {
        spell: true,
      },
    });

    return spellGuides;
  });
