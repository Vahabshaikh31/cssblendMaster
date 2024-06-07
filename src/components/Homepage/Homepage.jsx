import GradientNavbar from '../GradienComponents/Navbr/GradientNavbar';
import img from '../../assets/money-heart.gif';
import ColorPaletteCard from '../GradienComponents/Palletes/ColorPaletteCard';
import video from '../../assets/video.mp4';

const Homepage = () => {
    return (
        <>
            <div className="Homepage_main relative bg-gray-100 min-h-screen">
                <GradientNavbar />

                <div className="container z-10 mx-auto p-4 flex flex-col lg:flex-row items-center justify-between h-screen">
                    <video src={video} className='absolute inset-0 object-cover w-full h-full opacity-50 z-0' autoPlay loop muted></video>
                    <div className="lg:w-1/2 z-10 p-4 text-center lg:text-left">
                        <h1 className="text-3xl lg:text-5xl font-bold text-black dark:text-white mb-4">
                            The superfast background linear-gradient color Generator!
                        </h1>
                        <h2 className="text-xl lg:text-2xl text-gray-600 text-black-300 mb-8">
                            Create the perfect background linear-gradient for your website.
                        </h2>
                        <div className="flex flex-col lg:flex-row gap-4 items-center justify-center ">
                            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition-colors">
                                Start the generator!
                            </button>
                            <button className="border border-zinc-300 dark:border-blue-800 px-6 py-3 rounded-lg text-lg hover:bg-blue-200 dark:hover:bg-b-700 transition-colors">
                                Explore trending palettes
                            </button>
                        </div>
                    </div>
                    <div className="lg:w-1/2 z-10 p-4 flex justify-center lg:justify-end">
                        <img src={img} alt="Gradient Generator" className="w-full max-w-lg" />
                    </div>
                </div>
                <div className="container z-10 mx-auto p-4">
                    <ColorPaletteCard />
                </div>
            </div>
        </>
    );
};

export default Homepage;
