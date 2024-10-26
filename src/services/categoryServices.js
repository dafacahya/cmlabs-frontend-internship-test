import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

const getFromCahce = (key) =>{
  const cachedData = localStorage.getItem(key);
  if(cached){
    const {data, timestamp} = JSON.parse(cached);

    if(Date.now()- timestamp < 60 * 60 *1000){
      return data;
    }
  }
  return null;
}

const saveToCache = (key, data) => {
  localStorage.setItem(key, JSON.stringify({data, timestamp: Date.now()}));
}

export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/categories.php`);
    return response.data.categories;
  } catch (error) {
    console.error("Error fetching categories", error);
    throw error;
  }
};

export const fetchMealsByCategory = async (categoryName) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.meals || []; 

  } catch (error) {
    throw new Error(`Failed to fetch meals: ${error.message}`);
  }
};

export const fetchMealDetails = async (mealId) => {
  try {
    const response = await axios.get(`${BASE_URL}/lookup.php?i=${mealId}`);
    return response.data.meals[0];
  } catch (error) {
    console.error("Error fetching meal details", error);
    throw error;
  }
};