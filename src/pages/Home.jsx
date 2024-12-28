import React from 'react';
import HeroSection from '../components/HomeComponents/HeroSection';
import MasInformacion from '../components/HomeComponents/MasInformacion';
import SobreNosotros from '../components/HomeComponents/SobreNosotros';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <MasInformacion />
            <SobreNosotros />
        </div>
    );
};

export default Home;