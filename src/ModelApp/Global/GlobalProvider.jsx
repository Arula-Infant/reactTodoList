import React, { useEffect, useMemo, useState } from 'react'
import axios from "axios"
import GlobalContext from '../Context/GlobalContext'

const GlobalProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [store, setStore] = useState({})
    const [addCart, setAddCart] = useState ([])

    useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/data.json");
        setStore(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const totalPrice = useMemo (() => {
    return addCart.reduce(
      (acc,item) => acc + item.price * (item.qty || 1) * 90, 0
    )
  },[addCart])
    return (
    <GlobalContext.Provider value={{isCartOpen, setIsCartOpen, store, setStore, addCart, setAddCart, totalPrice}}>
        {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider
