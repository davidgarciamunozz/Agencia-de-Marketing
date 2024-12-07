import Navbar from "../../components/navigation/Navbar";
import Layout from "../../hocs/layouts/Layout";
import Footer from "../../components/navigation/Footer";
import Header from "components/Services/Header";
import ServicesList from "components/Services/ServicesList";
import agile_img from "../../assets/Services/01.svg";
import refreshment_img from "../../assets/Services/02.svg";
import coding_img from "../../assets/Services/03.svg";
import { useEffect } from "react";

const posts_software = [
  {
    title: 'Agile Team of JS Programmers',
    href: '#',
    img:agile_img,
    category: { name: 'Article', href: '#' },
    description:
      'Our agile development team is ready to take on any project, no matter how complex. We specialize in JavaScript and can help you build a product that will stand out from competition.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '6 min',
    author: {
      name: 'Roel Aufderehar',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Product Refreshment',
    href: '#',
    img:refreshment_img,
    category: { name: 'Video', href: '#' },
    description:
      'With deep technology, innovative approach, and efficient project management, we help you build a product that will be loved by your customers.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '4 min',
    author: {
      name: 'Brenna Goyette',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Full-Cycle Product Development',
    href: '#',
    img:coding_img,
    category: { name: 'Case Study', href: '#' },
    description:
      'We can help you with all stages of product development, from idea to market launch. Our team is ready to turn your idea into a fully functional product.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '11 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]
const posts_design = [
  {
    title: 'Agile Team of JS Programmers',
    href: '#',
    img:agile_img,
    category: { name: 'Article', href: '#' },
    description:
      'Our agile development team is ready to take on any project, no matter how complex. We specialize in JavaScript and can help you build a product that will stand out from competition.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '6 min',
    author: {
      name: 'Roel Aufderehar',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Product Refreshment',
    href: '#',
    img:refreshment_img,
    category: { name: 'Video', href: '#' },
    description:
      'With deep technology, innovative approach, and efficient project management, we help you build a product that will be loved by your customers.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '4 min',
    author: {
      name: 'Brenna Goyette',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Full-Cycle Product Development',
    href: '#',
    img:coding_img,
    category: { name: 'Case Study', href: '#' },
    description:
      'We can help you with all stages of product development, from idea to market launch. Our team is ready to turn your idea into a fully functional product.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '11 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]


function Services () {
  useEffect(() => {
    window.scrollTo(0, 0)
  } , [])
  return (
    <Layout>
      <Navbar />
      <div className="pt-28">
        <Header />
        <ServicesList posts={posts_software} section_title={'Software and Product Development'} list_id={'software'} />
        <ServicesList posts={posts_design} section_title={'Design Services'} list_id={'design'} />
      </div>
      <Footer />
    </Layout>
  );
}

export default Services;