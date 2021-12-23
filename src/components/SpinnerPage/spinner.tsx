import React from 'react';
import { Center, Heading, Spinner as ChakraSpinner, Box } from '@chakra-ui/react';
import { Container } from './styles';
export default function Spinner() {
  return (
    <Container>
      <Heading
        bgClip="text"
        textAlign="center"
        fontSize="2.2rem"
        fontWeight="extrabold"
        bgGradient="linear(to-l, #7928CA,#FF0080)"
      >
        Fã-animation
      </Heading>
      <Box display="inline-block">
        <Center mt={7}>
          <ChakraSpinner
            thickness="4px"
            speed="0.40s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Center>
      </Box>
    </Container>
  );
}
