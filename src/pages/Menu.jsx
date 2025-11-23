import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuList from "../components/MenuList";
import { Mosaic } from "react-loading-indicators";
import { fetchProductosCategoria } from "../../api/api.js";

export default function Menu(){
    
    const {idCategoria} = useParams();
    const [ productos, setProductos ] = useState(null);
    const [ cargando, setCargando ] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        const cat = idCategoria ? decodeURIComponent(idCategoria) : "Seafood";
        let montado = true;

        async function cargarProductos(){
            try{
                setCargando(true);
                setError(null);

                const datos = await fetchProductosCategoria(cat);
                if(montado){
                    setProductos(datos);
                }
            } catch(error){
                console.error(error);
                if(montado){
                    setError("Error al cargar los productos");
                    setProductos(null);
                }
            } finally {
                if(montado) setCargando(false);
            }
        }

        cargarProductos();

        return () => {
            montado = false;
        };
    }, [idCategoria]);

    return(
        <div>
            {cargando && (
                <div className="spinner" style={{textAlign: 'center', padding: '2rem'}}>
                    <Mosaic color='red' size='medium' text="" textColor="" />
                    <p>Cargando...</p>
                </div>
            )}

            {error && !cargando && (
                <div className="error" style={{margin: "2rem auto", maxWidth: 600}}>
                    <p>{error}</p>
                </div>
            )}

            {!cargando && !error && productos && (
                <MenuList item={productos} />
            )}
        </div>
    );
}