import Navbar from "../../components/navigation/Navbar";
import Layout from "../../hocs/layouts/Layout";
import Footer from "../../components/navigation/Footer";

function Services () {
  return (
    <Layout>
      <Navbar />
      <div className="pt-28">
        Services
      </div>
      <Footer />
    </Layout>
  );
}

export default Services;