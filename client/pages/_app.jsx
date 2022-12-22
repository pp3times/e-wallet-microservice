import { ThemeProvider, CssBaseline } from "@mui/material";
import { GolbalTheme } from "../styles/theme/theme";
import "../styles/globals.css";

function Home({ Component, pageProps }) {
  return (
    <ThemeProvider theme={GolbalTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default Home;
