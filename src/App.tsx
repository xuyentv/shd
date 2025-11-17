import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom"; // không import BrowserRouter
import AboutPage from "./components/pages/AboutPage/AboutPage";
import ContactPage from "./components/pages/ContactPage/ContactPage";
import ReviewPage from "./components/pages/ReviewPage/ReviewPage";
import BlogPage from "./components/pages/BlogPage/BlogPage";
import NotFoundPage from "./components/pages/NotFoundPage/NotFoundPage";
import N8nDetailPage from "./components/pages/n8nDetail/N8nDetailPage";

function App() {
  return (
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
          <Route path="/n8n" element={<N8nDetailPage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
