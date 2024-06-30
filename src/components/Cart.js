import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // Check if cartItems is defined and is an array
  if (!cartItems || !Array.isArray(cartItems) || cartItems.length === 0) {
    return (
      <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div>No items in the cart</div>
      </div>
    );
  }

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;

// import { useSelector } from "react-redux";
// import ItemList from "./ItemList";

// const Cart = () => {
//   const cartItems = useSelector((store) => store.cart.items);
//   console.log("Cart Items:", cartItems); // Log the cart items to inspect

//   // Check if cartItems is defined and is an array
//   if (!cartItems || !Array.isArray(cartItems) || cartItems.length === 0) {
//     return (
//       <div className="text-center m-4 p-4">
//         <h1 className="text-2xl font-bold">Cart</h1>
//         <div>No items in the cart</div>
//       </div>
//     );
//   }

//   return (
//     <div className="text-center m-4 p-4">
//       <h1 className="text-2xl font-bold">Cart</h1>
//       <div className="">
//         <ItemList items={cartItems} />
//       </div>
//     </div>
//   );
// };

// export default Cart;
