// import Home from "./pages/home/Home";
// import "./index.css";
// import { Route, Routes } from "react-router-dom";
// import PostPage from "./pages/postPage/PostPage";
// import About from "./pages/about/About";

// function App() {
//   return (
//     <main className="app">
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/post/:postId" element={<PostPage />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </main>
//   );
// }

// export default App;

import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles

export default function App() {
  const [editorValue, setEditorValue] = useState("");

  return (
    <ReactQuill
      value={editorValue}
      onChange={(value) => setEditorValue(value)}
      modules={{
        toolbar: [
          [{ header: [1, 2, false] }],
          ["bold", "italic", "underline"],
          ["image", "code-block"],
        ],
      }}
      theme="snow"
    />
  );
}
