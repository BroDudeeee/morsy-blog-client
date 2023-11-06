import Home from "./pages/home/Home";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import PostPage from "./pages/postPage/PostPage";
import About from "./pages/about/About";
import { createContext, useState } from "react";

export const ColorContext = createContext();

function App() {
  const mode = localStorage.getItem("mode");

  const [isDark, setIsDark] = useState(mode === "dark" || false);

  return (
    <ColorContext.Provider value={{ isDark, setIsDark }}>
      <main className={`app ${isDark ? "dark" : "light"}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:postId" element={<PostPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </ColorContext.Provider>
  );
}

export default App;
