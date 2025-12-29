import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../Context/GlobalContext";
import toast from "react-hot-toast";

const Cart = () => {
  const navigate = useNavigate();
  const { setIsCartOpen, addCart, setAddCart, totalPrice } =
    useContext(GlobalContext);
  const handleNavigate = () => {
    navigate("/Checkout");
    setIsCartOpen(false);
  };

  const handleIncrease = (id) => {
    setAddCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: (item.qty || 1) + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setAddCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: (item.qty || 1) - 1 } : item
      )
    );
  };

  const handleDelete = (id, name) => {
    setAddCart((prev) => prev.filter((item) => item.id !== id));
    toast.success(`${name} successfully removed!`);
  };
  return (
    <>
      <aside className="fixed top-0 left-0 bg-white h-dvh w-[500px] shadow-2xl p-2">
        <div className="flex items-center justify-between text-2xl">
          <h1>Cart Items</h1>
          <h1>₹ {totalPrice.toFixed(2)}/-</h1>
        </div>
        <ul className="h-[80vh] overflow-y-scroll flex flex-col gap-3 px-2">
          {addCart &&
            addCart.map((item, idx) => (
              <li key={idx} className="flex items-center gap-5">
                <figure className="w-30">
                  <img src={item?.images[0]?.url} alt="" />
                </figure>
                <div className="flex-1 flex flex-col gap-3">
                  <h1 className="line-clamp-1">{item.name}</h1>
                  <div className="flex items-center gap-5">
                    <button
                      onClick={() => handleIncrease(item.id)}
                      className="outline w-5 rounded text-lime-500 hover:bg-lime-500 hover:text-white"
                    >
                      +
                    </button>
                    <span>{item.qty || 1}</span>
                    <button
                      onClick={() => handleDecrease(item.id)}
                      className="outline w-5 rounded text-red-500 hover:bg-red-500 hover:text-white"
                    >
                      -
                    </button>
                  </div>
                </div>
                <div>
                  <p>₹ {(item.price * (item.qty || 1) * 90).toFixed(2)}/-</p>
                </div>
                <div>
                  <button
                    onClick={() => handleDelete(item.id, item.name)}
                    className="outline rounded bg-red-500 text-white hover:text-red-500 hover:bg-white"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
        </ul>
        <button
          onClick={handleNavigate}
          className="outline w-full h-10 rounded text-slate-600 hover:bg-slate-600 hover:text-white mt-2"
        >
          Checkout
        </button>
      </aside>
    </>
  );
};

export default Cart;
