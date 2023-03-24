import { Container, Grid, GridItem } from "@chakra-ui/react";
import ProtectedPage from "@components/ProtectedPage";
import { useRouter } from "next/router";
import EditSpellForm from "@features/guide/components/EditSpellForm";
import { api } from "@utils/api";
import { useSession } from "next-auth/react";
import { useGuardBelongsToUser } from "@utils/useGuardBelongsToUser";

const EditSpellPage = () => {
  const { data: session, status } = useSession();

  const router = useRouter();
  const { id } = router.query;

  const { data: guide, isLoading } = api.guide.getGuide.useQuery({
    id: id as string,
  });

  useGuardBelongsToUser({
    isLoaded: status !== "loading" && !isLoading,
    belongsToUser: guide?.userId === session?.user.id,
    router,
  });

  return (
    <ProtectedPage>
      <Container
        maxW="container.md"
        py="10"
      >
        <Grid
          templateColumns="repeat(4, 1fr)"
          w="100%"
          mt="8"
        >
          <GridItem colSpan={3}>
            <EditSpellForm guideId={id as string} />
          </GridItem>
        </Grid>
      </Container>
    </ProtectedPage>
  );
};

export default EditSpellPage;
