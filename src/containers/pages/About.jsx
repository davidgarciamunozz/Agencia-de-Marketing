import Navbar from "../../components/navigation/Navbar";
import Layout from "../../hocs/layouts/Layout";
import Footer from "../../components/navigation/Footer";

function About () {
  return (
    <Layout>
      <Navbar />
      <div className="pt-28">
        About
      </div>
      <Footer />
    </Layout>
  );
}

export default About;