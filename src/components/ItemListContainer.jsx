import React from "react";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="flex justify-center items-center h-screen text-xl text-gray-800 bg-gray-100 border border-gray-300 rounded-lg p-6 shadow-lg">
      {greeting}
    </div>
  );
};

export default ItemListContainer;

