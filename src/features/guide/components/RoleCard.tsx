import { Text, Box } from "@chakra-ui/react";
import { Role } from "@prisma/client";
import ExpLaneIcon from "src/components/Lanes/ExpLaneIcon";
import GoldLaneIcon from "src/components/Lanes/GoldLaneIcon";
import JunglerIcon from "src/components/Lanes/JunglerIcon";
import MidLaneIcon from "src/components/Lanes/MidLaneIcon";
import RoamerIcon from "src/components/Lanes/RoamerIcon";

interface RoleRecord {
  name: string;
  icon: React.ReactNode;
}

const roles: Record<keyof typeof Role, RoleRecord> = {
  EXP: {
    name: "Exp Laner",
    icon: <ExpLaneIcon />,
  },
  JUNGLE: {
    name: "Jungler",
    icon: <JunglerIcon />,
  },
  ROAM: {
    name: "Roamer",
    icon: <RoamerIcon />,
  },
  MID: {
    name: "Mid Laner",
    icon: <MidLaneIcon />,
  },
  GOLD: {
    name: "Gold Laner",
    icon: <GoldLaneIcon />,
  },
};

interface RoleCardProps {
  role: keyof typeof Role;
  onClick?: () => void;
  selected?: boolean;
}

const RoleCard: React.FC<RoleCardProps> = ({
  role = "EXP",
  onClick,
  selected = false,
}) => {
  return (
    <Box
      outline={selected ? "3px solid" : "0px"}
      outlineColor={selected ? "teal.500" : "transparent"}
      _hover={{ cursor: "pointer" }}
      onClick={onClick}
    >
      <Box>
        {roles[role].icon}
        <Text
          color="gray.500"
          textAlign="center"
          fontSize="sm"
        >
          {roles[role].name}
        </Text>
      </Box>
    </Box>
  );
};

export default RoleCard;
