import { useMoveBack } from "@/hooks/useMoveBack";
import { HiArrowUturnLeft } from "react-icons/hi2";
import CartItem from "./CartItem";
import CartOverview from "./CartOverview";
import { useSelector } from "react-redux";
import { getCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const moveBack = useMoveBack();
  const cart = useSelector(getCart);

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="max-w-container mx-auto py-16 flex justify-between">
      <div>
        <button
          onClick={moveBack}
          className="flex items-center gap-2.5 text-textGray hover:text-darkSlate"
        >
          <span>
            <HiArrowUturnLeft />
          </span>
          Go Back
        </button>

        <h2 className="heading-tertiary mt-5 mb-8">Shopping Cart</h2>

        <ul className="max-h-96 overflow-scroll">
          {cart.map((item) => (
            <CartItem key={item.productId} item={item} />
          ))}
        </ul>
      </div>

      <CartOverview />
    </div>
  );
};

export default Cart;
