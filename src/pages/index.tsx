import { Text, Box, Container, Heading, Link } from "@chakra-ui/react";
import { type NextPage } from "next";
import Head from "next/head";
import NextLink from "next/link";
import Navbar from "src/components/Navbar";

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
