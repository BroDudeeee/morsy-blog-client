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

import { $getRoot, $getSelection } from "lexical";
import { useEffect } from "react";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";

const theme = {};

function MyCustomAutoFocusPlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    // Focus the editor when the effect fires!
    editor.focus();
  }, [editor]);

  return null;
}

function onError(error) {
  console.error(error);
}

const App = () => {
  const initialConfig = {
    namespace: "MyEditor",
    theme,
    onError,
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <PlainTextPlugin
        contentEditable={<ContentEditable />}
        placeholder={<div>Enter some text...</div>}
        ErrorBoundary={LexicalErrorBoundary}
      />
      <HistoryPlugin />
      <MyCustomAutoFocusPlugin />
    </LexicalComposer>
  );
};

export default App;
