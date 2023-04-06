import { type NextPage } from "next";
import Head from "next/head";
import NextLink from "next/link";
import { Box, Container, Heading, Link, Text } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>MLBBuild</title>
        <meta
          name="description"
          content="Website pembuat build Mobile Legends: Bang Bang"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Container>
          <Heading>MLBBuild by VoidFnc</Heading>
          <Text>Test</Text>
          <Link as={NextLink} href="/guide/create">
            Bikin sebuah build
          </Link>
        </Container>
      </Box>
    </>
  );
};

export default Home;
