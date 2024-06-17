import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RandomeGenerate from './random/RandomeGenerate';
import _2ColorAtTime from './2 color/_2ColorAtTime';
import _3ColorAtTime from './3 color/_3ColorAtTime';
import Homepage from '../Homepage/Homepage';
import BoxContainer from '../Box SHadow Components/BoxContainer';
const HeroSectoon = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    
                    <Route path="/" element={<Homepage />} />
                    <Route path="/randomGenerate" element={<RandomeGenerate />} />
                    <Route path="/_2ColorAtTime" element={<_2ColorAtTime />} />
                    <Route path="/_3ColorAtTime" element={<_3ColorAtTime />} />
                    <Route path="/BoxContainer" element={<BoxContainer />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default HeroSectoon;
