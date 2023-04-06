import { Prisma } from "@prisma/client";
import { z } from "zod";

import { publicProcedure } from "../../trpc";

export const getHeroes = publicProcedure
  .input(
    z.object({
      heroName: z.string().optional(),
    }),
  )
  .query(async ({ ctx, input }) => {
    const { prisma } = ctx;
    const { heroName } = input;

    let whereClause: Prisma.HeroWhereInput = {};

    if (heroName) {
      whereClause = {
        name: {
          contains: `${heroName}`,
          mode: "insensitive",
        },
      };
    }

    const heroes = await prisma.hero.findMany({
      where: whereClause,
    });

    return heroes;
  });
