import { useState } from 'react';
import { UserService } from '../network/userService';

export function useSign() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isSignedOut] = useState(true);

  const handleSignUp = async (id, pw) => {
    try {
      setIsSignedIn(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignIn = async (id, pw) => {
    try {
      // const response = await UserService.getUser(id, pw);
      // console.log(response);
      setIsSignedIn(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      // await signOut();
      // 여기 로그아웃 로직
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteUser = async () => {
    try {
      // 여기 유저 삭제 로직
    } catch (error) {
      console.log(error);
    }
  };

  return {
    isSignedIn,
    isSignedOut,
    handleSignUp,
    handleSignIn,
    handleSignOut,
    handleDeleteUser,
  };
}
