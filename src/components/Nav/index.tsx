/* eslint-disable */
import React from 'react';
import {
  Box, Button, chakra, CloseButton, Flex, HStack,
  IconButton, VisuallyHidden, VStack, useColorModeValue, useDisclosure
} from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai'
export default function NavHero() {
  const mobileNav = useDisclosure();
  return (
    <React.Fragment>
      <chakra.header
        shadow="md"
        transition="all 0.5s ease-in-out"
        pos="fixed"
        top="0"
        zIndex="modal"
        bg="linear-gradient(to bottom, #000000d9, rgb(31 32 34 / 28%))"
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        mb={2}
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto" as="nav">
          <Flex>
            <chakra.a
              href="/"
              title="Fã-animation Home Page"
              display="flex"
              alignItems="center"
            >

              <VisuallyHidden>Fã-animation</VisuallyHidden>
            </chakra.a>
            <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
              Fã-animation
            </chakra.h1>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
            >
              <Button variant="ghost">Equipe</Button>
              <Button variant="ghost">Preços</Button>
              <Button variant="ghost">Blog</Button>
              <Button variant="ghost">Empresa</Button>
            </HStack>
            <Button bg="purple.500" color="white" size="sm">
              Cadastrar
            </Button>
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue("gray.800", "inherit")}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg="black"
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

                <Button w="full" variant="ghost">
                  Equipe
                </Button>
                <Button w="full" variant="ghost">
                  Preços
                </Button>
                <Button w="full" variant="ghost">
                  Blog
                </Button>
                <Button w="full" variant="ghost">
                  Empresa
                </Button>
                <Button w="full" variant="ghost">
                  Cadastrar
                </Button>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
};
