import { useState } from 'react';

export function useSign() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isSignedOut] = useState(true);

  const handleSignIn = async (id, pw) => {
    try {
      // await signIn();
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
    handleSignIn,
    handleSignOut,
    handleDeleteUser,
  };
}
