import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";


const UserProfile = () => {
  const valSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    name: Yup.string().min(5, 'too short').max(20, 'max character 20').required(),
    password: Yup.string().min(5, 'too short').max(20, 'max character 20').required()
  });
  const formik = useFormik({
    initialValues: {
      email: '',
      name: ''
    },
    onSubmit: async (val) => {

    },

  });


  const nav = useNavigate();
  return (
    <div className="grid grid-cols-3 p-7 gap-5">

      <Card color="transparent" shadow={false} className="max-w-mdmt-[7%] ">
        <Typography variant="h4" color="blue-gray">
          User Profile
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4 flex flex-col gap-6 mt-5">
            <div>
              <Input
                name='name'
                id='name'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.name}
                error={formik.errors.name && formik.touched.name ? true : false}
                size="lg" label="User Name" />
              {formik.errors.email && formik.touched.email ? <h1 className='mt-2 text-red-600'>{formik.errors.email}</h1> : null}
            </div>
            <div>
              <Input
                name='email'
                id='email'
                type='email'
                onChange={formik.handleChange}
                value={formik.values.email}
                error={formik.errors.email && formik.touched.email ? true : false}
                size="lg" label="Email Address" />
              {formik.errors.email && formik.touched.email ? <h1 className='mt-2 text-red-600'>{formik.errors.email}</h1> : null}
            </div>


          </div>

          <Button type="submit" className="mt-6 bg-black" >
            Update
          </Button>

        </form>
      </Card>



      <div className="col-span-2 justify-self-center">
        <Typography variant="h4" color="blue-gray">
          Orders
        </Typography>

      </div>
    </div>
  );
}


export default UserProfile