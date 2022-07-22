import styled from 'styled-components';

const SplashContainer = styled.div`
  @keyframes moveRocket {
    0% {
      transform: translateY(100vh);
    }
    100% {
      transform: translateY(-100vh);
    }
  }
  @keyframes textOpacity {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    h1 {
      position: fixed;
      color: white;
      font-size: 2rem;
      animation: textOpacity 2s ease-in-out 0s forwards;
    }

    #rocket {
      animation: moveRocket 2s ease-in-out 0s forwards;
    }
  }
`;

const Styled = {
  SplashContainer,
};

export default Styled;
