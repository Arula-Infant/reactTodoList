import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import GlobalContest from "../Context/GlobalContext";

const ToDo = ({ editObj, setEditObj }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm();
  const { addUser, updateUser } = useContext(GlobalContest);

  useEffect(() => {
    if (editObj?.id) {
      setValue("name", editObj?.name);
      setValue("email", editObj?.email);
      setValue("phone", editObj?.phone);
    }
  }, [editObj, setValue]);

  const handleFormSubmit = (data) => {
    if(editObj?.id) {
      updateUser(data, editObj?.id)
      setEditObj({})
    }else{
      addUser(data)
    }
    reset()
  }

  return (
    <>
      <section className="grid place-items-center bg-blue-100">
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="border bg-lime-200 w-1/2 flex flex-col gap-3 p-2 [&_input]:w-full [&_input]:h-10 [&_input]:px-2"
        >
          <h1 className="text-2xl font-bold text-center">ToDo Form</h1>
          <div>
            <input
              type="text"
              placeholder="Enter your name"
              {...register("name", {
                required: "please enter name",
              })}
            />
            {errors.name && (
              <p className="text-red-600">{errors.name.message}</p>
            )}
          </div>
          <div>
            <input
              type="email"
              placeholder="Enter your Email"
              {...register("email", {
                required: "please enter email",
              })}
            />
            {errors.email && (
              <p className="text-red-600">{errors.name.message}</p>
            )}
          </div>
          <div>
            <input
              type="tel"
              placeholder="Enter your phone number"
              {...register("phone", {
                required: "please enter phone",
              })}
            />
            {errors.phone && (
              <p className="text-red-600">{errors.name.message}</p>
            )}
          </div>
          <div>
            <button className="outline w-full h-10 hover:bg-black hover:text-white cursor-pointer">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default ToDo;
