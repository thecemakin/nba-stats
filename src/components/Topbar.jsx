import logo from "../../src/assets/images/logo.png";
import { Button, ButtonGroup, MenuItem, IconButton, Menu } from "@mui/material";
import { Link } from "react-router-dom";
import Fade from '@mui/material/Fade';
import { useState } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


export default function Topbar() {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <Link to="/">
                <img className="w-25 h-20" src={logo} alt="pic" />
            </Link>
            <div className="buttons text-center">
                <ButtonGroup variant="text" aria-label="text button group" color="inherit">
                    <Button><Link className="button-style" to="/">Home</Link></Button>
                    <Button><Link className="button-style" to="/standings">Standings</Link></Button>
                    <Button
                        id="fade-button"
                        aria-controls={open ? 'fade-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        Dashboard <ArrowDropDownIcon/> 
                    </Button>
                    <Menu
                        id="fade-menu"
                        MenuListProps={{
                            'aria-labelledby': 'fade-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={Fade}
                    >
                        <MenuItem onClick={handleClose}><Link className="button-style" to="/players">Players</Link></MenuItem>
                        <MenuItem onClick={handleClose}><Link className="button-style" to="/teams">Teams</Link></MenuItem>
                        <MenuItem onClick={handleClose}><Link className="button-style" to="/leagues">Leagues</Link></MenuItem>
                        <MenuItem onClick={handleClose}><Link className="button-style" to="/seasons">Seasons</Link></MenuItem>
                        <MenuItem onClick={handleClose}><Link className="button-style" to="/stats">Stats</Link></MenuItem>
                    </Menu>

                </ButtonGroup>
            </div>
        </div>
    )
}
