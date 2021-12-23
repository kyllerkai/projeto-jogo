/* eslint-disable */
import React from 'react';
import {
  Box, Container, chakra, Text, Heading,
  Stack, SimpleGrid, Avatar, Center,
  Flex, HStack
} from '@chakra-ui/react';
import { AiOutlineTeam, AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { FooterContainer } from '../../containers';
import { Hero, Header } from './styles';
import members from '../../json/team/team.json';
export default function Team() {
  return (
    <>
      <Helmet>
        <title> Fã-animatio | Equipe</title>
      </Helmet>
      <Nav />
      <Box mb="60px" as="section">
        <Container py="80px" textAlign="center">
          <chakra.h1
            color="teal.400"
            textStyle="heading"
            mb="5"
            fontWeight="bold"
            fontSize="2rem"
          >
            Fã-animation
          </chakra.h1>
          <Text maxW="56ch" mx="auto" fontSize="lg">
            Pessoas incríveis que contribuíram com tempo,
            esforço e pensamento. Sem eles,
            este projeto não seria possível.
          </Text>
        </Container>
      </Box>
      <Box mb="60px" as="section">
        <Container maxWidth="107ch">
          <Stack spacing={8}>
            <Heading size="lg" display="inline-flex">
              Equipe Central
              {' '}
              <AiOutlineTeam />
            </Heading>
            <SimpleGrid columns={[1, 1, 2]} spacing="40px" pt="3">
              {members.map((member) => (
                <Box borderLeftWidth="4px" borderLeftColor="purple.500" padding="7px" borderRadius="4px" key={member.id}>
                  <Stack direction="row" spacing={6}>
                    <Avatar size="xl" src={member.avatar} name={member.name} />
                    <Stack spacing={3} maxW="320px">
                      <Text fontWeight="bold" fontSize="md">
                        {member.name}
                      </Text>
                      <Text>{member.frase}</Text>
                      <Text>
                        Ocupação: {member.ocupacao}
                      </Text>
                    </Stack>
                  </Stack>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>
      <TeamCard />
      <FooterContainer />
    </>
  );
}

const Nav = () => (
  <Hero>
    <Header>
      <Link to="/">
        <Heading display="inline-flex" fontSize="19px">
          <AiOutlineArrowLeft />
          {' '}
          Voltar
        </Heading>
      </Link>
    </Header>
  </Hero>
);

const TeamCard = () => (
  <Box as="section" bg="#0e0f13" color="white" overflow="hidden">
    <Container pt="5px" pb="0">
      <Flex align="center" direction="column" textAlign="center" mb="10">
        <Heading
          mt="4"
          fontWeight="extrabold"
          size="3xl"
          mx="auto"
          letterSpacing="tighter"
        >
          <Box
            as="span"
            bgGradient="linear(to-l, #7928CA,#FF0080)"
            bgClip="text"
          >
            TRABALHE
          </Box>{' '}
          CONOSCO!
        </Heading>
        <Center mb="5px">
          <Text maxW="48ch" mx="auto" fontSize="lg" mt="6" opacity={0.8}>
            Una-se a este time para ajudar a moldar o futuro do entretenimento
            para comunidades apaixonadas de fãs.
          </Text>
        </Center>
        <HStack
          mt="6"
          as="a"
          bg="whiteAlpha.300"
          rounded="md"
          px="8"
          py="3"
          href="https://job-fa-animation.vercel.app/"
          color="white"
          fontSize="lg"
          fontWeight="semibold"
          transition="all 0.2s"
        >
          <Text>VAGAS ABERTAS!</Text>
          <Box as={AiOutlineArrowRight} display="inline-block" ml="2" />
        </HStack>
      </Flex>
    </Container>
  </Box>
);
