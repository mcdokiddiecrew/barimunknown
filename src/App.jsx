import { useState, useEffect } from 'react';
import './App.css';
import badending from './assets/endings/badending.png';
import goodending from './assets/endings/goodending.png';

const images = [
  { src: 'path/to/qr1.png', alt: 'QR Code 1' },
  { src: 'path/to/qr2.png', alt: 'QR Code 2' },
  { src: 'path/to/qr3.png', alt: 'QR Code 3' },
  { src: 'path/to/qr4.png', alt: 'QR Code 4' },
  { src: 'path/to/qr5.png', alt: 'QR Code 5' },
  { src: 'path/to/qr6.png', alt: 'QR Code 6' },
  { src: 'path/to/qr7.png', alt: 'QR Code 7' },
  { src: goodending, alt: 'Good Ending' },
  { src: badending, alt: 'Bad Ending' },
];

function App() {
  const [randomIndex] = useState(Math.floor(Math.random() * images.length));
  const [themeClass, setThemeClass] = useState('');

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

  return (
    <div className={`main ${themeClass}`}>
      <img src={images[randomIndex].src} alt={images[randomIndex].alt} />
      <p className="bottomtext">{text}</p>
    </div>
  );
}

export default App;
