import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMealDetails } from '../services/categoryService';
import Image from '../components/atoms/Image';
import Text from '../components/atoms/Text';
import TextDetail from '../components/atoms/TextDetail';

const MealDetail = () => {
  const { mealId } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMealDetails = async () => {
      try {
        const data = await fetchMealDetails(mealId);
        setMeal(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadMealDetails();
  }, [mealId]);

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-center py-8 text-red-600">Error: {error}</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Image 
          src={meal?.strMealThumb} 
          alt={meal?.strMeal}
          className="w-full h-96"
        />
        <div>
          <Text variant="title">{meal?.strMeal}</Text>
          <TextDetail 
            label="Category" 
            value={meal?.strCategory}
            className="mt-4" 
          />
          <TextDetail 
            label="Area" 
            value={meal?.strArea}
            className="mt-2" 
          />
          <Text variant="subtitle" className="mt-6 mb-2">Instructions</Text>
          <Text>{meal?.strInstructions}</Text>
        </div>
      </div>
    </div>
  );
};

export default MealDetail;