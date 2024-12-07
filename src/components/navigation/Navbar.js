import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import logoImg from "../../assets/img/boomslag-black.png";
import "../../styles/index.css";



function Navbar (){
    
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
       if(document.getElementById("navbar")){
        if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
            document.getElementById("navbar").classList.add("shadow-navbar");
            document.getElementById("navbar").classList.add("bg-white");
       } else {
        document.getElementById("navbar").classList.remove("shadow-navbar");
        document.getElementById("navbar").classList.remove("bg-white");
       }
    }
   } 

    return (
        <nav id="navbar" className=" transition duration-300 ease-in-out w-full z-40 top-0 py-.5 fixed">
            <div className="px-4 sm:px-16">
                 <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
                         <Link to='/' className="ml-4 mt-2">
                             <img 
                             src={logoImg}
                             width={120}
                             height={100}
                             className=""/>
                         </Link>
                        <div className="ml-4 mt-2 flex-shrink-0">
                        <NavLink to='/cases' className="text-base inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white transition duration-300 ease-in-out hover:border-orange-500  mx-3" >Cases</NavLink>
                        <NavLink to='/services' className="text-base inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white transition duration-300 ease-in-out hover:border-orange-500 mx-3">Services</NavLink>
                        <NavLink to='/about' className="text-base inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white transition duration-300 ease-in-out hover:border-orange-500 mx-3">About Us</NavLink>
                        <NavLink to='/careers' className="text-base inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white transition duration-300 ease-in-out hover:border-orange-500 mx-3">Careers</NavLink>
                        <NavLink to='/blog' className="text-base inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white transition duration-300 ease-in-out hover:border-orange-500 mx-3">Blog</NavLink>
                        <NavLink to='/contact' className="text-base inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white transition duration-300 ease-in-out hover:border-orange-500 mx-3">Contact</NavLink>
                          <Link
                           to="/contact"
                        className="ml-12 relative inline-flex items-center rounded-md border border-transparent bg-orange-button px-5 py-1.5 text-base font-bold text-white shadow-sm transition duration-300 ease-in-out hover:bg-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                           >
                          Hire us
                          <div className="loader"></div>
                         </Link>
                        </div>
                 </div>
            </div>
        </nav>
    )
}

const mapStateToProps= state =>({

})

export default connect(mapStateToProps,{}) (Navbar);