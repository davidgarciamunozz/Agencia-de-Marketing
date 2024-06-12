import Navbar from "../../components/navigation/Navbar";
import Layout from "../../hocs/layouts/Layout";
import Footer from "../../components/navigation/Footer";

function Blog () {
  return (
    <Layout>
      <Navbar />
      <div className="pt-28">
        Blog
      </div>
      <Footer />
    </Layout>
  );
}

export default Blog;