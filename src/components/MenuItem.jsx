import React from "react";
import { Link } from "react-router-dom";
import "./MenuItem.css";

export default function MenuItem({ item }){

    if(!item) return null;

    return(
        <Link
            to={`/producto/${item.id}`}
            style={{ textDecoration: "none", color:"inherit"}}
            aria-label={`Ver detalles`}>
            <div className="contenedor-principal"> 
                <div className="imagen">
                    <img src={item.image} alt={item.name}/>
                </div>

                <div className="tarjeta">
                    <h3 className="nombre-meal">{item.name}</h3>
                    <p className="categoria">{item.category}</p>
                    <p className="precio">{item.price}€</p>
                </div>
            </div>
        </Link>
    );
}