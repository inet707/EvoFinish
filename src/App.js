import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderCopy from "./components/headerCopy/HeaderCopy";
import Footer from "./components/footer/Footer";
import Home from "./components/pages/homePage/Home";
import Events from "./components/pages/eventsPage/Events";
import About from "./components/pages/aboutPage/About";
import Contact from "./components/pages/contactPage/Contact";

function App() {
  return (
    <Router>
      <HeaderCopy/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
