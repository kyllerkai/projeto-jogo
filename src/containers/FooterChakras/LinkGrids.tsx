/* eslint-disable */
import { Box, Link, SimpleGrid, SimpleGridProps, Stack } from '@chakra-ui/react';
import { FooterHeading } from './FooterHeading';

export const LinkGrids = (props: SimpleGridProps) => (
  <SimpleGrid columns={[2, 2, 4]} {...props} spacing={{ base: '10', lg: '20' }}>
    <Box minW="130px">
      <FooterHeading mb="4">Time</FooterHeading>
      <Stack>
        <Link>Equipe</Link>
        <Link>Centro de ajuda</Link>
        <Link>Trabalho</Link>
      </Stack>
    </Box>
    <Box minW="130px">
      <FooterHeading mb="4">Suporte</FooterHeading>
      <Stack>
        <Link>Reportar falhas</Link>
        <Link>Entre em contato</Link>
        <Link>Teste de Internet</Link>
      </Stack>
    </Box> 
    <Box minW="130px">
      <FooterHeading mb="4">Empressa</FooterHeading>
      <Stack>
        <Link>Recomendações</Link>
        <Link>Perguntas frequentes</Link>
        <Link>Avisos legais</Link>
      </Stack>
    </Box>
    <Box minW="130px">
      <FooterHeading mb="4">Legal</FooterHeading>
      <Stack>
        <Link>Privacidade</Link>
        <Link>Termos de uso</Link>
        <Link>Politica de Cookies</Link>
      </Stack>
    </Box>
  </SimpleGrid>
);