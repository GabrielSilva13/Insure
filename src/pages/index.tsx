import type { NextPage } from "next";

import Cta from "../components/Cta";
import CtaFooter from "../components/CtaFooter";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Quality from "../components/Quality";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Cta />
      <Quality />
      <CtaFooter />
      <Footer />
    </>
  );
};

export default Home;
