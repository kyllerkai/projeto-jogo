import React from 'react';
import {
  Box, Container, chakra, SimpleGrid, Flex, Stack, Heading, Center,
} from '@chakra-ui/react';
import { BiCheckCircle } from 'react-icons/bi';
import { FaPhoenixSquadron } from 'react-icons/fa';
import { MdSecurity } from 'react-icons/md';
import { GiSelfLove } from 'react-icons/gi';
export default function BoxHero() {
  return (
    <Box as="section" mt={5}>
      <Container pt="4rem" maxW="1280px" color="white">
        <Box maxW="760px" mx="auto" textAlign="center" mb="56px">
          <chakra.h2 textStyle="heading" mb={2} fontSize="2.5rem" fontWeight="700">
            Fã-animation
          </chakra.h2>
          <Center>
            <Stack
              isInline
              id="GridContent"
              align="center"
            >
              <chakra.h2 textStyle="heading" alignItems="center" mb={5} opacity={0.7} display="inline-flex">
                Feito com muito amor
                <GiSelfLove />
              </chakra.h2>
            </Stack>
          </Center>
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            maxW="880px"
            mx="auto"
            spacing="2rem"
            px={{ md: 12 }}
          >
            <Flex
              direction="column"
              borderLeft="2px solid"
              borderLeftColor="teal.500"
              align={{ base: 'center', md: 'flex-start' }}
              pl={{ base: '0', md: '8' }}
              bg="#151517"
              padding="10px"
              rounded="lg"
            >
              <Stack
                isInline
                id="GridContent"
                align="center"
              >
                <Heading fontSize="25px" fontWeight="400" display="inline-flex">
                  <BiCheckCircle />
                  Sem Pop-Ups
                </Heading>
              </Stack>
            </Flex>

            <Flex
              direction="column"
              borderLeft="2px solid"
              borderLeftColor="teal.500"
              align={{ base: 'center', md: 'flex-start' }}
              pl={{ base: '0', md: '8' }}
              bg="#151517"
              padding="10px"
              rounded="lg"
            >
              <Stack
                isInline
                id="GridContent"
                align="center"
              >
                <Heading fontSize="25px" fontWeight="400" display="inline-flex">
                  <FaPhoenixSquadron />
                  Grátis
                </Heading>
              </Stack>
            </Flex>
            <Flex
              direction="column"
              borderLeft="2px solid"
              borderLeftColor="teal.500"
              align={{ base: 'center', md: 'flex-start' }}
              pl={{ base: '0', md: '8' }}
              bg="#151517"
              padding="10px"
              rounded="lg"
            >
              <Stack
                isInline
                id="GridContent"
                align="center"
              >
                <Heading fontSize="25px" fontWeight="400" display="inline-flex">
                  <MdSecurity />
                  Dados seguros
                </Heading>
              </Stack>
            </Flex>
            <Flex
              direction="column"
              borderLeft="2px solid"
              borderLeftColor="teal.500"
              align={{ base: 'center', md: 'flex-start' }}
              pl={{ base: '0', md: '8' }}
              bg="#151517"
              padding="10px"
              rounded="lg"
            >
              <Stack
                isInline
                id="GridContent"
                align="center"
              >
                <Heading fontSize="25px" fontWeight="400" display="inline-flex">
                  <BiCheckCircle />
                  Fluxo de entrega
                </Heading>
              </Stack>
            </Flex>

          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
}
