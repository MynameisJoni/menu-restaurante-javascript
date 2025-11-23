const URL = "https://www.themealdb.com/api/json/v1/1";

function precio(){
    return (Math.random() * (25-10) + 10).toFixed(2);
}


export async function fetchCategorias(){
    const endpoint = `${URL}/list.php?c=list`;
    const res = await fetch(endpoint);
    if(!res.ok) throw new Error("error al cargar las categorías");
    const data = await res.json();

    if(!data || !data.meals) return [];
    return data.meals.map((item) => item.strCategory).filter(Boolean);
}

export async function fetchProductosCategoria(category = "Seafood"){
    const endpoint = `${URL}/filter.php?c=${encodeURIComponent(category)}`;
    const res = await fetch(endpoint);
    if(!res.ok) throw new Error("error al cargar los productos");
    const data = await res.json();

    if(!data || !data.meals) return [];

    return data.meals.map((item) => ({
        id: item.idMeal,
        name: item.strMeal,
        image: item.strMealThumb,
        price: precio(),
        category: category,
    }));
}

export async function fetchProductoId(id){
    if(!id) throw new Error("Se necesita id de producto");
    const endpoint = `${URL}/lookup.php?i=${encodeURIComponent(id)}`;
    const res = await fetch(endpoint);
    if(!res.ok) throw new Error("error al cargar el producto");
    const data = await res.json();

    if(!data || !data.meals || !data.meals[0]){
        throw new Error("producto no encontrado");
    }

    const raw = data.meals[0];

    return {
        id: raw.idMeal,
        name: raw.strMeal,
        image: raw.strMealThumb,
        category: raw.strCategory,
        price: precio(),
    };
}


export default {
    fetchCategorias,
    fetchProductosCategoria,
    fetchProductoId,
};