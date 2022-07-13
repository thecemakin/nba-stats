import logo from "../../src/assets/images/logo.png";
import { Button, ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";

export default function Topbar() {
    return (
        <div>
            <Link to="/">
                <img className="w-25 h-20" src={logo} alt="pic" />
            </Link>
            <div className="buttons text-center">
                <ButtonGroup variant="text" aria-label="text button group" color="inherit">
                    <Button>Home</Button>
                    <Button>Standings</Button>
                    <Button>...</Button>
                </ButtonGroup>
            </div>
        </div>
    )
}
