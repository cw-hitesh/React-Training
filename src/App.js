import React from 'react';
import Header from './Header';
import Title from './Title';
import Swiper from './SwiperComponent';
import Navigator from './Navigator';
import DropdownContainer from './DropdownContainer';
import PriceContainer from './PriceContainer';
import EmiWidget from './EmiWidget';
import Bottom from './Bottom';

const cityName="Mumbai",areaName="Airport",modelName="Yamaha FZ S FI";
class App extends React.Component {
    render() { 
        return (
        <React.StrictMode>
        <Header/>
        <Title modelName={modelName}/>
        <Navigator/>
        <Swiper/>
        <DropdownContainer cityName={cityName} areaName={areaName}/>
        <PriceContainer/>
        <EmiWidget/>
        <Bottom/>
      </React.StrictMode>
        )};
};

export default App;


