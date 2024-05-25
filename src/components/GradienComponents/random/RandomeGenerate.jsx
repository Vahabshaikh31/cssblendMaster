import { useState, useEffect } from 'react';
import './RandomeGenerate.css';
import arrow from '../../../assets/arrow.svg';
import GradientNavbar from '../Navabr/GradientNavbar';

const RandomeGenerate = () => {

  const generateColor = () => {
    let chars = "123456789abcdef";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += chars[Math.floor(Math.random() * chars.length)];
    }
    return color;
  };

  const hexToRgb = (hex) => {
    hex = hex.substring(1);
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgb(${r}, ${g}, ${b})`;
  };

  const [colors, setColors] = useState(["#051937", "#a8eb12"]);
  const [position, setPosition] = useState('to right');
  const [gradientStyle, setGradientStyle] = useState('');

  useEffect(() => {
    setGradient();
  }, [colors, position]);

  const setGradient = () => {
    const rgbColors = colors.map(color => hexToRgb(color));
    const gradient = `linear-gradient(${position}, ${rgbColors.join(', ')})`;
    setGradientStyle(gradient);
  };

  const handleColorChange = (index) => {
    setColors(prevColors => {
      const newColors = [...prevColors];
      newColors[index] = generateColor();
      return newColors;
    });
  };

  const handlePositionClick = (newPosition) => {
    setPosition(newPosition);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(`background: ${gradientStyle};`).then(() => {
      alert("Copied to clipboard");
    });
  };

  return (
    <>
      <div className='G_Body' style={{ background: gradientStyle, padding: '20px' }}>

        <div className="G_main">
          <div className='G_Nav'>
            <GradientNavbar />
          </div>

          <div className='G_positio2'>
            <div className='G_positions'>
              <button className='Gbtns_p a1' onClick={() => handlePositionClick('to top')}>
                <img src={arrow} alt="" />
              </button>
              <button className='Gbtns_p a2' onClick={() => handlePositionClick('to bottom')}>
                <img src={arrow} alt="" />
              </button>
              <button className='Gbtns_p a3' onClick={() => handlePositionClick('to left')}>
                <img src={arrow} alt="" />
              </button>
              <button className='Gbtns_p a4' onClick={() => handlePositionClick('to right')}>
                <img src={arrow} alt="" />
              </button>
              <button className='Gbtns_p a5' onClick={() => handlePositionClick('to top left')}>
                <img src={arrow} alt="" />
              </button>
              <button className='Gbtns_p a6' onClick={() => handlePositionClick('to top right')}>
                <img src={arrow} alt="" />
              </button>
              <button className='Gbtns_p a7' onClick={() => handlePositionClick('to bottom left')}>
                <img src={arrow} alt="" />
              </button>
              <button className='Gbtns_p a8' onClick={() => handlePositionClick('to bottom right')}>
                <img src={arrow} alt="" />
              </button>
            </div>

            <div className='colorbtns'>
              {colors.map((color, index) => (
                <button key={index} className='G_colorBtn py-4 px-4 focus:outline-none text-center me-2 mb-2' style={{ backgroundColor: color }} onClick={() => handleColorChange(index)}>{color}</button>
              ))}
            </div>
            <div className="cpyCode" onClick={handleCopyClick}>
              {`background: ${gradientStyle};`}
            </div>
          </div>

        </div>
      </div>

    </>
  );
};

export default RandomeGenerate;
