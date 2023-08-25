import AppLayout from "../../layouts/AppLayout";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import ProjectsSection from "./ProjectsSection";
import WelcomeSection from "./WelcomeSection";

function Index() {
  return (
    <>
      <AppLayout>
        <WelcomeSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </AppLayout>
    </>
  );
}

export default Index;
