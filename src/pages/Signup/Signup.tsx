/* eslint-disable */
import { Helmet } from 'react-helmet';
import {
  Box, Flex, Heading, Text,
} from '@chakra-ui/react';
import { SinupForm } from './LoginForm';
export default function Signup() {
  const bgImg = `linear-gradient(to bottom, rgb(0 0 0),#0a0a0a6e,rgb(0 0 0)), url("https://raw.githubusercontent.com/FelipePDS/otakinho-store/master/assets/images/bgBoku.jpg") top left / cover`
  return (
    <Box bg={bgImg}>
      <Helmet>
        <title> Fã-animatio | Signup</title>
      </Helmet>
      <Flex minHeight="100vh" width="full" align="center" justifyContent="center" id="anime">
        <Box
          backgroundColor="gray.700"
          px={4}
          width="94%"
          maxWidth="500px"
          borderRadius="sm"
          textAlign="center"
        >
          <Box p={4}>
            <LoginHeader />
            <SinupForm />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

const LoginHeader = () => (
  <Box textAlign="center">
    <Heading>Cadastre sua conta!</Heading>
    <Text>Venha fazer parte do nosso clã!</Text>
  </Box>
);