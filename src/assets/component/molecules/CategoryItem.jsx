import { Link } from 'react-router-dom';
import Image from '../atoms/Image';
import Text from '../atoms/Text';

const CategoryItem = ({ category }) => {
  return (
    <Link to={`/category/${category.strCategory}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <Image 
          src={category.strCategoryThumb} 
          alt={category.strCategory}
          className="w-full h-48"
        />
        <div className="p-4">
          <Text variant="subtitle">{category.strCategory}</Text>
          <Text variant="small" className="mt-2">
            {category.strCategoryDescription?.slice(0, 100)}...
          </Text>
        </div>
      </div>
    </Link>
  );
};

export default CategoryItem;