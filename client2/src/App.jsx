import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import SongSelection from "./pages/SongSelection";
import Final from "./pages/Final";

function App() {
  const user = useSelector((state) => state.user.user);
  console.log(user.user);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/song_selection" element={<SongSelection />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/final" element={<Final />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
