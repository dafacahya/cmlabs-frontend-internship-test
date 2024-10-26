import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const CategoryDetail = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch meals');
        }

        const data = await response.json();
        setMeals(data.meals || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMeals();
  }, [categoryName]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-red-600 mb-4">{error}</p>
        <button
          onClick={() => navigate('/')}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">{categoryName} Meals</h1>
        <button
          onClick={() => navigate('/')}
          className="px-4 py-2 bg-gray-200 rounded"
        >
          Back
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {meals.map((meal) => (
          <div 
            key={meal.idMeal}
            className="border rounded-lg overflow-hidden shadow-lg"
          >
            <img 
              src={meal.strMealThumb} 
              alt={meal.strMeal}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{meal.strMeal}</h2>
            </div>
          </div>
        ))}
      </div>
      
      {meals.length === 0 && (
        <p className="text-center">No meals found in this category.</p>
      )}
    </div>
  );
};

export default CategoryDetail;