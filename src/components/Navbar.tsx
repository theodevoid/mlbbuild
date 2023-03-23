import {
  Avatar,
  Button,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";

const Navbar = () => {
  const { data: user } = useSession();

  return (
    <HStack
      justifyContent="space-between"
      py="4"
      px="8"
      bgColor="blackAlpha.600"
    >
      <HStack>
        <Link href="/">
          <Button variant="ghost">Home</Button>
        </Link>
        <Button variant="ghost">Explore</Button>
      </HStack>
      <HStack gap="4">
        <Link href="/guide/create">
          <Button rightIcon={<Icon as={FiPlus} />}>Create Build</Button>
        </Link>
        <Menu>
          <MenuButton>
            <Avatar
              _hover={{
                cursor: "pointer",
              }}
              src={user?.user?.image || ""}
            />
          </MenuButton>
          <MenuList>
            <MenuItem>Profilku</MenuItem>
            <MenuItem>Guide yang aku bikin</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </HStack>
  );
};

export default Navbar;
