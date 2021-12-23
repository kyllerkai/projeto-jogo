import React from 'react';
import { ButtonGroup, ButtonGroupProps, IconButton } from '@chakra-ui/react';
import { FaInstagram, FaDiscord, FaTwitter } from 'react-icons/fa';

export const SocialMediaLinks = (props: ButtonGroupProps) => (
  <ButtonGroup {...props}>
    <IconButton bg="gray.600" _hover={{ color: 'purple.600' }} as="a" href="#" aria-label="Discord" icon={<FaDiscord fontSize="20px" />} />
    <IconButton bg="gray.600" _hover={{ color: 'purple.600' }} as="a" href="#" aria-label="Instagram" icon={<FaInstagram fontSize="20px" />} />
    <IconButton bg="gray.600" _hover={{ color: 'purple.600' }} as="a" href="#" aria-label="Twitter" icon={<FaTwitter fontSize="20px" />} />
  </ButtonGroup>
);