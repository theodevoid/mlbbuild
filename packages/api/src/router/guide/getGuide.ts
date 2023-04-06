import { z } from "zod";

import { publicProcedure } from "../../trpc";

export const getGuide = publicProcedure
  .input(
    z.object({
      id: z.string(),
    }),
  )
  .query(async ({ ctx, input }) => {
    const { id } = input;
    const { prisma } = ctx;

    const guide = await prisma.guide.findUnique({
      where: {
        id,
      },
    });

    return guide;
  });
