import { Container, Grid, GridItem } from "@chakra-ui/react";
import ProtectedPage from "@components/ProtectedPage";
import { useRouter } from "next/router";
import EditSpellForm from "@features/guide/components/EditSpellForm";

const EditSpellPage = () => {
  const router = useRouter();
  const { id } = router.query;

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
