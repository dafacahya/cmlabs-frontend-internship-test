import CategoryItem from '../molecules/CategoryItem';

const CategoryGrid = ({ categories }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {categories?.map((category) => (
        <CategoryItem key={category.idCategory} category={category} />
      ))}
    </div>
  );
};

export default CategoryGrid;