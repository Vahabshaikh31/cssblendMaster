import GradientNavbar from '../Navabr/GradientNavbar';
import ColorPaletteCard from './ColorPaletteCard';

import './PALLETS.css'

const PALETTES = () => {
    return (
        <>
            <div className='Pallets_main'>
        <ColorPaletteCard/>

                <div className='P_hero'>
                    <div className='G_Nav'>
                        <GradientNavbar />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PALETTES
