import React from 'react';
import { Player, Youtube, Video, DefaultUi } from '@vime/react';
import { Container } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const PlayerVideo = ({ type }) => (
  <Container maxWidth="80ch">

    {type ? (
      <Player
        theme="dark"
        style={{ '--vm-player-theme': '#e86c8b', cursor: 'pointer' }}
        controls
      >
        <Youtube videoId="lziUYjZSXDo" />
      </Player>
    ) : (
      <Player
        theme="dark"
        style={{ '--vm-player-theme': '#e86c8b', cursor: 'pointer' }}
      >
        <DefaultUi>
          <Video
            crossOrigin
            poster="https://media.vimejs.com/poster.png"
          >
            <source
              data-src="https://media.vimejs.com/720p.mp4"
              type="video/mp4"
            />
            <track
              kind="subtitles"
              src="https://media.vimejs.com/subs/english.vtt"
              srclang="en"
              label="English"
            />  </Video>
        </DefaultUi>
      </Player>
    )}
  </Container >
);

PlayerVideo.propTypes = {
  type: PropTypes.bool.isRequired
};

export default PlayerVideo