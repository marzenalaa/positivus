import {
  Hero,
  Services,
  Studies,
  WorkingProcess,
  Team,
  Testimonials,
  Contact,
  Footer,
} from "./components";

const App = () => {
  return (
    <div className="container overflow-hidden">
      <Hero />
      <Services />
      <Studies />
      <WorkingProcess />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
