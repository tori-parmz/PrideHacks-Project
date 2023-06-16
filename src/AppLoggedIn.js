import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Channel from "./components/Pages/Channel";
import UserHome from "./components/Pages/UserHome";
import UserBlog from "./components/Pages/UserBlog";
import Newsfeed from "./components/Pages/Newsfeed";
import NoPage from "./components/Pages/NoPage";
import "bootstrap/dist/css/bootstrap.min.css";
import User from './components/Pages/User';

function AppLoggedIn() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<User />}>
        {/* home page renders collection grid */}
        <Route index element={<UserHome />} />
        <Route path="userblog" element={<UserBlog />} />
        <Route path="channel/" element={<Channel />} />
        <Route path="newsfeed" element={<Newsfeed />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </Router>
  );
}

export default AppLoggedIn;