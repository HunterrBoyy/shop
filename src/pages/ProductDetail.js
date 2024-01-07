import { useNavigate, useParams } from "react-router";

import { Image, Shimmer } from 'react-shimmer';
import { baseUrl } from "../features/constant";
import { Card, Typography, Rating } from "@material-tailwind/react";
import { useFormik } from "formik";

import { product } from "../dummy/products";








const ProductDetail = () => {




  const nav = useNavigate();
  const formik = useFormik({
    initialValues: {
      qty: 1
    }
  });






  return (
    <div>
      <div className="grid grid-cols-3 p-7 gap-5">

        <div>
          <Image
            src={`${baseUrl}${product.product_image}`}
            fallback={<Shimmer width={800} height={600} className="w-full h-full" />}
          />
        </div>


        <div className="text-gray-700 space-y-4">
          <h1 className="font-bold">{product.product_name}</h1>

          <p className="border-y-2 py-1 border-gray-500">Rs.{product.product_price}</p>
          <p>{product.product_detail}</p>
          {product.numReviews === 0 ? <h1>
            No Reviews yet
          </h1> : <div>

            <div className="flex justify-between">
              <Rating value={product.rating} readonly />
              <h1> Reviews {product.numReviews}</h1>
            </div>

          </div>
          }
        </div>



        <div>



          <Card className="h-full w-full overflow-scroll">
            <table className="w-full min-w-max table-auto text-left">

              <tbody>

                <tr className="text-center">
                  <td className="p-4 border-b border-blue-gray-50">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      Price
                    </Typography>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50 bg-blue-gray-50/50">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {product.product_price}
                    </Typography>
                  </td>



                </tr>
                <tr className="text-center">
                  <td className="p-4 border-b border-blue-gray-50">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      Item in Stock
                    </Typography>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50 bg-blue-gray-50/50">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {product.countInStock}
                    </Typography>
                  </td>



                </tr>
                <tr className="text-center">
                  <td className="p-4 border-b border-blue-gray-50">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      Qty
                    </Typography>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50 bg-blue-gray-50/50">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      <select onChange={(e) => formik.setFieldValue('qty', e.target.value)} className="p-2" name="" id="">

                        {[...Array(product.countInStock).keys()].map((v, i) => {
                          return <option key={i} value={v + 1}>{v + 1}</option>
                        })}
                      </select>
                    </Typography>
                  </td>



                </tr>




                <tr className="text-center ">
                  <td colSpan={2}>
                    <button onClick={() => {
                     
                    }} className=' w-[50%] bg-black my-5 text-white mx-auto py-1 rounded-sm'>Add To Cart</button>

                  </td>
                </tr>
              </tbody>






            </table>
          </Card>
        </div>


      </div>



      {/* {!user.isAdmin && <Review product={product} />} */}











    </div>
  )
}
export default ProductDetail