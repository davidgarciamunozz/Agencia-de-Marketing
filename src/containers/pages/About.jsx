import Navbar from "../../components/navigation/Navbar";
import Layout from "../../hocs/layouts/Layout";
import Footer from "../../components/navigation/Footer";
import { useEffect } from "react";
import Header from "components/About/Header";
import TestStats from "components/About/TestStats";
import Images from "components/About/Images";
import OurClients from "components/About/OurClients";
import LogoCloud from "components/Home/LogoCloud";
import Features from "components/About/Features";
import OurTeam from "components/About/Team";
import CTA from "components/About/CTA";

function About () {
  useEffect(() => {
    window.scrollTo(0, 0)
  } , [])
  return (
    <Layout>
      <Navbar />
      <div className="pt-28">
        <Header />
        <TestStats />
        <Images />
        <OurClients />
        <LogoCloud />
        <Features />
        <OurTeam />
        <CTA />
      </div>
      <Footer />
    </Layout>
  );
}

export default About;