import { Box, Stack, Text } from "@chakra-ui/react";
import { Spell } from "@prisma/client";
import ItemCard from "./ItemCard";

interface SpellChoiceProps {
  title: string;
  spell: Spell;
}

const SpellChoice: React.FC<SpellChoiceProps> = ({ spell, title }) => {
  return (
    <Stack
      alignItems="center"
      w="fit-content"
    >
      <Box
        backgroundColor="blackAlpha.300"
        w="fit-content"
        p="2"
      >
        <Text fontSize="sm">{title}</Text>
      </Box>
      <ItemCard
        id={spell?.id}
        image_url={spell?.image_url}
        name={spell?.name}
      />
    </Stack>
  );
};

export default SpellChoice;
