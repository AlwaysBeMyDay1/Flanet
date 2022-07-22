import './App.css';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import Route from 'react-router-dom/Router';
import Routes from 'react-router-dom/Routes';
import Outlet from 'react-router-dom/Outlet';
import Navigate from 'react-router-dom/Navigate';
import { Planet, Profile, Register, Signin, Splash, Error } from './page';
import React from 'react';

const ProtectedRoute = () => {
  // const { state } = React.useContext(UserContext);
  // if (!state.users) {
  //   return <Navigate to={'/'} replace />;
  // }
  return <Outlet />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/planet" element={<Planet />} />
        </Route>
        <Route path="/404" element={<Error />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
