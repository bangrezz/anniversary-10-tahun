import { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';
import { siteConfig } from '../config/content';

let apiPromise;
function loadYouTube() {
  if (window.YT?.Player) return Promise.resolve(window.YT);
  if (!apiPromise) {
    apiPromise = new Promise((resolve, reject) => {
      const previous = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        previous?.();
        resolve(window.YT);
      };
      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      script.onerror = () => reject(new Error('YouTube tidak dapat dimuat'));
      document.head.appendChild(script);
    });
  }
  return apiPromise;
}

export function BackgroundMusic() {
  const container = useRef(null);
  const player = useRef(null);
  const ready = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  const { youtubeId, volume } = siteConfig.music;

  useEffect(() => {
    let disposed = false;
    const start = () => {
      if (ready.current) player.current?.playVideo();
    };
    window.addEventListener('anniversary:play-music', start);
    loadYouTube().then((YT) => {
      if (disposed) return;
      const mount = document.createElement('div');
      container.current.appendChild(mount);
      player.current = new YT.Player(mount, {
        width: '100%', height: '200', videoId: youtubeId,
        playerVars: {
          autoplay: 1, playsinline: 1, controls: 1,
          loop: 1, playlist: youtubeId, origin: window.location.origin,
        },
        events: {
          onReady: (event) => {
            if (disposed) return;
            ready.current = true;
            event.target.getIframe().title = 'YouTube — lagu untuk Reza & Ulfa';
            event.target.getIframe().tabIndex = -1;
            event.target.setVolume(volume);
            event.target.playVideo();
          },
          onStateChange: (event) => {
            if (disposed) return;
            setPlaying(event.data === YT.PlayerState.PLAYING);
          },
          onError: () => {
            if (!disposed) {
              setFailed(true);
              setPlaying(false);
            }
          },
        },
      });
    }).catch(() => {
      if (!disposed) {
        setFailed(true);
      }
    });
    return () => {
      disposed = true;
      ready.current = false;
      window.removeEventListener('anniversary:play-music', start);
      player.current?.destroy();
      player.current = null;
    };
  }, [youtubeId, volume]);

  return (
    <aside className="music-player" aria-label="Musik pengiring">
      <div className="music-player-heading">
        <button type="button" disabled={failed}
          aria-label={playing ? 'Jeda musik' : 'Putar musik'}
          onClick={() => {
            if (!ready.current) return;
            if (playing) player.current.pauseVideo();
            else player.current.playVideo();
          }}>
          {playing ? <Pause size={18} /> : <Play size={18} />}
        </button>
      </div>
      <div ref={container} className="music-player-video" aria-hidden="true" />
      {failed && <a href={`https://www.youtube.com/watch?v=${youtubeId}`} target="_blank" rel="noreferrer">Dengarkan di YouTube ↗</a>}
    </aside>
  );
}
