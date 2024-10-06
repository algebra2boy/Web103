import React, { useState } from "react";

const AddGroceryPage = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [note, setNote] = useState("");
  const [picture, setPicture] = useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleClear = () => {
    setName("");
    setCategory("");
    setQuantity("");
    setNote("");
    setPicture("");
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Add submit logic here
    console.log("Form submitted");
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
          <input
            type="text"
            value={category}
            onChange={handleCategoryChange}
            className="input input-bordered w-full"
          />
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
        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={handleClear}
            className="btn btn-outline btn-warning"
          >
            Clear
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddGroceryPage;
