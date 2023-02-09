import { ReactNode } from "react";
import Footer from "../Components/Footer";
import { Navbar } from "../Components/Navbar";
type LayoutProps = {
  children: ReactNode;
};
function Layout({ children }: LayoutProps) {
  return (
    <div>
      <header className="flex flex-col py-4 px-6 md:px-8 ">
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
