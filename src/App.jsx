import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import Layout from "./Layout";
import Movie from "./Pages/Movie";
import Celebrity from "./Pages/Celebrity";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="newmovie" element={<Movie />} />
          <Route path="newcelebrity" element={<Celebrity />} />
      </Route>
    </Routes>
  );
}

export default App;
