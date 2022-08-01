import React from "react";
import {
    Breadcrumbs as MUIBreadcrumbs,
    Link,
    Typography
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';

const Breadcrumbs = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const pathnames = pathname.split("/").filter(Boolean);

    return (
        <MUIBreadcrumbs aria-label="breadcrumb">
            {pathnames.length ? (
                <Link
                    underline="hover"
                    sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
                    color="inherit"
                    href="/" onClick={() => navigate("/")}><HomeIcon sx={{ mr: 0.5, width: 25, height: 25 }} fontSize="inherit" /></Link>
            ) : (
                <Typography> <HomeIcon sx={{ mr: 0.5, width: 25, height: 25 }} fontSize="inherit" /></Typography>
            )}
            {pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                const isLast = index === pathnames.length - 1;
                return isLast ? (
                    <Typography sx={{ mr: 0.5 }} variant="" key={name}>{name.toLocaleUpperCase()}</Typography>
                ) : (
                    <Link sx={{ mr: 0.5 }} variant="" key={name} onClick={() => navigate(routeTo)}>
                        {name}
                    </Link>
                );
            })}
        </MUIBreadcrumbs>
    );
};

export default Breadcrumbs;
