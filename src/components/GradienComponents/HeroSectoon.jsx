import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PALETTES from './Palletes/PALETTES';
import RandomeGenerate from './random/RandomeGenerate';
import _2ColorAtTime from './2 color/_2ColorAtTime';
import _3ColorAtTime from './3 color/_3ColorAtTime';
const HeroSectoon = () => {
    return (
        <>



            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PALETTES />} />
                    <Route path="/randomGenerate" element={<RandomeGenerate />} />
                    <Route path="/_2ColorAtTime" element={<_2ColorAtTime />} />
                    <Route path="/_3ColorAtTime" element={<_3ColorAtTime />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default HeroSectoon;
