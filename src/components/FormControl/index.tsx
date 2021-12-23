import React from 'react';
import { FormControl as ChakraControl, FormLabel } from '@chakra-ui/react';

type FormProps = {
  children?: React.ReactNode;
  name: string;
  mt?: number;
  id: string;
};

export default function FormControl({ children, name, mt, id }: FormProps) {
  return (
    <ChakraControl mt={mt} id={id}>
      <FormLabel>{name}</FormLabel>
      {children}
    </ChakraControl>
  );
};
