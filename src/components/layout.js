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
          maxWidth: "100%",
          flex: "1 1 auto",
          margin: ["50px 15%", "50px 15%", "50px 25%", "50px 25%"],
        }}
      >
        {children}
      </main>
      <Footer />
    </section>
  );
};

export default Layout;
