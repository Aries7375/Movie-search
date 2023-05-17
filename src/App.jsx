import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import MovieData from "./components/MovieData";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<MovieData />} />
      </Routes>
    </div>
  );
}

export default App;
