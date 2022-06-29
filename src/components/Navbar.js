import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { IconButton, makeStyles, Typography } from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { textAlign, width } from "@mui/system";

const Navbar = () => {
  return (
    <nav>
      <img src="zuul.png" width={60} className="nav-logo" />
      <Typography variant="h4" component="h3" className="nav-text">Aysph Admin</Typography>
      <TextField
        variant="standard"
        InputProps={{
          startAdornment: (
            <InputAdornment style={{ color: "white" }}>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        style={{ width: 800 , alignItems: "center"}}
      />
      <IconButton color="primary" style={{ marginLeft: "auto" }} className="glow-button">
        <NotificationsNoneIcon style={{ color: "white" }} />
      </IconButton>
      <IconButton color="primary" className="glow-button">
        <SettingsOutlinedIcon style={{ color: "white" }} />
      </IconButton>
    </nav>
  );
};

export default Navbar;
