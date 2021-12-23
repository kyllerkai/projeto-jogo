/* eslint-disable */
import React from 'react';
import {
  SimpleGrid, Flex, chakra,
  Stack, Text, Icon, Box, useMediaQuery, Button
} from '@chakra-ui/react';
import data from '../../../data/anime.json';
export default function Layout() {
  const [isLargerThan646] = useMediaQuery("(min-width: 646px)")
  const [urlImageBig, setImage] = React.useState('');
  const [urlImage, setImageSmall] = React.useState('');
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  React.useEffect(() => {
    var x = Math.floor((Math.random() * data.length - 1) + 1);
    setImage(data[x].urlImageBig);
    setImageSmall(data[x].urlImage);
    setName(data[x].name);
    setDescription(data[x].description);
  }, []);
  return (
    <React.Fragment>
      <SimpleGrid
        as="section"
        columns={{ base: 1, md: 2 }}
        spacing={0}
        background={
          isLargerThan646 ? `linear-gradient(rgb(0, 0, 0), rgba(10, 10, 10, 0.43), rgb(0, 0, 0)), url(${urlImageBig}) left top / cover no-repeat` : `linear-gradient(rgb(0, 0, 0), rgba(10, 10, 10, 0.43), rgb(0, 0, 0)), url(${urlImage}) left top / cover no-repeat`
        }
        objectFit="cover"
        backgroundPosition="center"
        transition="all ease 0.5s"
        height="100vh"
        maxHeight="500px"
        style={{ backgroundPositionY: '1px' }}
      >
        <Flex
          direction="column"
          alignItems="start"
          justifyContent="center"
          px={{ base: 4, lg: 20 }}
          py={24}
          w="98%"
          maxHeight="100%"
        >
          <chakra.h1
            mb={6}
            fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }}
            fontWeight="bold"
            color="brand.600"
            lineHeight="shorter"
          >
            {name}
          </chakra.h1>
          <Text 
          color="brand.600" 
          fontSize={{ base: 'lg', lg: 'xl' }}
          opacity={0.7}
          >2019 | <span style={{padding: '0 5px', border: '1px solid #a1a1a1'}}>L</span> | 1 temporada | Séries de anime</Text>
          <Box>
            <Text
              maxW="500px"
              mx="auto"
              opacity={0.7}
              fontSize={{ base: 'lg', lg: 'xl' }}
              mt="6"
              noOfLines={3}
            >
              {description}
            </Text>
          </Box>
          <Stack
            mt={2}
            direction={{ base: "column", sm: "row" }}
            mb={{ base: 4, md: 8 }}
            spacing={2}
            w="100%"
            justifyContent={{ sm: "left", md: "center" }}
          >
            <Button
              as="a"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              w={{ base: "full", sm: "auto" }}
              mb={{ base: 2, sm: 0 }}
              size="lg"
              cursor="pointer"
              bg="gray.500"
            >
              Assista
              <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                  clipRule="evenodd"
                />
              </Icon>
            </Button>
            <Button
              as="a"
              bg="gray.500"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              w={{ base: "full", sm: "auto" }}
              mb={{ base: 2, sm: 0 }}
              size="lg"
              cursor="pointer"
            >
              Minha lista
              <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                  clipRule="evenodd"
                />
              </Icon>
            </Button>
          </Stack>
        </Flex>
      </SimpleGrid >
    </React.Fragment>
  );
};
