import { Center, Container, Spinner, Text } from "@chakra-ui/react";
import { signIn, useSession } from "next-auth/react";
import { PropsWithChildren } from "react";

const ProtectedPage: React.FC<PropsWithChildren> = ({ children }) => {
  const { status } = useSession();

  if (status === "loading") {
    return (
      <Container>
        <Center>
          <Spinner size="xl" />
        </Center>
      </Container>
    );
  }

  if (status === "unauthenticated") {
    return (
      <Container py="20">
        <Text
          fontSize="3xl"
          textAlign="center"
        >
          <Text
            _hover={{ cursor: "pointer" }}
            onClick={signIn as () => void}
          >
            Login
          </Text>
          untuk akses halaman ini
        </Text>
      </Container>
    );
  }

  return <>{children}</>;
};

export default ProtectedPage;
