import React from "react";
import MenuItem from "./MenuItem";
import "./MenuList.css";

export default function MenuList({ item }){

    if (!item) return null;

    if(Array.isArray(item) && item.length === 0){
        return(
            <div className="contenedor-carta">
                <div className="header-menu">
                    <h2>Nuestra Carta</h2>
                    <p className="contador">0 platos disponibles</p>
                </div>
                <p style={{ textAlign:"center", padding:"2rem"}}>
                    No se encontraron platos
                </p>
            </div>
        );
    }
    return (
        <div className="contenedor-carta">
            <div className="header-menu">
                <h2>Nuestra Carta</h2>
                <p className="contador">
                    {item.length} platos disponibles.
                </p>
            </div>

            <div className="menu-grid">
                {item.map((item) => (
                    <MenuItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}