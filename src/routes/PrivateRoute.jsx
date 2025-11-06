import React from "react";
import authStore from "../stores/AuthStore";
import MyBooksPage from "../pages/MyBooksPage";
import { Navigate } from "react-router";

const PrivateRoute = () => {
  const { user } = authStore();
  return user ? <MyBooksPage /> : <Navigate to="/login" />;
};

export default PrivateRoute;
