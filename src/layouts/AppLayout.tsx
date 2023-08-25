import AppFooter from "../components/AppFooter";
import NavBar from "../components/AppNavBar";

interface AppLayoutProps {
  children: React.ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <NavBar />
      <div className="my-6">{children}</div>
      <AppFooter />
    </>
  );
}

export default AppLayout;
