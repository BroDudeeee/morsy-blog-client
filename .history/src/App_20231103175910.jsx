import Home from "./pages/home/Home";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import PostPage from "./pages/postPage/PostPage";
import About from "./pages/about/About";
import { Editor } from "draft-js";
import MyEditor from "./components/MyEditor";

function App() {
  return (
    // <main className="app">
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/post/:postId" element={<PostPage />} />
    //     <Route path="/about" element={<About />} />
    //   </Routes>
    // </main>
    <MyEditor />
  );
}

export default App;
