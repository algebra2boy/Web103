import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateGroceryPage = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [note, setNote] = useState("");
  const [picture, setPicture] = useState("");

  const [error, setError] = useState("");

  const id = useParams().id;

  const navigate = useNavigate();

  useEffect(() => {
    const fetchGrocery = async () => {
      const response = await fetch(`http://localhost:3000/groceries/${id}`);
      const data = await response.json();

      setName(data.name);
      setCategory(data.category);
      setQuantity(data.quantity);
      setNote(data.note);
      setPicture(data.picture);
    };

    fetchGrocery();
  }, []);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCategory(event.target.value);
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(event.target.value);
  };

  const handleNoteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };

  const handlePictureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPicture(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!name || !category || !quantity || !note || !picture) {
      setError("Please fill in all fields before submitting");
      return;
    }

    if (isNaN(Number(quantity))) {
      setError("Quantity must be a number");
      return;
    }

    const response = await fetch(`http://localhost:3000/groceries/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        category,
        quantity,
        note,
        picture,
      }),
    });

    if (!response.ok) {
      setError("Failed to update grocery item, please try again");
    } else {
      navigate("/");
    }
  };

  const handleDelete = async () => {
    const response = await fetch(`http://localhost:3000/groceries/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      setError("Failed to delete grocery item, please try again");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg p-6 rounded-lg shadow-lg space-y-4"
      >
        <h1 className="text-3xl font-bold text-center mb-4">
          Add Grocery Item
        </h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <select
            value={category}
            onChange={handleCategoryChange}
            className="select select-bordered w-full"
          >
            <option value="" disabled>
              Select category
            </option>
            <option value="Fruits">Fruits</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Dairy">Dairy</option>
            <option value="Meat">Meat</option>
            <option value="Beverages">Beverages</option>
            <option value="Snacks">Snacks</option>
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Quantity</span>
          </label>
          <input
            type="text"
            value={quantity}
            onChange={handleQuantityChange}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Note</span>
          </label>
          <input
            type="text"
            value={note}
            onChange={handleNoteChange}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Picture</span>
          </label>
          <input
            type="text"
            value={picture}
            onChange={handlePictureChange}
            className="input input-bordered w-full"
          />
        </div>
        {error && (
          <div className="flex justify-center text-xl text-red-500">
            {error}
          </div>
        )}
        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={handleDelete}
            className="btn btn-outline btn-warning"
          >
            Delete
          </button>
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateGroceryPage;
