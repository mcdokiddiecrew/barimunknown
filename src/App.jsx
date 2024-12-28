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
