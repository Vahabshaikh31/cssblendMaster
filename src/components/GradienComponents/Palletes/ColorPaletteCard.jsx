  import DataPalleteColor from './DataPalleteColor';
  import copy from '../../../assets/copy.svg';

  const ColorPaletteCard = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {DataPalleteColor.map((palette, index) => (
          <div key={index} className="relative w-full mx-auto bg-white dark:bg-zinc-800 rounded-lg shadow-lg overflow-hidden transition-transform transform">
            <div className="flex flex-col ">
              {Object.keys(palette.colors).map((colorKey, colorIndex) => (
                <div key={colorIndex} className="relative  cursor-pointer group h-20 hover:scale-105 hover:text-cyan-400">
                  <div className="absolute textC inset-0 opacity-1 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                    <img src={copy} alt="Copy" className="w-10 h-8 mr-1" />
                    <span className="text-black text-xl  rounded p-1">{palette.colors[colorKey]}</span>
                  </div>
                  <div className="absolute inset-0 font-bold	  hover:bg-black hover:scale-100" style={{ backgroundColor: palette.colors[colorKey] }}></div>
                </div>
              ))}
            </div>
            <div className="p-4 flex flex-col justify-between items-center">
              <h2 className="text-lg font-bold text-zinc-800 dark:text-zinc-400">{palette.paletteName}</h2>
              <div className="flex items-center cursor-pointer space-x-2">
                <img src={copy} alt="Copy" className="w-4 h-4 mr-1" />
                <span className="text-zinc-500 dark:text-zinc-400">{Object.values(palette.colors).join(', ')}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  export default ColorPaletteCard;
