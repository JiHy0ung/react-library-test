import { Route, Routes } from "react-router";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import AppLayout from "./layout/AppLayout";
import LoginPage from "./pages/LoginPage";
import MyBooksPage from "./pages/MyBooksPage";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route element={<PrivateRoute />}>
            <Route path="my-books" element={<MyBooksPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
