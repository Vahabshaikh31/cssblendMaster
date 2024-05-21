import { useState } from 'react';
import './Gradient.css';
import arrow from '../../assets/arrow.svg'

const Gradient = () => {
  const generateColor = () => {
    let chars = "123456789abcdef";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += chars[Math.floor(Math.random() * chars.length)];
    }
    return color;
  };

  const hexToRgb = (hex) => {
    hex = hex.substring(1); // Remove the '#' character
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgb(${r}, ${g}, ${b})`;
  };

  const [colors, setColors] = useState(["#051937", "#a8eb12"]);
  const [position, setPosition] = useState('to right');
  const [gradientStyle, setGradientStyle] = useState(' background: linear-gradient(to right top, #116af1, #009bff, #00bad8, #00ce7c, #94d600);');

  const setGradient = () => {
    const rgbColors = colors.map(color => hexToRgb(color));
    const gradient = `linear-gradient(${position}, ${rgbColors.join(', ')})`;
    setGradientStyle(gradient);
  };

  const handleColorChange = (index) => {
    const newColors = [...colors];
    newColors[index] = generateColor();
    setColors(newColors);
    setGradient();
  };

  const handlePositionClick = (newPosition) => {
    setPosition(newPosition);
    setGradient();
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(`background: ${gradientStyle};`).then(() => {
      alert("Copied to clipboard");
    });
  };

  return (
    <>
      <div className="G_main" style={{ background: gradientStyle, padding: '20px' }}>
        <div>
          <div className='G_positions'>
            <button className='Gbtns_p a1' onClick={() => handlePositionClick('to top')}>
              <img src={arrow} alt="" />
            </button>

            <button className='Gbtns_p a2' onClick={() => handlePositionClick('to bottom')}>
              <img src={arrow} alt="" />
            </button>

            <button className='Gbtns_p a3' onClick={() => handlePositionClick('to left')}><img src={arrow} alt="" /></button>
            
            <button className='Gbtns_p a4' onClick={() => handlePositionClick('to right')}><img src={arrow} alt="" /></button>
            <button className='Gbtns_p a5' onClick={() => handlePositionClick('to top left')}><img src={arrow} alt="" /></button>
            <button className='Gbtns_p a6' onClick={() => handlePositionClick('to top right')}> <img src={arrow} alt="" /></button>
            <button className='Gbtns_p a7' onClick={() => handlePositionClick('to bottom left')}><img src={arrow} alt="" /></button>
            <button className='Gbtns_p a8' onClick={() => handlePositionClick('to bottom right')}><img src={arrow} alt="" /></button>
          </div>

          {colors.map((color, index) => (
            <button key={index} className='G_colorBtn py-4 px-4 focus:outline-none text-center me-2 mb-2' style={{ backgroundColor: color }} onClick={() => handleColorChange(index)}>{color}</button>
          ))}
        </div>
        <div className="cpyCode" onClick={handleCopyClick}>
          {`background: ${gradientStyle};`}
          
        </div>
      </div >
    </>
  );
};

export default Gradient;
