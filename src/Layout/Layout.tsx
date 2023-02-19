import { ReactNode, useEffect } from "react";
import Footer from "../Components/Footer";
import { Navbar } from "../Components/Navbar";
import { useAppDispatch } from "../hooks/hooks";
import { autoLogin } from "../services/features/userSlice";
type LayoutProps = {
  children: ReactNode;
};
function Layout({ children }: LayoutProps) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(autoLogin());
  }, []);
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
