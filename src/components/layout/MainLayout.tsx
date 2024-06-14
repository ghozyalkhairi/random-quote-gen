import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { FC, PropsWithChildren } from "react";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Random Quotes Gen</title>
        <meta name="description" content="Random Quote Gen" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box bg="gray.100" minH="100vh" w="100%" as="main">
        <Box maxW="800px" mx="auto" p={4}>
          {children}
        </Box>
      </Box>
    </>
  );
};

export default MainLayout;
