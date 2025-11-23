import React, { useEffect, useState } from "react";
import { useParams, Link as RouterLink} from "react-router-dom";
import { fetchProductoId } from "../../api/api";
import { Mosaic } from "react-loading-indicators";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

export default function Producto(){
    
    const { id } = useParams();
    const [ producto, setProductos ] = useState(null);
    const [ cargando, setCargando ] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        if(!id){
            setError("ID no válido");
            setCargando(false);
            return;
        }

        let montado = true;

        async function carga(){
            try{
                setCargando(true);
                setError(null);

                const detail = await fetchProductoId(id);

                if (montado){
                    setProductos(detail);
                }
            } catch (err){
                console.error(err);
                if (montado){
                    setError("Error al cargar el producto");
                    setProductos(null);
                }
            } finally {
                if(montado) setCargando(false);
            }
        }
        carga();

        return() => {
            montado = false;
        };
    }, [id]);

    return (
        <Box sx={{ py: 3}}>
            {cargando && (
                <div className="spinner" style={{textAlign: ' center',  padding: "2rem"}}>
                    <Mosaic color= 'red' size='medium' text="" textColor="" />
                    <p>Carvando...</p>
                </div>
            )}

            {error && !cargando && (
                <div className="error" style={{ margin: "2rem auto", maxWidth: 700}}>
                    <p>{error}</p>
                </div>
            )}

            {!cargando && !error && producto && (
                <Paper elevation={3} sx={{p:3}}>
                    <Grid container spacing={3}>
                        <Grid size={{xs:12, sm:5}}>
                            <Box
                                component="img"
                                src={producto.image}
                                alt={producto.name}
                                sx={{ width: '100%', height:{xs:200, md:320}, objectFit:"cover", borderRadius:1}} />
                        </Grid>
                        <Grid size={{xs:12, md:7}}>
                            <Typography variant="h4" component="h1" gutterBottom>
                                {producto.name}
                            </Typography>

                            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                                {producto.category ? `Categoría: ${producto.category}`: null}
                            </Typography>

                            <Typography variant="h6" color="primary" sx={{ my:1}}>
                                Precio: {producto.price}€
                            </Typography>

                            <Box sx={{ mt:3}}>
                                <Button component={RouterLink} to="/menu" variant="contained">
                                    Volver a la carta
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            )}
        </Box>
    );
}