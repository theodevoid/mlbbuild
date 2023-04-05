import { Heading, Container, Grid, GridItem } from "@chakra-ui/react";
import ProtectedPage from "@components/ProtectedPage";
import BasicInfoForm from "@features/guide/components/BasicInfoForm";

const CreatePage = () => {
  return (
    <Container
      maxW="container.md"
      py="10"
    >
      <Heading size="lg">Buat sebuah guide</Heading>
      <Grid
        templateColumns="repeat(4, 1fr)"
        w="100%"
        mt="8"
      >
        <GridItem colSpan={3}>
          <BasicInfoForm />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default CreatePage;
