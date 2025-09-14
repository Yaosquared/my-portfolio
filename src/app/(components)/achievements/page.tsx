import ScrollToTop from "@/components/scroll-to-top";
import Footer from "../footer/page";
import Certifications from "./certifications/page";
import WorkExperience from "./experience/page";
import Navbar from "../navigation/page";

const Achievements = () => {
  return (
    <>
      <Navbar />
      <article id="achievements">
        <WorkExperience />
        <Certifications />
        <ScrollToTop />
        <Footer />
      </article>
    </>
  );
};
export default Achievements;
