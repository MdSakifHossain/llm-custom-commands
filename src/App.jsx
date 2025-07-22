import HeaderSection from "./components/sections/HeaderSection.jsx";
import MainSection from "./components/sections/MainSection.jsx";
import ProjectIdeaSection from "./components/sections/ProjectIdeaSection.jsx";
import FooterSection from "./components/sections/FooterSection.jsx";

// utility component to check for the vp width and tell me in which viewpoert i am currently in.. eg. sm, md, lg, etc...
// import BreakpointChecker from "./components/utils/BreakpointChecker.jsx";

const App = () => {
  return (
    <>
      {/* <BreakpointChecker /> */}
      <HeaderSection />
      <MainSection />
      <ProjectIdeaSection />
      <FooterSection />
    </>
  );
};

export default App;
