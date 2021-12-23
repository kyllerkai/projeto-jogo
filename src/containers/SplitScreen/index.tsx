import React from 'react';
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  Icon,
  useToast,
} from '@chakra-ui/react';
import data from '../../data/anime.json';

export default function SplitScreen() {
  const toast = useToast();
  // const [isLargerThan646] = useMediaQuery("(min-width: 646px)")
  const [urlImageBig, setImage] = React.useState('');
  // const [urlImage, setImageSmall] = React.useState('');
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  React.useEffect(() => {
    const x = Math.floor((Math.random() * data.length - 1) + 1);
    setImage(data[x].urlImageBig);
    // setImageSmall(data[x].urlImage);
    setName(data[x].name);
    setDescription(data[x].description);
  }, []);
  return (
    <Stack minH={'90vh'} direction={{ base: 'column-reverse', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            mt={
              useBreakpointValue({ base: '4px', md: '6px' })
            }
          >
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue',
                zIndex: -1,
              }}>
              Fã-animation
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'} noOfLines={3}>
              {name}
            </Text>{' '}
          </Heading>
          <Text
            color="brand.600"
            fontSize={{ base: 'lg', lg: 'xl' }}
            opacity={0.7}
          >2019 |{' '}
            <span style={{ padding: '0 5px', border: '1px solid #a1a1a1' }}>L</span> | 1 temporada | Séries de anime
          </Text>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.400'} noOfLines={5} textAlign="justify">
            {description}
          </Text>
          <Stack
            mt={2}
            direction={{ base: "column", sm: "row" }}
            mb={{ base: 4, md: 8 }}
            spacing={2}
            w="100%"
            justifyContent='flex-start'
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
              onClick={() =>
                /* eslint-disable */
                toast({
                  title: "Salvo na sua lista",
                  description: `${Number(name) >= 10 ? name : name.substring(0, name.length)}, foi adicionado com sucesso <3`,
                  status: "success",
                  duration: 2000,
                  isClosable: true,
                })
              }
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
        </Stack>
      </Flex>
      <Flex flex={2}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          loading="eager"
          style={{
            filter: 'brightness(29%)',
          }}
          src={
            urlImageBig
          }
        />
      </Flex>
    </Stack>
  );
}