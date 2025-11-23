import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const linkStyle = ({ isActive }) => ({
    color: isActive ? '#fff' : 'rgba(255,255,255,0.8)',
    textDecoration: 'none',
    padding: '6px 10px',
    borderRadius: '5px',
    backgroundColor: isActive ? 'rgba(255,255,255,0.1)' : 'transparent',
    fontWeigth: isActive ? 600 : 500,
    transition: 'background-color 0.3s ease',
});

export default function Header(){
    return(
        <AppBar position='static' elevation={3}>
            <Container maxWidth='lg'>
                <Toolbar disableGutters sx={{ gap: 2}}>
                    <Typography
                        variant='h6'
                        component={NavLink}
                        to='/'
                        sx={{
                            color:'inherit',
                            textDecoration : 'none',
                            fontWeigth: 700,
                            mr: 2,
                            flexGrow: { xs: 1, sm: 0}
                        }}>
                        Restaurante DAM
                    </Typography>

                    <Box sx={{ displat: {xs: 'none' , sm:'flex'}}}>
                        <NavLink to="/" style={linkStyle}>Inicio</NavLink>
                        <NavLink to="/menu" style={linkStyle}>Productos</NavLink>
                        <NavLink to="/categorias" style={linkStyle}>Categorías</NavLink>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}