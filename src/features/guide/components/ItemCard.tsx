import { Avatar, Stack, Text } from "@chakra-ui/react";

interface ItemCardProps {
  id: string;
  image_url: string;
  name: string;
  selected?: boolean;
  onClick?: () => void;
}

const ItemCard: React.FC<ItemCardProps> = ({
  id,
  image_url,
  name,
  selected,
  onClick,
}) => {
  return (
    <Stack
      key={id}
      onClick={onClick}
      _hover={{ cursor: "pointer" }}
      alignItems="center"
    >
      <Avatar
        outline={selected ? "3px solid" : "0px"}
        outlineColor={selected ? "teal.500" : "transparent"}
        src={image_url}
        size="lg"
        boxSizing="border-box"
        flex={1}
      />
      <Text
        fontSize="sm"
        textAlign="center"
        h="8"
        color={selected ? "teal.500" : "inherit"}
      >
        {name}
      </Text>
    </Stack>
  );
};

export default ItemCard;
