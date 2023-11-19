import { Layout } from "./components/Layout";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { FAQ } from "./pages/faq";
import { Destination } from "./pages/destination";
import { Country } from "./pages/country";
import { Blog } from "./pages/blog";
import { SignIn } from "./pages/signIn";
import { ForggotPass } from "./pages/forgotPassword";
import { CreateAccount } from "./pages/CreateAccount";

function App() {
  return (
    <div className="wrapper">
      {/* <Layout>
        <Home/>
      </Layout> */}
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/forgotPass" element={<ForggotPass />} />
          <Route path="/createAccount" element={<CreateAccount />} />

          <Route path="/" element={<Layout />}>
            <Route
              // path="/"
              index
              element={<Home />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog" element={<Blog />} />

            <Route path="destination">
              <Route index element={<Destination />} />
              <Route path="italy" element={<Country />} />
            </Route>
          </Route>

          <Route path="404" element={<h1>Page404</h1>} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
