import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import { useScrollToTop } from "./hooks/useScrollToTop";

function App() {
  function ScrollToTopWrapper({ children }) {
    useScrollToTop(); // Hook is called here, inside Router context
    return children;
  }
  return (
    <Router>
      <ScrollToTopWrapper>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/testimonials" element={<Testimonials />} />
          </Routes>
        </Layout>
      </ScrollToTopWrapper>
    </Router>
  );
}

export default App;
