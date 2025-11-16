import React from 'react';
import MainSection from './MainSection/MainSection';
import MainContent from './MainContent/MainContent';
import SubMainSection from '../../SubMainSection/SubMainSection';

const HomePage = () => {
    return (
        <>
            <MainSection />
            <SubMainSection />
            <MainContent />
        </>
    );
};

export default HomePage;