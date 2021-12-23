import {
  Box,
  Container, chakra, Text, Stack, Button, Flex, Image,
} from '@chakra-ui/react';
import React from 'react';
import * as ROUTES from '../../constants/routes';

import { AiOutlineArrowRight, AiOutlineTeam } from 'react-icons/ai';
import heroImagem from '../../images/heroImagem.png';
export default function HeroLox() {
  return (
    <Box as="section" bg="teal.500">
      <Flex
        direction="column"
        align="center"
        maxW={{ xl: '1200px' }}
        m="0 auto"
      >
        <Flex
          align="center"
          justify={{ base: 'center', md: 'space-around', xl: 'space-between' }}
          direction={{ base: 'column', md: 'row' }}
          wrap="no-wrap"
          minH="70vh"
          px={4}
          mb={16}
        >
          <Box
            pb="3rem"
            mb={3}
            mt={8}
          >
            <Container>
              <Box aling="center">
                <chakra.h1
                  maxW="16ch"
                  mx="auto"
                  fontSize={{ base: '2.25rem', sm: '3rem', lg: '4rem' }}
                  letterSpacing="tighter"
                  fontWeight="extrabold"
                  mb="16px"
                  lineHeight="1.2"
                >
                  Fã-animation
                </chakra.h1>
                <Text
                  maxW="560px"
                  mx="auto"
                  opacity={0.7}
                  fontSize={{ base: 'lg', lg: 'xl' }}
                  mt="6"
                >
                  Onde cada anime ganha vida em seus corações! assista
                  no seu tempo e no seu conforto!
                </Text>
              </Box>
              <Stack direction={{ base: 'column', sm: 'row' }} spacing={4} mt={3}>
                <Button
                  leftIcon={<AiOutlineTeam />}
                  px="40px"
                  fontSize="1.2rem"
                  as="a"
                  size="lg"
                  color="black"
                  bg="purple.500"
                  href={ROUTES.SIGN_IN}
                  _hover={{ backgroundColor: 'purple.500' }}
                >
                  Entrar
                </Button>
                <Button
                  rightIcon={<AiOutlineArrowRight />}
                  px="40px"
                  fontSize="1.2rem"
                  as="a"
                  size="lg"
                  color="black"
                  variant="outline"
                  href={ROUTES.SIGN_UP}
                  background="white"
                  // _hover={{ bg: 'white', color: '#000' }}
                >
                  Cadastrar
                </Button>
              </Stack>
            </Container>
          </Box>
          <Box
            w={{ base: '80%', sm: '60%', md: '50%' }}
            mb={{ base: 12, md: 0 }}
            display={{ base: 'none', sm: 'block' }}
          >
            <Image
              src={heroImagem}
              size="100%"
              rounded="1rem"
              shadow="2xl"
            />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
