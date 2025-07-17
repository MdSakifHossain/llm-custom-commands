import HeaderSection from "./components/HeaderSection";
import MainSection from "./components/MainSection";
import FooterSection from "./components/FooterSection";
import ProjectIdeaSection from "./components/ProjectIdeaSection";

const App = () => {
  document.title = "CustomProompts";

  return (
    <>
      <HeaderSection />
      <MainSection />
      <ProjectIdeaSection />
      <FooterSection />
    </>
  );
};

export default App;
