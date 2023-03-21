import { Heading } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Skeleton } from "@chakra-ui/react";
import { GridItem } from "@chakra-ui/react";
import { FormLabel } from "@chakra-ui/react";
import { FormControl } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import RoleCard from "@features/guide/components/RoleCard";
import { Button } from "@chakra-ui/react";

const CreatePage = () => {
  return (
    <Container maxW="container.md" py="10">
      <Heading size="lg">Buat sebuah guide</Heading>
      <Grid templateColumns="repeat(4, 1fr)" w="100%" mt="8">
        <GridItem colSpan={3}>
          <Box>
            <FormControl mt="2">
              <FormLabel>1. Judul guide</FormLabel>
              <Input />
            </FormControl>
          </Box>
          <Box mt="6">
            <FormControl mt="2">
              <FormLabel>2. Pilih hero</FormLabel>
              <Input placeholder="Cari hero.." />
            </FormControl>
            <HStack gap={5} py="4" overflowX="scroll">
              {Array(10)
                .fill("item")
                .map((val, idx) => (
                  <Avatar key={idx.toString()} size="lg" />
                ))}
            </HStack>
          </Box>
          <Box mt="6">
            <FormLabel>3. Pilih role</FormLabel>
            <HStack gap={5} py="4" overflowX="scroll">
              <RoleCard role="exp" />
              <RoleCard role="jungle" />
              <RoleCard role="mid" />
              <RoleCard role="roam" />
              <RoleCard role="gold" />
            </HStack>
          </Box>
        </GridItem>
      </Grid>
      <Button size="lg" mt="4" colorScheme="gray">Next</Button>
    </Container>
  );
};

export default CreatePage;
