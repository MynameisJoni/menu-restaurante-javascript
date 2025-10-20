import { fetchMeal } from "../api/api";
import { useState, useEffect } from "react";
import "./App.css";
import { Mosaic } from "react-loading-indicators";
import MenuList from "./components/MenuList.jsx";

export default function App(){

  const [ meal, setMeal] = useState(null);
  const [ loading, setLoading] = useState(true);
  const [ error, setError] = useState(null);

  useEffect(() => {
    const URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";

    async function loadMeals(){

      try{
        setLoading(true);

        const dataMeal = await fetchMeal(URL);
        const mealList = dataMeal.map((meal) => ({
          id: meal.idMeal, 
          name: meal.strMeal,
          image: meal.strMealThumb,
          price: (Math.random() * (25-10) + 10).toFixed(2),
        }));

        setMeal(mealList);
        setError(null);

      } catch (error) {
        setError("Error fetching meal data");
        console.error(error);

      } finally {
        setLoading(false);
      }
    }

    loadMeals();

  },[]);
  return (
    <div className="contenedor">
      <header className="header">
        <h1>Restaurante DAM</h1>
        <p>Desde 2024</p>
      </header>
      <main className="main">
        {loading && (
          <div className="spinner">
            <Mosaic color="#cf0000" size="medium" text="" textColor="" />
            <p>Cargando ahí...</p>
          </div>
          )}
        
        {error && (
          <div className="error">
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && meal && (
          <MenuList item={meal} />
        )}
      </main>
    </div>
  );
}
