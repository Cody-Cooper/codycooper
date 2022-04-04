/** @jsx jsx */
import { jsx } from "theme-ui";
import NavBar from "./navbar";
import Footer from "./footer";

const Layout = ({ children }) => {
  console.log("Layout success");
  return (
    <section
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <NavBar />
      <main
        sx={{
          width: "100%",
          flex: "1 1 auto",
        }}
      >
        {children}
      </main>
      <Footer />
    </section>
  );
};

export default Layout;
