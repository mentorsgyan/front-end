import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Courses from "./components/Courses/Courses";
import Aos from "aos";
import "aos/dist/aos.css"
import TopCourses from "./components/TopCourses/TopCourses";
import Banner from "./components/Banner/Banner";
const App = () => {
  React.useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100
    });
    Aos.refresh
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <Courses />
      <TopCourses />
      <Banner />
    </div>
  )
}

export default App