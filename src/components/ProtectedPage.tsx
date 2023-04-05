import { Container, Text } from "@chakra-ui/react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { PropsWithChildren } from "react";

const ProtectedPage: React.FC<PropsWithChildren> = ({ children }) => {
  const user = useUser();
  const supabase = useSupabaseClient();

  if (!user) {
    return (
      <Container py="20">
        <Text
          fontSize="3xl"
          textAlign="center"
        >
          <Text
            onClick={() =>
              void supabase.auth.signInWithOAuth({ provider: "google" })
            }
            _hover={{ cursor: "pointer" }}
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
