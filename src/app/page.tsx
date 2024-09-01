'use client';


import React, { useState } from 'react';
import PlayPause from './context/PlayPause';

const Home: React.FC = () => {
  const [playing, setPlaying] = useState<boolean>(false);

  return (
    <main className="page-container flex min-h-screen flex-col items-center justify-center p-6">
      <PlayPause playing={playing} />
      <button 
        onClick={() => setPlaying(!playing)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        {playing ? 'Pausar' : 'Executar'}
      </button>
    </main>
  );
}

export default Home;