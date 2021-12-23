import React from 'react';
import { ButtonGroupProps, Box, Text } from '@chakra-ui/react';
import { SocialMediaLinks } from './SocialMediaLinks';

export const Logo = (props: ButtonGroupProps) => {
  return (
    <Box {...props}>
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="20px"
        fontWeight="bold"
        mb={1}
      >
        Fã-animation
      </Text>
      <SocialMediaLinks />
    </Box>
  );
};