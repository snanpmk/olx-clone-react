import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ViewPost from "./pages/ViewPost";
import Create from "./pages/Create";
import "./App.css";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import { PostContextProvider } from "./context/PostContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <PostContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/sell"
              element={
                <ProtectedRoute>
                  <Create />
                </ProtectedRoute>
              }
            />
            <Route path="/view" element={<ViewPost />} />
          </Routes>
        </PostContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
