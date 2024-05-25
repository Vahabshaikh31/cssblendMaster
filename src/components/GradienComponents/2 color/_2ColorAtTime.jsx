import { useState, useEffect } from 'react';
import './_2ColorAtTime.css';
import GradientNavbar from '../Navabr/GradientNavbar';
import { hsvaToHex } from '@uiw/color-convert';
import Chrome from '@uiw/react-color-chrome';
import { GithubPlacement } from '@uiw/react-color-github';
import arrow from '../../../assets/arrow.svg';


const _2ColorAtTime = () => {
  const [hidden1, setHidden1] = useState(false); // State for first color picker
  const [hidden2, setHidden2] = useState(false); // State for second color picker

  const [hsva1, setHsva1] = useState({ h: 0, s: 25.71, v: 82.35, a: 0.32 });
  const [hsva2, setHsva2] = useState({ h: 0, s: 25.71, v: 82.35, a: 0.32 });

  const hex1 = hsvaToHex(hsva1);
  const hex2 = hsvaToHex(hsva2);


  const [position, setPosition] = useState('to right');
  const [gradientStyle, setGradientStyle] = useState('');

  useEffect(() => {
    setGradient();
  }, [position, hex1, hex2]);

  const setGradient = () => {
    const gradient = `linear-gradient(${position}, ${hex1}, ${hex2})`;
    setGradientStyle(gradient);
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
    <div>

      <GradientNavbar />

      <div className='G_Body' style={{ background: gradientStyle }}>
        <div className="G_main">

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
              <div className="mainc">
                <div className='C2container1'>
                  <div className='colorchoose'>
                    {hidden1 && (
                      <Chrome
                        color={hsva1}
                        onChange={(color) => {
                          setHsva1(color.hsva);
                        }}
                        placement={GithubPlacement.Right}
                        className="colorseletor1"
                      />

                    )}
                  </div>
                  <button className='G_colorBtn py-4 px-4 focus:outline-none text-center me-2 mb-2' style={{ backgroundColor: hex1 }} onClick={() => setHidden1(!hidden1)} >{hex1}</button
                  >
                </div>

                <div className='C2container2'>

                  <div className='colorchoose2'>
                    {hidden2 && (
                      <Chrome
                        color={hsva2}
                        onChange={(color) => {
                          setHsva2(color.hsva);
                        }}
                        placement={GithubPlacement.Left}
                        style={{ float: 'left' }}
                      />
                    )}
                  </div>
                  <button className='G_colorBtn py-4 px-4 focus:outline-none text-center me-2 mb-2' style={{ backgroundColor: hex2 }} onClick={() => setHidden2(!hidden2)}>{hex2}</button>
                </div>
              </div>
            </div>
          </div>
          <div className="cpyCode" onClick={handleCopyClick}>
            {`background: ${gradientStyle};`}
          </div>
        </div>

      </div>
    </div>

  );
};

export default _2ColorAtTime;
