import React from "react";
import "./App.css";
import GlobalStyle from "./GlobalStyle";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import RightEmailBar from "./components/RightEmailBar";
import SocialSidebar from "./components/SocialSidebar";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <SocialSidebar />
      <RightEmailBar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
