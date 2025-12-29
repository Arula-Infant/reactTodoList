import React, { useContext, useEffect, useState } from 'react'
import GlobalContext from '../Context/GlobalContext'
import Card from '../Component/Card'


const Shop = () => {
    const {store} = useContext(GlobalContext)
    const [currentProduct, setCurrentProduct] = useState([])

    const handleCurrentProduct = (list) =>{
        setCurrentProduct(store[list])
    }
    useEffect(() =>{
        if (store) {
            const firstKey = Object.keys(store)[0]
            setCurrentProduct(store[firstKey])
        }
    },[store])
  return (
    <>
      <section>
        <nav>
            <ul className='flex items-center gap-10 p-2'>
                {Object.keys(store).map((list) =>(
                    <li key={list} onClick={() => handleCurrentProduct(list)} className='capitalize hover: cursor-pointer'>{list.split("_").join(" ")}</li>
                ))}

            </ul>
        </nav>
        <div className='grid grid-cols-4 gap-4 p=2'>
            <Card product={currentProduct} />
        </div>
      </section>
    </>
  )
}

export default Shop
