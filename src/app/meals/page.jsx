import MealSearchInput from "./components/MealSearchInput";

export default async function MealsPage({ searchParams }) {
  const query = await searchParams;
  const fetchMeals = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`
      );
      const data = await res.json();
      //   setMeals(data?.meals || []);
      return data.meals || [];
    } catch (err) {
      console.log(err);
      return [];
    }
  };
  const meals = await fetchMeals();

  return (
    <div>
      <MealSearchInput />
      <div className="grid grid-cols-4 gap-6">
        {meals.map((meal, index) => (
          <div key={index} className="border rounded-xl">
            <p className="text-2xl font-bold">{meal.strMeal}</p>
            <p>{meal.strInstructions}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
