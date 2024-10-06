import { FaInfoCircle } from "react-icons/fa"; // Import an info icon from react-icons
import type { Grocery } from "../types/Grocery";

const GroceryCard = (props: Grocery) => {
  const { name, category, quantity, note, picture } = props;

  return (
    <div className="card w-80 shadow-xl p-4 bg-white relative">
      <div className="absolute top-2 right-2">
        <FaInfoCircle
          className="text-gray-500 hover:text-gray-700 cursor-pointer"
          size={24}
        />
      </div>

      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl font-bold text-gray-700">{name}</h2>
        <p className="text-lg font-semibold text-gray-500">{category}</p>
        <p className="text-md font-medium text-gray-600">
          Quantity: {quantity}
        </p>
        <p className="text-md text-gray-600 italic">{note}</p>
        <div className="card-image mt-4">
          <img
            src={picture}
            alt={name}
            className="rounded-xl object-contain h-32 w-32"
          />
        </div>
      </div>
    </div>
  );
};

export default GroceryCard;
