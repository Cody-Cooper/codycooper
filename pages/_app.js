/** @jsxImportSource theme-ui */
import { ThemeProvider } from "theme-ui";
import theme from "../styles/theme";
import NavBar from "../components/nav";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <section
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "200vh",
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
          <Component {...pageProps} />
        </main>
        <Footer />
      </section>
    </ThemeProvider>
  );
}

export default MyApp;
