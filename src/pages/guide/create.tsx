import { Heading, Container } from "@chakra-ui/react";
import ProtectedPage from "@components/ProtectedPage";
import BasicInfoForm from "@features/guide/components/BasicInfoForm";

const CreatePage = () => {
  return (
    <ProtectedPage>
      <Container maxW="container.md" py="10">
        <Heading size="lg">Buat sebuah guide</Heading>
        <BasicInfoForm />
      </Container>
    </ProtectedPage>
  );
};

export default CreatePage;
