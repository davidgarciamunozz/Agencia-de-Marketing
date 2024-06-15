import Navbar from "../../components/navigation/Navbar";
import Layout from "../../hocs/layouts/Layout";
import Footer from "../../components/navigation/Footer";
import { useEffect } from "react";
import Header from "components/About/Header";

function About () {
  useEffect(() => {
    window.scrollTo(0, 0)
  } , [])
  return (
    <Layout>
      <Navbar />
      <div className="pt-28">
        <Header />
      </div>
      <Footer />
    </Layout>
  );
}

export default About;