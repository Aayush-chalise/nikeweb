import {
  CustomerReviews,
  Footer,
  SuperQuality,
  PopularProduct,
  Services,
  SpecialOffer,
  Subscribe,
  Hero,
} from "./sections";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import Hamburger from "./components/Hamburger";
const App = () => {
  return (
    <main className="relative">
      <Nav />
      {/* <section>
        <Sidebar />
      </section> */}
      <Hamburger />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProduct />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>{" "}
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>{" "}
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};
export default App;
