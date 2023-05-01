import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";


const Login = () => {
  const valSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(5, 'too short').max(20, 'max character 20').required()
  });
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async (val) => {

    },

  });


  const nav = useNavigate();
  return (
    <Card color="transparent" shadow={false} className="max-w-md mx-auto mt-[7%]">
      <Typography variant="h4" color="blue-gray">
        Login
      </Typography>
      <Typography color="gray" className="my-2 font-normal">
        Enter your details to Login.
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4 flex flex-col gap-6">
          <div>
            <Input
              name='email'
              id='email'
              type='email'
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.errors.email && formik.touched.email ? true : false}
              size="lg" label="Email" />
            {formik.errors.email && formik.touched.email ? <h1 className='mt-2 text-red-600'>{formik.errors.email}</h1> : null}
          </div>

          <div>
            <Input
              name='password'
              id='password'
              onChange={formik.handleChange}
              value={formik.values.password}
              error={formik.errors.password && formik.touched.password ? true : false}
              type="password" size="lg" label="Password" />
            {formik.errors.password && formik.touched.password ? <h1 className='mt-2 text-red-600'>{formik.errors.password}</h1> : null}
          </div>
        </div>

        <Button type="submit" className="mt-6" fullWidth>
          Login
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Don't have an account?{" "}
          <button type="button" onClick={() => nav('/user_signUp')}
            className="font-medium text-blue-500 transition-colors hover:text-blue-700"
          >
            Sign Up
          </button>
        </Typography>
      </form>
    </Card>
  );
}


export default Login