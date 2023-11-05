import Home from "./pages/home/Home";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import PostPage from "./pages/postPage/PostPage";
import About from "./pages/about/About";

function App() {
  return (
    <main className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:postId" element={<PostPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  );
}

export default App;
