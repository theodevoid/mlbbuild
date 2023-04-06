import { z } from "zod";

import { protectedProcedure } from "../../trpc";

export const createSpellGuide = protectedProcedure
  .input(
    z.object({
      title: z.string(),
      spellId: z.string(),
      guideId: z.string(),
    }),
  )
  .mutation(async ({ ctx, input }) => {
    const { prisma } = ctx;
    const { guideId, spellId, title } = input;

    const spellGuide = await prisma.spellGuide.create({
      data: {
        title,
        guideId,
        spellId,
      },
    });

    return spellGuide;
  });
