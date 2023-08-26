import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderCopy from "./components/headerCopy/HeaderCopy";
import Footer from "./components/footer/Footer";
import Home from "./components/pages/homePage/Home";
import Events from "./components/pages/eventsPage/Events";
import About from "./components/pages/aboutPage/About";
import Blog from "./components/pages/blogPage/Blog";
import Contact from "./components/pages/contactPage/Contact";
import ScrollUpButton from "./components/scroLUpButton/ScrollUpButton";

function App() {
  return (
    <Router>
      <HeaderCopy/> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ScrollUpButton/>
      <Footer />
    </Router>
  );
}

export default App;
