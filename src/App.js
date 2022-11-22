import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomeScreen from "./componenets/HomeScreen";
import LoginScreen from "./componenets/LoginScreen";
import ProfileScreen from "./componenets/ProfileScreen";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      }else{
        dispatch(logout)
      }
    });
    return () => {
      unsubscribe();
    }
  }, [])

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
          <Route path='/profile' element={<ProfileScreen/>} />

            <Route exact path="/" element={<HomeScreen />} />
            
            <Route />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
