'use client';
'use client';

import React from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

type PlayPauseProps = {
  playing: boolean;
};

const PlayPause: React.FC<PlayPauseProps> = ({ playing }) => {
  return (
    <div className="play-pause-container">
      {playing ? (
        <>
          <FaPause size={50} color="red" />
          <p>Executando</p>
        </>
      ) : (
        <>
          <FaPlay size={50} color="green" />
          <p>Pausado</p>
        </>
      )}
    </div>
  );
};

export default PlayPause;
