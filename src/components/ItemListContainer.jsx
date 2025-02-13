import React from "react";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="flex flex-col justify-center items-center  text-black ">
      {greeting}
    </div>
  );
};

export default ItemListContainer;

