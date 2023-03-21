import { Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

const roles = {
  exp: "Exp Lane",
  jungle: "Jungler",
  roam: "Roaming",
  mid: "Mid Lane",
  gold: "Gold Lane",
};

interface RoleCardProps {
  role: keyof typeof roles;
}

const RoleCard: React.FC<RoleCardProps> = ({ role = "exp" }) => {
  return (
    <Box _hover={{ cursor: "pointer" }}>
      <Box>
        {/* TODO: Render proper role logo */}
        <Box bgColor="teal.200" w="100px" h="100px" />
        <Text color="gray.500" textAlign="center" fontSize="sm">
          {roles[role]}
        </Text>
      </Box>
    </Box>
  );
};

export default RoleCard;
