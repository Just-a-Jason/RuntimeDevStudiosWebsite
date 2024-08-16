import { Routes, Route, HashRouter as Router } from "react-router-dom";
import BlogPage from "./Pages/BlogPage";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs/:id" element={<BlogPage />} />
      </Routes>
    </Router>
  );
}

export default App;
