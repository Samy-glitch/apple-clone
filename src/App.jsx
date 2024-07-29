import Navbar from "./componets/Navbar";
import Hero from "./componets/Hero";
import Highlights from "./componets/Highlights";
import Model from "./componets/Model";
import Feature from "./componets/Feature";

import * as Sentry from "@sentry/react";
import HowItWorks from "./componets/HowItWorks";
import Footer from "./componets/Footer";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Feature />
      <HowItWorks />
      <Footer />
    </main>
  );
};

export default Sentry.withProfiler(App);
