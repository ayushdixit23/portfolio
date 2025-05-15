import About from "@/components/About";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GithubComponent from "@/components/GithubComponent";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <>
      <div className={`h-full overflow-y-auto max-h-screen scrollbar-hide`}>
        <Hero />
        <About />
        <GithubComponent />
        {/* <Project /> */}
        <TechStack />
        <Blogs />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
