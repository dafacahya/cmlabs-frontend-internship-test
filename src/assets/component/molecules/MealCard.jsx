import {Link} from 'react';


const MealCard = (props) =>{
    const {meal} = props;
    return (
        <Link to={`/meal/${meal.idMeal}`}>
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <Image 
              src={meal.strMealThumb} 
              alt={meal.strMeal}
              className="w-full h-48"
            />
            <div className="p-4">
              <Text variant="subtitle">{meal.strMeal}</Text>
            </div>
          </div>
        </Link>
    );
};

export default MealCard;