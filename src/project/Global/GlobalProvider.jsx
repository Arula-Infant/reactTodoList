import React, { useEffect, useState } from "react";
import ApiConfig from "../API/ApiConfig";
import GlobalContext from "../Context/GlobalContext";

const GlobalProvider = ({ children }) => {
  const [store, setStore] = useState({});
  // get
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await ApiConfig.get("/user");
        setStore(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  // post

  const addUser = async (data) =>{
    const res = await ApiConfig.post("/user",data)
    setStore((prev) => [...prev, res.data])
  }

  // put

  const updateUser = async(data, id) =>{
    const res = await ApiConfig.put(`/user/${id}`, data)
    setStore((prev) => prev.map((u) => (u.id === id ? res.data : u)))
  }
  // delete

  const deleteUser =async(id)=>{
    await ApiConfig.delete(`/user/${id}`)
    setStore((prev)=> prev.filter((list)=> list.id !==id))
  }
  return (
    <>
      <GlobalContext.Provider value={{ store, addUser, deleteUser,  updateUser }}>
        {children}
      </GlobalContext.Provider>
    </>
  );
};

export default GlobalProvider;
