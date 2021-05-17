import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';

import {
  Container,
  Video,
  UpperTitle,
  FlexboxLeft,
  FlexboxRight,
  NextVideos,
  NextVideoTitle,
} from './styles';

import Loading from '../../components/Loading';

interface LocationState {
  videoId: string;
  title: string;
  description: string;
}

interface Video {
  snippet: {
    title: string;
    mediumTitle: string;
    shortTitle: string;
    position: number;
    description: string;
    resourceId: {
      videoId: string;
    };
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
}

const VideoPlayer: React.FC = () => {
  const { state } = useLocation<LocationState>();

  return (
    <>

        <Container>
          <FlexboxLeft>
            <p>{state.title}</p>
            <UpperTitle>
              <strong>
                {state.title}
              </strong>

            </UpperTitle>
            <iframe
              title="videoPlayer"
              src={`https://www.youtube.com/embed/${state.videoId}?rel=0`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <span>{state.description}</span>
          </FlexboxLeft>
          <FlexboxRight>
          </FlexboxRight>
        </Container>

    </>
  );
};

export default VideoPlayer;
