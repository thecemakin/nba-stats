import logo from "../../src/assets/images/logo.png";
import { Button, ButtonGroup, MenuItem, Select, FormControl, InputLabel, OutlinedInput } from "@mui/material";
import { Link } from "react-router-dom";

export default function Topbar() {
    return (
        <div>
            <Link to="/">
                <img className="w-25 h-20" src={logo} alt="pic" />
            </Link>
            <div className="buttons text-center">
                <ButtonGroup variant="text" aria-label="text button group" color="inherit">
                    <Button><Link style={{ textDecoration: "none", color: "inherit" }} to="/">Home</Link></Button>
                    <Button><Link style={{ textDecoration: "none", color: "inherit" }} to="/standings">Standings</Link></Button>
                    <Button>
                        <FormControl sx={{ m: 1, width: 100, mt: 1 }}>
                            <InputLabel variant="filled" id="demo-simple-select-readonly-label">Stats</InputLabel>
                            <Select
                                variant="filled"
                            >
                                <MenuItem>Players</MenuItem>
                                <MenuItem>Leagues</MenuItem>
                                <MenuItem>Seasons</MenuItem>
                                <MenuItem>Teams</MenuItem>
                                <MenuItem>Statics</MenuItem>
                            </Select>
                        </FormControl>
                    </Button>
                </ButtonGroup>
            </div>
        </div>
    )
}
