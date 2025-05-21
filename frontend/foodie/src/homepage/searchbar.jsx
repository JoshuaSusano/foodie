import React, { useState, useEffect } from 'react';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const [defaultRecipes, setDefaultRecipes] = useState([]);
  useEffect(() => {
    const fetchDefaultRecipes = async () => {
      const res = await fetch(`http://localhost:5000/recipes`);
      const data = await res.json();
      setDefaultRecipes(data);
    };
    fetchDefaultRecipes();
  }, []);

  const handleSearch = async (e) => {
    if (e.key === 'Enter') {
      const res = await fetch(`http://localhost:5000/search?category=${search}`);
      const data = await res.json();
      setResults(data);
    }
  };
  const recipesToDisplay = results.length > 0 ? results : defaultRecipes;

  return (
    <div className="flex flex-col items-center py-10 mt-20">
      <h1 className="text-3xl font-bold mb-6">What are you cooking today?</h1>
      <input
        type="text"
        placeholder="Search for a recipe..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleSearch}
        className="w-1/2 p-4 rounded-full border border-gray-300 shadow-md mb-10"
      />
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-[90%]">
  {recipesToDisplay.map((recipe) => (
    <div
      key={recipe.id}
      className="rounded-xl overflow-hidden shadow-md bg-white transform transition duration-300 hover:scale-105 cursor-pointer"
      onClick={() => console.log(`Clicked on ${recipe.name}`)} 
    >
      <img
        src={recipe.image_url}
        alt={recipe.name}
        className="w-full h-50 object-cover"
      />
      <div className="p-4">
        <h2 className="font-semibold">{recipe.name}</h2>
        <p className="text-sm text-gray-600 mt-1">
          {recipe.description || 'Lorem ipsum dolor sit amet, consectetur adip.'}
        </p>
      </div>
    </div>
  ))}
</div>
    </div>
  );
};

export default SearchBar;
