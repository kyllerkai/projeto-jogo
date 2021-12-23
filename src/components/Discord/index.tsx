import React from 'react';
import { FaDiscord } from 'react-icons/fa';
import {
  Box, Container, Flex, Heading, Text, chakra,
} from '@chakra-ui/react';

const Discord: React.FC = () => {
  return (
    <Box bg="purple.600" h={250} as="section">
      <Container py="8" pt="27px">
        <Flex
          direction="column"
          align="center"
          justify="space-between"
        >
          <Flex color="white">
            <Box fontSize="48px" mr="5">
              <FaDiscord />
            </Box>
            <Box mb={2}>
              <Heading size="md" lineHeight="1.2" mb="1">
                Conecte-se com a comunidade
              </Heading>
              <Text opacity={0.7}>
                Sinta-se à vontade para fazer perguntas, relatar problemas e conhecer novas pessoas.
              </Text>
            </Box>
          </Flex>
          <chakra.button
            width="100%"
            mt={{ base: '6', md: 0 }}
            color="gray.800"
            as="a"
            justifyContent="center"
            display="inline-flex"
            alignItems="center"
            href="https://discord.gg/cuMzJwC99G"
            rel="noopener"
            target="_blank"
            fontWeight="bold"
            shadow="md"
            bg="white"
            px="24px"
            h="56px"
            rounded="lg"
            fontSize="md"
            boxShadow="rgba(0, 0, 0.3)"
          >
            Junte-se a Fã-animation!
          </chakra.button>
        </Flex>
      </Container>
    </Box>
  );
};

export default Discord;
