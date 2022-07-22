import React from 'react';
import { ReactComponent as Rocket } from '../../asset/shuttle.svg';
import Styled from './Splash.styled';

const Splash = () => {
  return (
    <Styled.SplashContainer>
      <div className="container">
        <h1>Flanet</h1>
        <Rocket id="rocket" width={200} />
      </div>
    </Styled.SplashContainer>
  );
};

export default Splash;
