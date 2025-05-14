import About from "@/components/About";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GithubComponent from "@/components/GithubComponent";
import Hero from "@/components/Hero";
import Project from "@/components/Project";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <GithubComponent/>
      <Project />
      {/* <Blogs /> */}
      <Contact />
      <Footer />
    </>
  );
}
