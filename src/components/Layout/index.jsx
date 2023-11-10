import { Header } from "../Header";
import { Footer } from "../Footer";
import { Outlet } from "react-router-dom";
export function Layout({ children }) {
  return (
    <>
      <Header />
      {/* <main>{children}</main> */}
      <main>
        <Outlet />
      </main>
      <Footer />
        
    </>
  );
}
