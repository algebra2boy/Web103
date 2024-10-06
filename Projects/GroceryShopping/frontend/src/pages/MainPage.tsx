import { useEffect, useState } from "react";
import GroceryCard from "../components/GroceryCard";
import { Grocery } from "../types/Grocery";

const MainPage = () => {
  const [groceries, setGroceries] = useState<Grocery[]>([]);

  useEffect(() => {
    const fetchGroceries = async () => {
      const response = await fetch("http://localhost:3000/groceries");
      const data = await response.json();
      setGroceries(data);
      console.log(data);
    };
    fetchGroceries();
  }, []);

  return (
    <div className="min-h-screen bg-base-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Groceries List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {groceries.map((grocery) => (
          <GroceryCard key={grocery.id} {...grocery} />
        ))}
      </div>
    </div>
  );
};
export default MainPage;
