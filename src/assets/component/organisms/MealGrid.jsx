const MealGrid = (props) => {
    const {meals} = props

    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {meals?.map((meal) => (
                <MealCard key={meal.idMeal} meal={meal} />
            ))}
        </div>
    );
};

export default MealGrid;