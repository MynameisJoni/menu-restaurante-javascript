// Componente principal para App
// En este componente se listará el menú completo

import MenuItem from "./MenuItem";
import "./MenuList.css";

export default function MenuList({ item }){
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