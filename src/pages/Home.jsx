import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

export default function Home(){
    return(
        <Container maxWidth="md" sx={{ textAlign: 'center', py: 8}}>
            <Typography variant='h3' component='h1' gutterBottom>
                Carta Restaurante React
            </Typography> 

            <Box sx={{ mt: 4}}>
                <Stack direction={{xs: 'column', sm: 'row'}} spacing={2} justifyContent='center'>
                    <Button variant="contained" size="large" component={RouterLink} to="/menu">
                        Ver Lista de Productos
                    </Button>
                    <Button variant='outlined' size='large' component={RouterLink} to='/categorias'>
                        Ver lista de Categorias
                    </Button>
                </Stack>
            </Box>
        </Container>
    );
}