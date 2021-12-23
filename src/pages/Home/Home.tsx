import React from 'react';
import NavHero from '../components/NavBar';
import { FooterChakra } from '../../containers/';
import Items from '../../containers/cardItem';
import Layout from '../../containers/SplitScreen';
import CardItem from '../../components/ProductGrids';
// import CarouselSlider from '../components/Carousel';
export default function Home() {
  return (
    <React.Fragment key="home">
      <NavHero />
      <Layout />
      <CardItem />
      <Items />
      <CardItem />
      <FooterChakra />
    </React.Fragment>
  );
};