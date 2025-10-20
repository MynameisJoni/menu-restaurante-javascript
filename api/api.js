export async function fetchMeal(URL){
    const response = await fetch(URL);

    if(!response.ok){
        throw new Error("Error fetching meal data");
    } else {
        const data = await response.json();
        return data.meals;
    }
}