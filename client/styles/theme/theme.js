import { createTheme } from "@mui/material/styles";
export const GolbalTheme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
          color: "#20B367",
        },
      },
    },
  },
  typography: {
    fontFamily: "LineSeed",
  },
  status: {
    danger: "#EB455F",
  },
  palette: {
    primary: {
      main: "#20B367",
      contrastText: "#fff",
    },
    neutral: {
      main: "#3b3b3b",
      contrastText: "#fff",
    },
  },
});
