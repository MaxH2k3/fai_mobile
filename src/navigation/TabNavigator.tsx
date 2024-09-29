import React from 'react';

// import {tabs} from '../constants';
import {hooks} from '../hooks';
import {screens} from '../screens';

const TabNavigator: React.FC = (): JSX.Element => {
  const currentTabScreen = hooks.useSelector((state) => state.tab.screen);

  const renderScreen = () => {
    return (
      <React.Fragment>
        {currentTabScreen === 'Home' && <screens.Home />}
        {currentTabScreen === 'Categories' && <screens.Categories />}
        {currentTabScreen === 'Order' && <screens.Order />}
        {currentTabScreen === 'Wishlist' && <screens.Wishlist />}
        {currentTabScreen === 'Profile' && <screens.Profile />}
      </React.Fragment>
    );
  };

  return renderScreen();
};

export default TabNavigator;
