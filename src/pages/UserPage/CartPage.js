import { Card, Typography } from "@material-tailwind/react";


import { baseUrl } from "../../features/constant";
import { useDispatch, useSelector } from "react-redux";
import { addOrUpdateCart, removeCart } from "../../features/userSlice";
import { useNavigate } from "react-router";




const CartPage = () => {


  const nav = useNavigate();
  const dispatch = useDispatch();

  // let tot = [
  //   { qty: 2, price: 1000, id: 1 },
  //   { qty: 1, price: 1000, id: 2 },
  // ];

  // tot = tot.map((t) => t.id == 1 ? {} : t);
  // console.log("tot",tot);

  // const t = tot.reduce((a, b) => a + b.qty * b.price, 0);
  // console.log(t);

  const { carts, user } = useSelector((store) => store.user);


  const total = carts.reduce((a, b) => {
    return a + b.qty * b.price
  }, 0);




  return (
    <div className="p-4">

      {carts.length === 0 ? <div className="h-[340px] mt-11">
        <lottie-player src="https://lottie.host/d9b09000-90b8-4068-93ff-04b8e399f0ed/MnhzolmZTp.json" background="transparent" speed="1" loop autoplay></lottie-player>

      </div> : <div>

        <h1 className="text-2xl mb-7 font-bold">Your Carts Items</h1>


        <div className="grid grid-cols-3 gap-5 items-start ">



          <div className="col-span-2">


            {carts.map((cart, i) => {

              return <div key={i} className="grid grid-cols-3 gap-5  mb-5 max-w-xl">
                <img className="w-full h-full" src={`${baseUrl}${cart.image}`} alt="" />

                <div className="info flex flex-col justify-between">
                  <h1>{cart.name}</h1>
                  <p>Rs.{cart.price}</p>

                  <Typography variant="small" color="blue-gray" className="font-normal">
                    <select
                      value={cart.qty}
                      onChange={(e) => {
                        dispatch(addOrUpdateCart({ ...cart, qty: e.target.value }));
                      }


                      } className="p-2" name="" id="">

                      {[...Array(cart.countInStock).keys()].map((v, i) => {
                        return <option key={i} value={v + 1}>{v + 1}</option>
                      })}
                    </select>
                  </Typography>


                </div>
                <div className="totals flex flex-col justify-between items-end">

                  <button onClick={() => {
                    dispatch(removeCart(i))
                  }}  > <i className="fa-solid fa-xmark"></i> </button>


                  <p>Total: {cart.qty * cart.price}</p>
                </div>
              </div>
            })}





          </div>




          <Card className="h-full w-full overflow-scroll">
            <table className="w-full min-w-max table-auto text-left">

              <tbody>


                <tr className="text-center">
                  <td className="p-4 border-b border-blue-gray-50">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      SubTotal
                    </Typography>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50 bg-blue-gray-50/50">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {carts.length}
                    </Typography>
                  </td>



                </tr>

                <tr className="text-center">
                  <td className="p-4 border-b border-blue-gray-50">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      Total Price
                    </Typography>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50 bg-blue-gray-50/50">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      Rs.{total}
                    </Typography>
                  </td>



                </tr>
                <tr className="text-center">
                  <td className="p-4 border-b border-blue-gray-50">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      Status
                    </Typography>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50 bg-blue-gray-50/50">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      Cash On Delivery
                    </Typography>
                  </td>



                </tr>



                <tr className="text-center ">
                  <td colSpan={2}>
                    <button onClick={() => {
                      if (user.shippingAddress.isEmpty) {
                        nav('/user/shipping');
                      } else {
                        nav('/user/checkout');
                      }


                    }} className=' w-[60%] bg-black my-5 text-white mx-auto py-1 rounded-sm '>Proceed To CheckOut</button>

                  </td>
                </tr>
              </tbody>






            </table>
          </Card>





        </div>


      </div>}

    </div>
  )
}
export default CartPage