import { z } from "zod";
import { protectedProcedure } from "@server/api/trpc";

export const createGuide = protectedProcedure
  .input(z.object({}))
  .mutation(({ ctx, input }) => {
    const { prisma, session } = ctx;

    // TODO: Create guide
  });
