import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { fetchCategorias } from "../../api/api.js";
import { Mosaic } from "react-loading-indicators";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function Categorias(){
    const [ categorias, setCategorias ] = useState(null);
    const [ cargando, setCargando ] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        let montado = true;

        async function cargarCategorias(){
            try{
                setCargando(true);
                setError(null);
                const datos = await fetchCategorias();
                if(montado) setCategorias(datos);
            } catch(error){
                console.error(error);
                if(montado){
                    setError("error al cargar las categorias");
                    setCategorias(null);
                }
            } finally {
                if(montado) setCargando(false);
            }
        }
    
        cargarCategorias();

        return() => {
            montado = false;
        };
    },[]);
    
    return(
        <Box sx={{ py: 3}}>
            <Typography variant="h4" component="h2" gutterBottom>
                Categorías
            </Typography>

            {cargando && (
                <div className="spinner" style={{ textAlign: 'center', padding: '2rem'}}>
                    <Mosaic color='red' size="medium" text="" textColor="" />
                    <p> Cargando categorías...</p>
                </div>
            )}

            {error && !cargando && (
                <div className="error" style={{ margin:"2 rem auto", maxWidth: 600}}>
                    <p>{error}</p>
                </div>
            )}

            {!cargando && !error && categorias && categorias.length === 0 && (
                <Typography variant="body1">No hay categorías disponibles</Typography>
            )}

            {!cargando && !error && categorias && categorias.length > 0 && (
                <Grid container spacing={2} sx={{mt: 1}}>
                    {categorias.map((cat) => (
                        <Grid key={cat} size={{xs:12, sm:6, md:4, lg:3}}>
                            <Button
                                fullWidth
                                variant='outlined'
                                component={RouterLink}
                                to={`/categorias/${encodeURIComponent(cat)}`}
                                sx={{ textTransform: "none", justifyContent: 'flex-start', p:2}}>
                                {cat}
                            </Button>
                        </Grid>
                    ))}
                </Grid>
            )}
        </Box>
    );
}
