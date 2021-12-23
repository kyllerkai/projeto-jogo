/* eslint-disable */
import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Box, FormControl, FormLabel, Input, Stack,
  Checkbox, Button, Flex, Heading, Text, InputGroup,
  InputLeftElement, InputRightElement, chakra, useToast,
} from '@chakra-ui/react';

import { useHistory, Link } from 'react-router-dom';
import {
  FiMail, FiLock, FiEyeOff, FiEye,
} from 'react-icons/fi';
// import { auth } from "../../connection";
import { useAuth } from '../../context/AuthContext';
// import HeaderContainer from '../../components/Header/index';
import * as ROUTES from '../../constants/routes';
export default function Signup() {
  const bgImg = `linear-gradient(to bottom, rgb(0 0 0),#0a0a0a6e,rgb(0 0 0)), url("https://raw.githubusercontent.com/FelipePDS/otakinho-store/master/assets/images/bgBoku.jpg") top left / cover`
  return (
    <Box bg={bgImg}>
      <Helmet>
        <title> Fã-animatio | Login</title>
      </Helmet>
      <Flex id="anime" minHeight="100vh" width="full" align="center" justifyContent="center">
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
            <LoginForm />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

const LoginHeader = () => (
  <Box textAlign="center">
    <Heading>Faça login no site</Heading>
    <Text>Venha fazer parte do nosso clã!</Text>
  </Box>
);

const LoginForm = () => {
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const toast = useToast();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [show, setShow] = React.useState<boolean>(false);
  const handleClick = () => setShow(!show);
  const history = useHistory();
  const { signin } = useAuth();
  const handleSubmit: ((event: React.FormEvent) => Promise<void>) = async (e) => {
    e.preventDefault();
    let password = passwordRef.current?.value;
    let email = emailRef.current?.value;
    if (email === '' || password === '') {
      toast({
        title: 'Insira todos os campos!',
        status: 'error',
        duration: 2500,
        isClosable: true,
      });
    }
    try {
      toast({
				title: 'Esperer só um pouco',
				status: 'info',
				duration: 2500,
				isClosable: true,
			});
      setLoading(true);
      await signin(email, password);
      history.push("/");
    } catch {
      toast({
        title: 'Falha ao fazer login. Por favor, tente novamente.',
        status: 'error',
        duration: 2500,
        isClosable: true,
      });
    }
    setLoading(false);
  }

  // const handleGoogleLogin = async () => {
  //   try {
  //     setError("");
  //     setLoading(true);
  //     let provider = new firebase.auth.GoogleAuthProvider();
  //     await firebase.auth().signInWithPopup(provider);
  //     history.push("/");
  //   } catch {
  //     setError("Couldn't sigin using Gmail. Try again.")
  //   }
  // }

  return (
    <Box my={8} textAlign="left" as="form" onSubmit={handleSubmit}>
      <FormControl id="email">
        <FormLabel>Email:</FormLabel>
        <InputGroup>
          <InputLeftElement
            width="3rem"
            height="100%"
            color='#8257e5'
            children={<FiMail />}
            _focus={{ color: '#fff' }}
          />
          <Input
            type="email"
            ref={emailRef}
            placeholder="Insira o seu endereço de email"
            required
            focusBorderColor="purple.500"
            backgroundColor="gray.800"
            rounded="lg"
          />
        </InputGroup>
      </FormControl>

      <FormControl mt={4} id="password">
        <FormLabel>Senha:</FormLabel>
        <InputGroup>
          <InputLeftElement
            width="3rem"
            height="100%"
            color='#8257e5'
            children={<FiLock />}
            _focus={{ color: '#fff' }}
          />
          <Input
            type={show ? 'text' : 'password'}
            placeholder="Coloque sua senha"
            backgroundColor="gray.800"
            focusBorderColor="purple.500"
            required
            rounded="lg"
            ref={passwordRef}
          />
          <InputRightElement>
            <chakra.button
              h="1.75rem"
              size="sm"
              background="transparent"
              onClick={handleClick}
              outline="none"
              type="button"
              color='#8257e5'
            >
              {show ? <FiEye /> : <FiEyeOff />}
            </chakra.button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Stack isInline justifyContent="space-between" mt={4}>
        <Box>
          <Checkbox>Lembre-me</Checkbox>
        </Box>
        <Box>
          <Link id="link" to="/forgot-password">
            Esqueceu sua senha?
          </Link>
        </Box>
      </Stack>
      <Button
        type="submit"
        width="full"
        mt={4}
        outline="none"
        _hover={{ backgroundColor: 'purple.600' }}
        backgroundColor="purple.500"
        isLoading={loading}
        loadingText="Loading..."
      >
        Sign In
      </Button>
      <Text mt="4px">
        Não tem uma conta?
        {' '}
        <Link to={ROUTES.SIGN_UP} id="link">Register</Link>
      </Text>
    </Box>
  );
};