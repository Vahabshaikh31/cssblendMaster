import { useState, useEffect } from 'react';
import arrow from '../../../assets/arrow.svg';
import GradientNavbar from '../Navbr/GradientNavbar';
import Swal from 'sweetalert2';

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
    const b = (bigint & 255);
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
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "copied successful"
      });
    });
  };

  return (
    <>
      <div>
        <GradientNavbar />
        <div className="flex flex-col items-center justify-center min-h-screen" style={{ background: gradientStyle }}>
          <div className="flex flex-col items-center py-20">
            <div className="flex flex-wrap justify-center">
              {['to top', 'to bottom', 'to left', 'to right', 'to top left', 'to top right', 'to bottom left', 'to bottom right'].map((pos, idx) => (
                <button key={idx} className="m-2 p-2 rounded-full hover:bg-gray-200 focus:outline-none" onClick={() => setPosition(pos)}>
                  <img src={arrow} alt="" height="20px" width="25px" className={`transform ${arrowRotations[idx]}`} />
                </button>
              ))}
            </div>

            <div className="flex flex-wrap justify-center mt-4">
              {colors.map((color, index) => (
                <button
                  key={index}
                  className="m-2 py-4 px-4 rounded-full text-white shadow-lg focus:outline-none transition-transform duration-300 ease-in-out hover:translate-y-[-5px] G_colorBtn"
                  style={{ backgroundColor: color }}
                  onClick={() => handleColorChange(index)}
                >
                  {color}
                </button>
              ))}
            </div>

            <div className="mt-4 p-4 rounded bg-gray-800 text-white cursor-pointer" onClick={handleCopyClick}>
              {`background: ${gradientStyle};`}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const arrowRotations = [
  'rotate-270',
  'rotate-90',
  'rotate-180',
  'rotate-0',
  'rotate-235',
  '-rotate-45',
  'rotate-125',
  'rotate-45'
];

export default RandomeGenerate;
