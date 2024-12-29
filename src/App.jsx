import { useState, useEffect } from 'react';
import './App.css';
import badending from './assets/endings/badending.png';
import goodending from './assets/endings/goodending.png';
import qr1 from './assets/qr/qr1.png';
import qr2 from './assets/qr/qr2.png';
import qr3 from './assets/qr/qr3.png';
import qr4 from './assets/qr/qr4.png';
import qr5 from './assets/qr/qr5.png';
import qr6 from './assets/qr/qr6.png';
import qr7 from './assets/qr/qr7.png';
import goodending1 from './assets/sounds/goodending1.mp3';
import goodending2 from './assets/sounds/goodending2.mp3';
import badending1 from './assets/sounds/badending1.mp3';
import badending2 from './assets/sounds/badending2.mp3';

const images = [
  { src: qr1, alt: 'QR Code 1' },
  { src: qr2, alt: 'QR Code 2' },
  { src: qr3, alt: 'QR Code 3' },
  { src: qr4, alt: 'QR Code 4' },
  { src: qr5, alt: 'QR Code 5' },
  { src: qr6, alt: 'QR Code 6' },
  { src: qr7, alt: 'QR Code 7' },
  { src: goodending, alt: 'Good Ending' },
  { src: badending, alt: 'Bad Ending' },
];

const goodEndingSounds = [goodending1, goodending2];
const badEndingSounds = [badending1, badending2];

function App() {
  const [randomIndex] = useState(Math.floor(Math.random() * images.length));
  const [themeClass, setThemeClass] = useState('');
  const [audioPlayed, setAudioPlayed] = useState(false);

  const isQRCode = images[randomIndex].alt.startsWith('QR Code');
  const text = isQRCode ? 'Scan Me' : images[randomIndex].alt;

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (text === 'Bad Ending') {
        setThemeClass('bad-ending');
      } else if (text === 'Good Ending') {
        setThemeClass('good-ending');
      } else {
        setThemeClass('default-theme');
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [text]);

  const playSound = (soundArray) => {
    const randomSound = soundArray[Math.floor(Math.random() * soundArray.length)];
    const audio = new Audio(randomSound);
    audio.play().catch((error) => console.error('Audio playback failed:', error));
  };

  const handleUserInteraction = () => {
    if (!audioPlayed) {
      if (text === 'Bad Ending') {
        playSound(badEndingSounds);
      } else if (text === 'Good Ending') {
        playSound(goodEndingSounds);
      }
      setAudioPlayed(true);
    }
  };

  return (
    <div className={`main ${themeClass}`} onClick={handleUserInteraction}>
      <img src={images[randomIndex].src} alt={images[randomIndex].alt} className="qr-code" />
      <p className="bottomtext">{text}</p>
    </div>
  );
}

export default App;
