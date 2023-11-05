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

import React, { useState, useEffect } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import './App.css';

function App() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [convertedContent, setConvertedContent] = useState(null);

  useEffect(() => {
    let html = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(html);
  }, [editorState]);

  console.log(convertedContent);

  return (
    <div className="App">
      <header className="App-header">Rich Text Editor Example</header>
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
    </div>
  );
}

export default App;
