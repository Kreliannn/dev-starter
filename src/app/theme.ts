import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#ffffff",
    },
    text: {
      primary: "#000000",
      secondary: "#4a4a4a",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
})

export default theme