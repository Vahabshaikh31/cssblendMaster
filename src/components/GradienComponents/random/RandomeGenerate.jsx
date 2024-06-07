import { useState, useEffect } from 'react';
import './RandomeGenerate.css';
import arrow from '../../../assets/arrow.svg';
import GradientNavbar from '../Navbr/GradientNavbar';

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



  const handleCopyClick = () => {
    navigator.clipboard.writeText(`background: ${gradientStyle};`).then(() => {
      alert("Copied to clipboard");
    });
  };

  return (
    <>
     <div>
      <GradientNavbar />
      <div className='gradient-body' style={{ background: gradientStyle }}>
        <div className='gradient-main'>
            <div className='gradient-position-buttons pt-20'>
              {['to top', 'to bottom', 'to left', 'to right', 'to top left', 'to top right', 'to bottom left', 'to bottom right'].map((pos, idx) => (
                <button key={idx} className={`gradient-button arrow-${idx + 1}`}   onClick={() => setPosition(pos)}>
                      <img src={arrow} alt="" height={"20px"} width={"25px"}/>

                </button>
              ))}
            </div>

            <div className='color-buttons'>
              {colors.map((color, index) => (
                <button key={index} className='G_colorBtn py-4 px-4 focus:outline-none text-center me-2 mb-2' style={{ backgroundColor: color }} onClick={() => handleColorChange(index)}>{color}</button>
              ))}
            </div>

            <div className="copy-code" onClick={handleCopyClick}>
            {`background: ${gradientStyle};`}
          </div>
          </div>

        </div>
      </div>

    </>
  );
};

export default RandomeGenerate;
