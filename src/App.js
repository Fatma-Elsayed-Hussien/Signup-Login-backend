import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import SendImage from './pages/SendImage';
import UsersMap from './pages/UsersMap';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <Header />
      {localStorage.getItem("token") ? (
        <Routes>
          <Route path="/UsersMap" element={<UsersMap />} />
          <Route path="/SendImage" element={<SendImage />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      )

      }
    </div>
  );
}

export default App;