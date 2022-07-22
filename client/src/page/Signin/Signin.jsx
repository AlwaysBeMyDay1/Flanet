import React, { useCallback, useMemo, useRef } from 'react';
import Styled from './Signin.styled';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { ReactComponent as Rocket } from '../../asset/shuttle.svg';
import { useSign } from '../../hook/useSign';
import { TextField } from '@mui/material';

const Signin = () => {
  const { isSignedIn, handleSignIn } = useSign();
  const [id, setId] = React.useState('');
  const [pw, setPw] = React.useState('');
  const [state, setState] = React.useState('default');
  const pwRef = useRef(null);
  const navi = useNavigate();

  const handleState = (state) => {
    setState(state);
  };

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handlePwChange = (e) => {
    setPw(e.target.value);
  };

  const handleRegisterButtonClick = useCallback(() => {
    navi('/register');
  }, [navi]);

  const mainContent = useMemo(() => {
    switch (state) {
      case 'default':
        return (
          <div id="id">
            <TextField
              id="standard-basic"
              label="아이디를 입력하세요"
              value={id}
              onChange={handleIdChange}
              variant="standard"
            />
            <span>행성으로 출발하기</span>
          </div>
        );
      case 'setid':
        return (
          <div id="pw">
            <span>
              <b>{id}</b> 행성으로 출발하기
            </span>
            <TextField
              ref={pwRef}
              id="standard-basic"
              label="비밀번호를 입력하세요"
              value={pw}
              onChange={handlePwChange}
              variant="standard"
              type="password"
            />
          </div>
        );
      case 'setpw':
        return (
          <div id="loading">
            <CircularProgress sx={{ color: '#ffff00' }} />
          </div>
        );
      default:
        return <div></div>;
    }
  }, [state, id, pw]);

  const handleSignInButtonClick = (e) => {
    e.preventDefault();
    switch (state) {
      case 'default':
        if (id === '') {
          alert('아이디를 입력하세요');
          return;
        }

        handleState('setid');
        break;

      case 'setid':
        if (pw === '') {
          alert('비밀번호를 입력하세요');
          return;
        }

        handleState('setpw');
        handleSignIn(id, pw);
        break;

      case 'setpw':
        break;

      default:
        break;
    }
  };

  React.useEffect(() => {
    if (isSignedIn) navi('/planet');
  }, [isSignedIn, navi]);

  React.useEffect(() => {
    if (pwRef && pwRef.current) {
      pwRef.current.focus();
    }
  }, [pwRef]);

  return (
    <Styled.SigninContainer>
      <div className="container">
        <div className="title">
          {state === 'default' ? (
            <>
              <h1>로그인</h1>
              <h3 onClick={handleRegisterButtonClick}>
                아직 내 행성이 없다면? 회원가입
              </h3>
            </>
          ) : (
            <div></div>
          )}
        </div>
        <form className="form">
          <div id="content">{mainContent}</div>
          <button
            className={'rocket ' + (state === 'setpw' ? 'launch' : '')}
            type="submit"
            onClick={handleSignInButtonClick}
          >
            <Rocket width={200} />
          </button>
        </form>
      </div>
    </Styled.SigninContainer>
  );
};

export default Signin;
