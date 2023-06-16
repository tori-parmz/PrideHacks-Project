import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Pages/Login";
import Channel from "./components/Pages/Channel";
import LandingPage from "./components/Pages/LandingPage";
import UserHome from "./components/Pages/UserHome";
import Blog from "./components/Pages/Blog";
import NewsFeed from "./components/Pages/Newfeed";
import Layout from "./components/Pages/Layout";
import NoPage from "./components/Pages/NoPage";
import "bootstrap/dist/css/bootstrap.min.css";
import User from './components/Pages/User';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* home page renders collection grid */}
        <Route index element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="blog" element={<Blog />} />
        <Route path="user/" element={<User />} />
        <Route path="home" element={<UserHome />} />
        <Route path="channel/" element={<Channel />} />
        <Route path="newsfeed" element={<NewsFeed />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </Router>
  );
}

export default App;
