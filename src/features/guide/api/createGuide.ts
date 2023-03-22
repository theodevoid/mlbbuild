import { z } from "zod";
import { protectedProcedure } from "@server/api/trpc";
import { Role } from "@prisma/client";

export const createGuide = protectedProcedure
  .input(
    z.object({
      title: z.string(),
      heroId: z.string(),
      role: z.nativeEnum(Role),
    })
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
