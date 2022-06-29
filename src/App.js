import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { createTheme } from "@mui/material";
import { red, green } from "@mui/material/colors";
import { ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: red[50],
    },
  },
});



function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Body />
      </ThemeProvider>
    </div>
  );
}

export default App;
