import Home from "./pages/home/Home";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import PostPage from "./pages/postPage/PostPage";
import About from "./pages/about/About";

import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import { useState } from "react";

function App() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  // return (
  //   <main className="app">
  //     <Routes>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/post/:postId" element={<PostPage />} />
  //       <Route path="/about" element={<About />} />
  //     </Routes>

  //   </main>
  // );

  return <Editor />;
}

export default App;
