import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Pages/Login";
import LandingPage from "./components/Pages/LandingPage";
import Blog from "./components/Pages/Blog";
import Layout from "./components/Pages/Layout";
import NoPage from "./components/Pages/NoPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="blog" element={<Blog />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </Router>
  );
}

export default App;
