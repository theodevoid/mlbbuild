import { Role } from "@prisma/client";
import { z } from "zod";

import { protectedProcedure } from "../../trpc";

export const createGuide = protectedProcedure
  .input(
    z.object({
      title: z.string(),
      heroId: z.string(),
      role: z.nativeEnum(Role),
    }),
  )
  .mutation(async ({ ctx, input }) => {
    const { prisma, session } = ctx;
    const { user } = session;
    const { heroId, role, title } = input;

    // TODO: Create guide
    const guide = await prisma?.guide?.create({
      data: {
        title,
        role,
        heroId,
        userId: user.id,
      },
    });

    return guide;
  });
