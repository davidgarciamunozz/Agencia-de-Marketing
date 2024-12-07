import Navbar from "../../components/navigation/Navbar";
import Layout from "../../hocs/layouts/Layout";
import Footer from "../../components/navigation/Footer";
import Header from "components/Cases/Header";
import CasesList from "components/Cases/CasesList";
import { useEffect } from "react";

function Cases () {
  useEffect(() => {
    window.scrollTo(0, 0)
  } , [])
  return (
    <Layout>
      <Navbar />
      <div className="pt-28">
        <Header />
        <CasesList />
      </div>
      <Footer />
    </Layout>
  );
}

export default Cases;