import styled from 'styled-components';

const SigninContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;

  * {
    color: white;
  }
  .container {
    animation: fadeIn 0.5s ease-in-out 0s forwards;
    width: 100%;
    height: 100%;
    position: relative;
    max-width: 1024px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    .title {
      width: calc(100vw - 20%);
      flex: 1 1 0;
      position: relative;
      h1,
      h3 {
        margin: 0;
        padding: 0;
      }
      h1 {
        margin-top: 10vh;
        margin-bottom: 1%;
      }
      h3 {
        color: grey;
      }
    }
    .form {
      flex: 2 2 0;
      position: relative;
      width: calc(100vw - 20%);
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      #content {
        * {
          color: white;
          font-size: 1.3rem;
        }
        #id {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 10px;
          input {
            background: transparent;
            border: none;
            border-bottom: 1px solid #ffff00;
          }
          span {
            text-align: end;
            font-size: 1.3rem;
          }
        }
        #pw {
          display: flex;
          flex-direction: column;
          span {
            b {
              color: #ffff00 !important;
              font-size: 1.5rem;
            }
            width: calc(100vw - 20%);
            text-align: center;
            position: fixed;
            top: 25vh;
            font-size: 1.5rem;
          }
          input {
            background: transparent;
            border: none;
            border-bottom: 1px solid #ffff00;
          }
        }
        #loading {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .rocket {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
        background: transparent;
        border: none;
        cursor: pointer;
      }
      .launch {
        animation: moveRocket 1s ease-out 0s forwards;
      }
      @keyframes moveRocket {
        0% {
        }
        100% {
          transform: translateY(-100vh);
        }
      }
    }
  }
`;

const Styled = {
  SigninContainer,
};

export default Styled;
