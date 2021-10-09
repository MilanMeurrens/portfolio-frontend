import { FC } from "react";
import Footer from "./components/footer";
import Layout from "./components/layout";
import Navbar from "./components/navbar";
import Home from "./screens/home";

import Theme from "./styles/Theme";

export const App: FC = () => {
  return (
    <Theme>
      <Layout>
        <Navbar />
        <Home />
        <Footer />
      </Layout>
    </Theme>
  );
};
