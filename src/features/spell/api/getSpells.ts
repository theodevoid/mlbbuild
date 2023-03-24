import { publicProcedure } from "@server/api/trpc";

export const getSpells = publicProcedure.query(async ({ ctx }) => {
  const { prisma } = ctx;
  const spells = await prisma.spell.findMany();

  return spells;
});
