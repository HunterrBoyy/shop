import { Textarea } from "@material-tailwind/react";

import {
  Button, Rating, Typography,
  CardHeader,
  CardBody,
  Card,
  Avatar,
} from "@material-tailwind/react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useNavigate } from "react-router";
import { useReviewProductMutation } from "../features/productApi";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const Review = ({ product }) => {



  const reviewSchema = Yup.object().shape({
    comment: Yup.string().required('Required'),
    rating: Yup.string().required('Required')
  });

  const { user } = useSelector((store) => store.user);

  const nav = useNavigate();


  const [addReview, { isLoading, isError }] = useReviewProductMutation();



  const formik = useFormik({
    initialValues: {
      comment: '',
      rating: 0

    },
    onSubmit: async (val, { resetForm }) => {

      try {
        await addReview({
          body: {
            username: user.fullname,
            comment: val.comment,
            rating: val.rating,
          },
          id: product._id,
          token: user.token
        }).unwrap();
        toast.success('successfully review  added');

      } catch (err) {

        toast.error(err.data.message);
      }



    },
    validationSchema: reviewSchema
  });





  return (
    <div className="p-5 ">
      <h1 className="text-xl font-semibold tracking-wider mb-2">Add Reviews</h1>

      <form onSubmit={formik.handleSubmit} className="space-y-4 ">
        <div className="w-96">
          <Textarea

            name="comment"
            label="Comment"
            value={formik.values.comment}
            onChange={formik.handleChange}
          />
          {formik.errors.comment && formik.touched.comment && <h1 className='text-pink-700'>{formik.errors.comment}</h1>}

        </div>
        <div className="flex items-center gap-2">
          <Typography>
            Rate this item
          </Typography>
          <Rating
            name="rating"
            value={formik.values.rating}
            onChange={(v) => formik.setFieldValue('rating', v)} />
          {formik.errors.rating && formik.touched.rating && <h1 className='text-pink-700'>{formik.errors.rating}</h1>}

        </div>
        {isLoading ? <Button type='submit' size="sm" color="blue-gray" className="mt-6 w-[200px]">
          <div className='h-7 w-7 border-2 border-t-white rounded-full animate-spin mx-auto '></div>
        </Button> :
          <Button type="submit" className="mt-6 w-[200px] " size="sm" color="blue-gray">
            Submit
          </Button>
        }


      </form>

      <div className="my-7">
        <hr />
      </div>


      {product.reviews.map((data) => {
        return <Card key={data._id} color="transparent" shadow={false} className="w-full max-w-sm">
          <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="mx-0 flex items-center gap-4 pt-0 pb-2"
          >
            <Avatar
              size="lg"
              variant="circular"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              alt="tania andrew"
            />
            <div className="flex w-full flex-col ">
              <div className="flex items-center justify-between">
                <Typography variant="h5" color="blue-gray">
                  {data.username}
                </Typography>
                <div className="5 flex items-center gap-0">
                  <Rating value={data.rating} readonly />

                </div>
              </div>

            </div>
          </CardHeader>
          <CardBody className="mb-6 p-0">
            <Typography>
              {data.comment}
            </Typography>
          </CardBody>
        </Card>
      })}

    </div>
  )
}
export default Review


