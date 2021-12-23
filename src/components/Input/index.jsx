import React from 'react';
import {
  Input as ChakraInput,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

const Input = ({ iconLeft, placeholder, type, name, iconRight, ref, ...props }) => {
  return (
    <InputGroup>
      <InputLeftElement
        width="3rem"
        height="100%"
        color="#8257e5"
        children={iconLeft}
        _focus={{ color: '#fff' }}
      />
      <ChakraInput
        required
        name={name}
        type={type}
        placeholder={placeholder}
        focusBorderColor="purple.500"
        backgroundColor="gray.800"
        rounded="lg"
        ref={ref}
        {...props}
      />
      {type === 'email' ? '' : (
        <InputRightElement
          children={iconRight}
          cursor="pointer"
          color="#8257e5"
          width="3rem"
          height="100%"
        />
      )}
    </InputGroup>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  iconLeft: PropTypes.element,
  iconRight: PropTypes.element,
};

export default Input;