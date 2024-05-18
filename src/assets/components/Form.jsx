import React from "react";
import { useForm } from "react-hook-form";

function Form({ handleFormData }) {
  const { register, handleSubmit, reset } = useForm();

  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={handleSubmit((data) => {
          handleFormData(data);
          reset();
        })}
        className="flex flex-col gap-4"
      >
        <input
          {...register("title")}
          type="text"
          className="px-3 py-2 rounded-lg outline-none font-medium text-lg text-black placeholder:text-black"
          placeholder="Enter Title"
        />
        <input
          {...register("image")}
          type="text"
          className="px-3 py-2 rounded-lg outline-none font-medium text-lg text-black placeholder:text-black"
          placeholder="Enter Image URL"
        />
        <input
          onClick={() => handleSubmit}
          type="submit"
          className="cursor-pointer bg-gradient-to-br from-indigo-500 to-violet-500 px-4 py-3 rounded-xl mt-2 shadow-xl font-bold text-lg"
          value="Create Card !"
        />
      </form>
    </div>
  );
}

export default Form;
