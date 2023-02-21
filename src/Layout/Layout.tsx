import { ReactNode, useEffect } from "react";
import Footer from "../Components/Footer";
import { Navbar } from "../Components/Navbar";
import { useAppDispatch } from "../hooks/hooks";
import { autoLogin } from "../services/features/userSlice";
import { Toaster } from "react-hot-toast";
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
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
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
