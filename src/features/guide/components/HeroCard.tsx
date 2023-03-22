import { Avatar, Box, Text } from "@chakra-ui/react";

interface HeroCardProps {
  id: string;
  image_url: string;
  name: string;
  selected?: boolean;
  onClick?: () => void;
}

const HeroCard: React.FC<HeroCardProps> = ({
  id,
  image_url,
  name,
  selected,
  onClick,
}) => {
  return (
    <Box key={id} onClick={onClick} _hover={{ cursor: "pointer" }}>
      <Avatar
        outline={selected ? "3px solid" : "0px"}
        outlineColor={selected ? "teal.500" : "transparent"}
        src={image_url}
        size="lg"
        boxSizing="border-box"
      />
      <Text fontSize="sm" textAlign="center">
        {name}
      </Text>
    </Box>
  );
};

export default HeroCard;
