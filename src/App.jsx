import React, { useState } from "react";
import AllCards from "./assets/components/AllCards";
import Form from "./assets/components/Form";

function App() {
  const [cards, setCards] = useState([]);

  const handleFormData = (data) => {
    setCards([...cards, data]);
  };

  const handleRemove = (indexToBeDeleted) => {
    setCards(
      cards.filter((item, index) => {
        return index != indexToBeDeleted;
      })
    );
  };

  return (
    <div className="container mx-auto w-full min-h-screen flex flex-col justify-center items-center gap-10 py-20">
      <AllCards cards={cards} handleRemove={handleRemove} />
      <Form handleFormData={handleFormData} />
    </div>
  );
}

export default App;
