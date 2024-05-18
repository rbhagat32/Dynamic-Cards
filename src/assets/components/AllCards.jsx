import React from "react";
import Card from "./Card";

function AllCards({ cards, handleRemove }) {
  return (
    <div className="flex flex-wrap justify-center items-center gap-10">
      <Card cards={cards} handleRemove={handleRemove} />
    </div>
  );
}

export default AllCards;
