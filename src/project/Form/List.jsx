import React, { useContext } from "react";
import GlobalContext from "../Context/GlobalContext";

const List = ({handleEdit}) => {
  const { store, deleteUser } = useContext(GlobalContext);
  return (
    <>
      <section className="bg-blue-100">
        <ul className="flex flex-col gap-5 p-5 ">
          {store.length > 0 ? (
            store?.map((list, idx) => (
              <li key={list.id} className=" bg-white flex items-center gap-5 shadow-2xl p-5">
                <div>{idx + 1}</div>
                <div className="flex-1">{list.name}</div>
                <div>
                  <button onClick={() => handleEdit(list)} className="outline px-5 text-lime-500 hover:bg-lime-500 hover:text-white">Edit</button>
                </div>
                <div>
                  <button onClick={()=> deleteUser(list.id)} className="outline text-red-500 hover:bg-red-500 hover:text-white px-5">Delete</button>
                </div>
              </li>
            ))
          ) : (
            <li>No user data found</li>
          )}
        </ul>
      </section>
    </>
  );
};

export default List;
