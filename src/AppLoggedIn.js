import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Channel from "./components/Pages/Channel";
import UserHome from "./components/Pages/UserHome";
import UserBlog from "./components/Pages/UserBlog";
import Newsfeed from "./components/Pages/Newsfeed";
import NoPage from "./components/Pages/NoPage";
import "bootstrap/dist/css/bootstrap.min.css";
import User from './components/Pages/User';
import Communities from './components/Pages/Communities'

//nested route
//extending url needs hierarchy
//file structure
//when you have a path, make sure you care 
//url global extension
//previous structure 

function AppLoggedIn() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<User />}>
        <Route index element={<UserHome />} />
        <Route path="blog" element={<UserBlog />} />
        <Route path="channel" element={<Channel />} />
        <Route path="newsfeed" element={<Newsfeed />} />
        <Route path="communities" element={<Communities />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </Router>
  );
}

export default AppLoggedIn;
