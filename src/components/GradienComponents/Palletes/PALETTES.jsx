import GradientNavbar from '../Navabr/GradientNavbar';
import ColorPaletteCard from './ColorPaletteCard';

import './PALLETS.css'

const PALETTES = () => {
    return (
        <>
            <div className='G_Nav'>
                <GradientNavbar />
            </div>
            <div className='Pallets_main'>
                <ColorPaletteCard />
            </div>
        </>
    )
}

export default PALETTES
