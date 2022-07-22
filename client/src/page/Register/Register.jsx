import React, { useMemo } from 'react';
import Styled from './Register.styled';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Rocket } from '../../asset/shuttle.svg';
import { TextField } from '@mui/material';
import { useSign } from '../../hook/useSign';

const Register = () => {
  const [id, setId] = React.useState('');
  const [pw, setPw] = React.useState('');
  const [pw2, setPw2] = React.useState('');
  const [state, setState] = React.useState('default');
  const { isSignedIn, handleSignUp } = useSign();
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

  const handlePw2Change = (e) => {
    setPw2(e.target.value);
  };

  const handleSigninButtonClick = () => {
    navi('/signin');
  };

  const mainContent = useMemo(() => {
    const pw_class = 'pw ' + (state === 'setid' ? 'active' : 'hidden');
    return (
      <>
        <div className="id">
          <TextField
            id="standard-basic"
            label="아이디를 입력하세요"
            value={id}
            onChange={handleIdChange}
            variant="standard"
          />
        </div>
        <div className={pw_class}>
          <TextField
            id="standard-basic"
            label="비밀번호를 입력하세요"
            value={pw}
            onChange={handlePwChange}
            variant="standard"
            type="password"
          />
          <TextField
            id="standard-basic"
            label="비밀번호를 입력하세요"
            value={pw2}
            onChange={handlePw2Change}
            variant="standard"
            type="password"
          />
        </div>
      </>
    );
  }, [state, id, pw, pw2]);

  const handleRegisterButtonClick = (e) => {
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

        if (pw2 === '') {
          alert('비밀번호를 한번 더 입력하세요');
          return;
        }

        if (pw !== pw2) {
          alert('비밀번호가 일치하지 않습니다');
          return;
        }

        handleState('setpw');
        handleSignUp(id, pw);
        break;

      case 'setpw':
        break;

      default:
        break;
    }
  };

  React.useEffect(() => {
    if (isSignedIn) {
      navi('/planet');
    }
  }, [isSignedIn, navi]);

  return (
    <Styled.RegisterContainer>
      <div className="container">
        <div className="title">
          <h1>회원가입</h1>
          <h3 onClick={handleSigninButtonClick}>
            이미 내 행성이 없다면? 로그인
          </h3>
        </div>
        <form className="form">
          <div id="content">{mainContent}</div>
          <button
            className={'rocket ' + (state === 'setpw' ? 'launch' : '')}
            type="submit"
            onClick={handleRegisterButtonClick}
          >
            <Rocket width={200} />
          </button>
        </form>
      </div>
    </Styled.RegisterContainer>
  );
};

export default Register;
