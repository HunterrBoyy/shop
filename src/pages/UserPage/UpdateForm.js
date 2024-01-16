import {
  Card,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";

import { useFormik } from "formik";
import * as Yup from 'yup';
import { toast } from "react-toastify";
import { useUserUpdateMutation } from "../../features/authApi";
import { userAddOrUpdate } from "../../features/userSlice";
import { useDispatch } from "react-redux";

const UpdateForm = ({ user }) => {
  const [update, { isLoading }] = useUserUpdateMutation();
  const userSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    fullname: Yup.string().min(5).max(20).required('Required')

  });

  const dispatch = useDispatch();




  const formik = useFormik({
    initialValues: {
      email: user?.email,
      fullname: user?.fullname
    },
    onSubmit: async (val) => {
      try {
        const response = await update({
          body: {
            email: val.email,
            fullname: val.fullname
          },
          token: user.token
        }).unwrap();
        dispatch(userAddOrUpdate({ ...user, email: val.email, fullname: val.fullname }))

        toast.success(`${response}`);

      } catch (err) {

        toast.error(`${err?.data}`);
      }

    },
    validationSchema: userSchema
  });


  return (
    <>


      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Profile
        </Typography>
        <form onSubmit={formik.handleSubmit} className="mt-8 mb-2 ">
          <div className="mb-4 flex flex-col gap-6">
            <Input
              name='email'
              onChange={formik.handleChange}
              value={formik.values.email}
              size="lg" label="Email" />

            {formik.errors.email && formik.touched.email && <h1 className='text-pink-700'>{formik.errors.email}</h1>}


            <Input
              name='fullname'
              onChange={formik.handleChange}
              value={formik.values.fullname}
              type="text" size="lg" label="Username" />
            {formik.errors.fullname && formik.touched.fullname && <h1 className='text-pink-700'>{formik.errors.fullname}</h1>}

          </div>

          {isLoading ? <Button type='submit' className="mt-6" fullWidth>
            <div className='h-7 w-7 border-2 border-t-blue-gray-900 rounded-full animate-spin mx-auto '></div>
          </Button> : <Button type='submit' className="mt-6" fullWidth>
            Update
          </Button>
          }


        </form>
      </Card>






    </>
  )
}
export default UpdateForm