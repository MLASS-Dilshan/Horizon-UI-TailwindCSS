import React from "react";
import Header from "./components/Landing Page/Header";
import Hero from "./components/Landing Page/Hero";
import HowItWorks from "./components/Landing Page/HowItWorks";
import Features from "./components/Landing Page/Features";
import Numbers from "./components/Landing Page/Numbers";
import Testimonials from "./components/Landing Page/Testimonials";
import Cta from "./components/Landing Page/Cta";
import Footer from "./components/Landing Page/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <HowItWorks />
      <Features />
      <Numbers />
      <Testimonials />
      <Cta/>
      <Footer />
    </>
  );
};

export default App;
