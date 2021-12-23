/* eslint-disable */
import { Text, TextProps, BoxProps, Box } from '@chakra-ui/layout';

export const Copyright = (props: BoxProps) => (
  <Box fontSize="sm" {...props}>
    <Text>&copy; {new Date().getFullYear()} Fã-animation, Inc.</Text>
  </Box>
);
