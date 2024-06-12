import Navbar from "../../components/navigation/Navbar";
import Layout from "../../hocs/layouts/Layout";
import Footer from "../../components/navigation/Footer";

function Careers () {
  return (
    <Layout>
      <Navbar />
      <div className="pt-28">
        Careers
      </div>
      <Footer />
    </Layout>
  );
}

export default Careers;