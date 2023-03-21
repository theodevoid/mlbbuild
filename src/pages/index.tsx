import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>MLBBuild</title>
        <meta name="description" content="Website pembuat build Mobile Legends: Bang Bang" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Heading>MLBBuild by VoidFnc</Heading>
        <Text>Test</Text>
      </Container>
    </>
  );
};

export default Home;
