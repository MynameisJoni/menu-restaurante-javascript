// componente que se utilizará en MenuItems
// en este componente se define cada plato por separado

import "./MenuItem.css";

export default function MenuItem({ item }){
    return(
        <div className="contenedor-principal"> 
            <div className="imagen">
                <img src={item.image} alt={item.name}/>
            </div>

            <div className="tarjeta">
                <h3 className="nombre-meal">{item.name}</h3>
                <p className="categoria">Del Mar</p>
                <p className="precio">{item.price}€</p>
            </div>
        </div>
    );
}