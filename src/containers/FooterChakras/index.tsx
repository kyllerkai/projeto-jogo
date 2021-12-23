/* eslint-disable */
import { Box, Stack, StackDivider, Flex } from '@chakra-ui/react'
import { Copyright } from './Copyright'
import { LinkGrids } from './LinkGrids'
import { Logo } from './Logo'
import { SubscribeForm } from './SubscribeForm'

const FooterChakra = () => (
  <Box as="footer" role="contentinfo" mx="auto" maxW="7xl" py="12" px={{ base: '4', md: '8' }}>
    <Stack spacing="10" divider={<StackDivider />}>
      <Stack direction={{ base: 'column', lg: 'row' }} spacing={{ base: '10', lg: '28' }}>
        <Box flex="1,9">
          <Logo />
        </Box>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={2}>
          <LinkGrids spacing={{ base: '10', md: '20', lg: '28' }} flex="1" />
          {/* <SubscribeForm width={{ base: 'md', md: 'sm' }} /> */}
        </Stack>
      </Stack>
      <Flex
        justifyContent="center"
      >
        <Copyright />
        {/* <SocialMediaLinks /> */}
      </Flex>
    </Stack>
  </Box>
);
export default FooterChakra;