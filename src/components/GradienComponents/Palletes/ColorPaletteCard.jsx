import './ColorPaletteCard.css';
import DataPalleteColor from './DataPalleteColor';

const ColorPaletteCard = () => {
  return (
    <>
      {DataPalleteColor.map((palette, index) => (
        <div className="paletteCard" key={index}>
          {/* Render each color from the palette data */}
          <div className="color1" style={{ background: palette.colors }}> <span className='colorname'>{palette.colors}  </span> </div>
          <div className="color2" style={{ background: palette.colors1 }}> <span className='colorname'>{palette.colors}  </span></div>
          <div className="color3" style={{ background: palette.colors2 }}> <span className='colorname'>{palette.colors}  </span></div>
          <div className="color4" style={{ background: palette.color4 }}> <span className='colorname'>{palette.colors}  </span></div>
        </div>
      ))}
    </>
  );
};

export default ColorPaletteCard;
