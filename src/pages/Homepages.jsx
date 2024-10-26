import {useState, useEffect} from 'react'
import { fetchCategories } from '../services/Categoryservices'
import Hero from '../assets/component/organisms/Hero';
import CategoryGrid from '../assets/component/organisms/CategoryGrid';
import Text from '../assets/component/atoms/Text';
import Navbar from '../../../my-meal-app/src/components/organisms/Navbar';



const HomePage = () =>{
    const [categories, setCategories] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadCategories = async () => {
          try {
            const data = await fetchCategories();
            setCategories(data);
          } catch (err) {
            setError(err.message);
          } finally {
            setLoading(false);
          }
        };
    
        loadCategories();
      }, []);
    
      if (loading) return <div className="text-center py-8">Loading...</div>;
      if (error) return <div className="text-center py-8 text-red-600">Error: {error}</div>;
    return(
        <div className='min-h-screen'>
            <Hero />
            <div className="max-w-7xl mx-auto px-4 py-8">
                <Text variant="title" className="mb-8">Food Categories</Text>
                <CategoryGrid categories={categories} />
            </div>
        </div>
    );
};

export default HomePage;