/* eslint-disable */
import React from 'react';
import {
  SimpleGrid, Flex, chakra,
  Stack, Box, Text,
  Image, Icon, HStack
} from '@chakra-ui/react';
import * as ROUTES from '../../../constants/routes';
import data from '../../../data/anime.json'
export default function SplitHero() {
  const [imageBg, setImage] = React.useState('');
  React.useEffect(() => {
    var x = Math.floor((Math.random() * data.length - 1) + 1);
    setImage(data[x].urlImage);
  }, []);
  
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      spacing={0}
      _after={{
        bg: "brand.500",
        opacity: 0.25,
        pos: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: -1,
        content: '" "',
      }}
    >
      <Flex
        direction="column"
        alignItems="start"
        justifyContent="center"
        px={{ base: 4, lg: 20 }}
        py={24}
        bg="gray.700"
      >
        <chakra.h1
          mb={6}
          fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
          color="brand.600"
          lineHeight="shorter"
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
          Onde cada anime ganha vida em seus corações! Assista
          no seu tempo e no seu conforto!
        </Text>
        <Stack direction='column' spacing={4} mt={3} w="100%">
          <HStack
            mt="6"
            as="a"
            bg="whiteAlpha.300"
            rounded="md"
            px="8"
            py="3"
            href={ROUTES.SIGN_IN}
            color="white"
            fontSize="lg"
            fontWeight="semibold"
            transition="all 0.2s"
            style={{ justifyContent: 'center' }}
          >
            <Text>Entrar</Text>
            <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                clipRule="evenodd"
              />
            </Icon>
          </HStack>
        </Stack>
      </Flex>
      <Box>
        <Image
          src={imageBg}
          alt="Anime"
          fit="cover"
          w="full"
          h={{ base: 64, md: "full" }}
          bg="gray.100"
          loading="lazy"
          transition="all ease 0.5s"
        />
      </Box>
    </SimpleGrid >
  );
};