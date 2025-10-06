import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/pages/HomePage/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./components/pages/AboutPage/AboutPage";
import ContactPage from "./components/pages/ContactPage/ContactPage";
import ReviewPage from "./components/pages/ReviewPage/ReviewPage";
import BlogPage from "./components/pages/BlogPage/BlogPage";
import NotFoundPage from "./components/pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/reviews" element={<ReviewPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
