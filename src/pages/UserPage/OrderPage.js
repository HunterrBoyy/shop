
import { useNavigate } from "react-router";
import { Button } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";
import { clearCart } from "../../features/userSlice";
import { useAddOrderMutation } from "../../features/productApi";




const OrderPage = () => {
  const dispatch = useDispatch();
  const { user, carts } = useSelector((store) => store.user);
  const [addTocart, { isLoading, }] = useAddOrderMutation();
  const totals = carts.reduce((a, b) => {
    return a + b.qty * b.price
  }, 0);



  const nav = useNavigate();


  const orderAdd = async (totalAmount, orderItems) => {
    try {

      const response = await addTocart({
        body: {
          orderItems,
          totalAmount
        },
        token: user.token
      });
      dispatch(clearCart());
      toast.success(`${response?.data}`);
      nav('/', { replace: true });
    } catch (err) {

      toast.error(`${err?.data}`);
    }
  }

  return (
    <div className="p-10 space-y-10">
      <h1>Delivery Address</h1>

      <p className="text-gray-700">{user.shippingAddress.address}, {user.shippingAddress.city}</p>

      <p>Total Amount is {totals}</p>




      {isLoading ? <Button type='submit' className="mt-6 max-w-lg" fullWidth>
        <div className='h-7 w-7 border-2 border-t-blue-gray-900 rounded-full animate-spin mx-auto '></div>
      </Button> :
        <Button onClick={() => orderAdd(totals, carts)} className="mt-6 max-w-lg" >
          CheckOut
        </Button>
      }

    </div>

  )
}
export default OrderPage