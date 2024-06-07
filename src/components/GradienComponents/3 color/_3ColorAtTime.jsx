import  { useState, useEffect } from 'react';
import GradientNavbar from '../Navbr/GradientNavbar';
import { hsvaToHex } from '@uiw/color-convert';
import Chrome from '@uiw/react-color-chrome';
import { GithubPlacement } from '@uiw/react-color-github';
import arrow from '../../../assets/arrow.svg';
import './_3ColorAtTime.css';

const _3ColorAtTime = () => {
  const [hidden1, setHidden1] = useState(false);
  const [hidden2, setHidden2] = useState(false);
  const [hidden3, setHidden3] = useState(false);

  const [hsva1, setHsva1] = useState({ h: 216, s: 93, v: 95, a: 1 });
  const [hsva2, setHsva2] = useState({ h: 202, s: 100, v: 100, a: 1 });
  const [hsva3, setHsva3] = useState({ h: 188, s: 100, v: 85, a: 1 });

  const hex1 = hsvaToHex(hsva1);
  const hex2 = hsvaToHex(hsva2);
  const hex3 = hsvaToHex(hsva3);

  const [position, setPosition] = useState('to right');
  const [gradientStyle, setGradientStyle] = useState('');

  useEffect(() => {
    setGradientStyle(`linear-gradient(${position}, ${hex1}, ${hex2}, ${hex3})`);
  }, [position, hex1, hex2, hex3]);

  const handleCopyClick = () => {
    setHidden1(!hidden1);
    setHidden2(!hidden2);
    setHidden3(!hidden3);
    navigator.clipboard.writeText(`background: ${gradientStyle};`).then(() => {
      alert('Copied to clipboard');
    });
  };

  return (
    <div>
      <GradientNavbar />
      <div className='gradient-body' style={{ background: gradientStyle }}>
        <div className='gradient-main'>
          <div className='gradient-position-buttons pt-20'>
            {['to top', 'to bottom', 'to left', 'to right', 'to top left', 'to top right', 'to bottom left', 'to bottom right'].map((pos, idx) => (
              <button key={idx} className={`gradient-button arrow-${idx + 1}`} onClick={() => setPosition(pos)}>
                    <img src={arrow} alt="" height={"20px"} width={"25px"}/>
              </button>
            ))}
          </div>
          <div className='color-buttons'>
            <div className='color-picker-container'>
              {hidden1 && (
                <Chrome
                  color={hsva1}
                  onChange={(color) => setHsva1(color.hsva)}
                  placement={GithubPlacement.Bottom}
                  className="color-picker"
                />
              )}
              <button
                className='G_colorBtn py-4 px-4 focus:outline-none text-center me-2 mb-2'
                style={{ backgroundColor: hex1 }}
                onClick={() => setHidden1(!hidden1)}
              >
                {hex1}
              </button>
            </div>
            <div className='color-picker-container'>
              {hidden2 && (
                <Chrome
                  color={hsva2}
                  onChange={(color) => setHsva2(color.hsva)}
                  placement={GithubPlacement.Bottom}
                  className="color-picker"
                />
              )}
              <button
                className='G_colorBtn py-4 px-4 focus:outline-none text-center me-2 mb-2'
                style={{ backgroundColor: hex2 }}
                onClick={() => setHidden2(!hidden2)}
              >
                {hex2}
              </button>
            </div>
            <div className='color-picker-container'>
              {hidden3 && (
                <Chrome
                  color={hsva3}
                  onChange={(color) => setHsva3(color.hsva)}
                  placement={GithubPlacement.Bottom}
                  className="color-picker"
                />
              )}
              <button
                className='G_colorBtn py-4 px-4 focus:outline-none text-center me-2 mb-2'
                style={{ backgroundColor: hex3 }}
                onClick={() => setHidden3(!hidden3)}
              >
                {hex3}
              </button>
            </div>
          </div>
          <div className="copy-code" onClick={handleCopyClick}>
            {`background: ${gradientStyle};`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default _3ColorAtTime;
