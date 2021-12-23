/* eslint-disable */
import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {
  Box, FormControl, FormLabel, Input,
  Button, Flex, Heading, Text, useToast,
} from '@chakra-ui/react';
import * as ROUTES from '../../constants/routes';
import { useAuth } from '../../context/AuthContext';

export default function Signup() {
  const bgImg = `linear-gradient(to bottom, rgb(0 0 0),#0a0a0a6e,rgb(0 0 0)), url("https://raw.githubusercontent.com/FelipePDS/otakinho-store/master/assets/images/bgBoku.jpg") top left / cover`
  return (
    <Box bg={bgImg}>
      <Helmet>
        <title> Fã-animatio | Redefinição de senha</title>
      </Helmet>
      <Flex minHeight="100vh" width="full" align="center" justifyContent="center">
        <Box
          backgroundColor="gray.700"
          // borderWidth={1}
          px={4}
          width="full"
          maxWidth="500px"
          borderRadius={4}
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
    <Heading>Redefinição de senha</Heading>
    <br />
    <Text>
      Digite seu endereço de e-mail abaixo e enviaremos um link para redefinir ou criar sua senha.
    </Text>
  </Box>
);

const LoginForm = () => {
  const { resetPassword } = useAuth();
  const [loading, setLoading] = useState<boolean>(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const toast = useToast();
  const handleSubmit: ((event: React.FormEvent) => void) = async (e) => {
    e.preventDefault();
    let email = emailRef.current?.value;
    if (email === '') {
      toast({
				title: 'Insira todos os campos!',
				status: 'error',
				duration: 2500,
				isClosable: true,
			});
    }
    try {
      await resetPassword(email);
      setLoading(true)
      toast({
				title: 'E-mail para reconfiguração de senha enviado. Confira sua caixa de entrada. Caso não encontre, veja também sua pasta de spam.',
				status: 'success',
				isClosable: true,
			});
    } catch {
      toast({
        title: 'Falha ao fazer login. Por favor, tente novamente.',
        status: 'error',
        isClosable: true,
      });
    }
    setLoading(false);
  }
  return (
    <Box my={8} as="form" textAlign="left" onSubmit={handleSubmit}>
      <FormControl id="email">
        <FormLabel>Email:</FormLabel>
        <Input type="email" ref={emailRef} required placeholder="Insira o seu endereço de email" backgroundColor="gray.800" focusBorderColor="purple.500" />
      </FormControl>
      <br />
      <Box>
        <Button mr={5} bg="purple.500" _hover={{ backgroundColor: 'purple.600' }}>
          <Link to={ROUTES.SIGN_IN}>Voltar</Link>
        </Button>
        <Button
          type="submit"
          bg="purple.500"
          _hover={{ backgroundColor: 'purple.600' }}
          backgroundColor="purple.500"
          isLoading={loading}
          loadingText="Loading..."
        >
          Enviar
        </Button>
      </Box>
      {/* <br />
        {error && (
          <AlertError type={error} />
        )}
        {message && (<SucessAlert type={message} />)} */}
      <br />
    </Box>
  );
};
