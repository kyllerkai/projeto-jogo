import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { CardGrid, Container, FooterChakra as FooterContainer } from '../../containers';
import { Hero, Accordion, Card, NavHero, Discord, BoxHero } from '../../components';
const Inner = styled.hr`
  display: flex;
  border-bottom: 8px solid #222;
  color: white;
  overflow: hidden;
  border-top-color: #222;
`;

export default function Index() {
  return (
    <React.Fragment key="home">
      <Helmet>
        <title> Fã-animatio | Onde cada anime ganha vida em seus corações!</title>
      </Helmet>
      <NavHero />
      <Hero />
      <Inner />
      <Container />
      <BoxHero />
      <Card />
      <CardGrid />
      <Accordion />
      <Discord />
      <FooterContainer />
    </React.Fragment>
  );
};
