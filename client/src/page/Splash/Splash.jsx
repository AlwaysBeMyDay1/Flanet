import React from 'react';
import { ReactComponent as Rocket } from '../../asset/shuttle.svg';
import Styled from './Splash.styled';
import { useNavigate } from 'react-router-dom';

const Splash = () => {
  const navi = useNavigate();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      navi('/signin');
    }, 2300);
    return () => {
      clearTimeout(timer);
    };
  }, []);

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
