import React from 'react';
import Plyr from 'react-plyr';
import { Container } from '@chakra-ui/react';

export default function VideoPlayer({ source, poster }) {
  return (
    <React.Fragment>
      <Container maxWidth="74ch">
        <Plyr
          type="video"
          poster={poster}
          url={source}
        />
      </Container>
    </React.Fragment>
  );
};