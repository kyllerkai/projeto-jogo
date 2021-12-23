import React from 'react';
import {
  Accordion as ChakraAccordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box, Container, Heading, Center, AccordionProps,
} from '@chakra-ui/react';
import styled from 'styled-components';
import faqDate from '../../json/faq/faqs.json';

const Circle = styled.div`
   width: 30px;
   height: 30px;
   border-radius: 15px;
   border: 2px solid #04D361;
`;
const Accordion: React.FC<AccordionProps> = () => {
  return (
    <Container maxWidth="74ch" mb="22px">
      <Center marginBottom={5}>
        <Heading as="h2">Perguntas frequentes</Heading>
      </Center>
      <ChakraAccordion allowMultiple>
        {faqDate.map((faq) => (
          <AccordionItem key={faq.id} borderTopWidth={0} borderBottomWidth={0} marginBottom="3px">
            <h2>
              <AccordionButton
                boxShadow="none"
                padding="0.8em 1.2em 0.8em 1.2em"
                background="gray.700"
                _hover={{ backgroundColor: 'gray.600' }}
              >
                <Box flex="1" textAlign="left">
                  <strong>
                    <span style={{ color: '#737380' }}>0</span>
                    <span style={{ color: '#04D361' }}>
                      {faq.id}
                      .
                    </span>
                  </strong>
                  {' '}
                  {faq.header}
                </Box>
                <Circle>
                  <AccordionIcon />
                </Circle>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} background="#2d2d2d">
              {faq.body}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </ChakraAccordion>
    </Container>
  );
};
export default Accordion;