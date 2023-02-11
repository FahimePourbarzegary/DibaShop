import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as yup from "yup";
type initialValuesType = {
  email: string;
  password: string;
};
function LoginPage() {
  //initial value formik
  let initialValues: initialValuesType = {
    email: "",
    password: "",
  };
  // send values and register
  const onSubmit = (values: initialValuesType) => {
    console.log(values);
    console.log(formik.values);
  };
  //for validation inputs
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("ایمیل اشتباه است")
      .required("ایمیل را وارد کنید"),
    password: yup
      .string()
      .max(15, " رمز باید حداکثر 15 و حداقل 8 کارکتر باشد.")
      .min(8, " رمز باید حداکثر 15 و حداقل 8 کارکتر باشد.")
      .required("رمز را وارد کنید"),
  });
  //*******************/
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  //*******************/

  return (
    <div className=" md:h-screen flex justify-center items-center ">
      <form
        className="flex flex-col justify-center items-center py-2 px-4 md:px-10 md:py-8 gap-4  border rounded-xl bg-slate-900"
        onSubmit={formik.handleSubmit}
      >
        {/*Error box */}
        <div
          className={` bg-warning w-full text-sm rounded-lg  ${
            Object.keys(formik.errors).length ? "block" : "hidden"
          }`}
        >
          <ul>
            <li>
              {formik.touched.email && formik.errors.email && (
                <div className="p-2">{formik.errors.email}</div>
              )}
            </li>
            <li>
              {formik.touched.password && formik.errors.password && (
                <div className="p-2">{formik.errors.password}</div>
              )}
            </li>
          </ul>
        </div>
        {/*fotm inputs box */}
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            {" "}
            <label htmlFor="email">ایمیل یا نام کاربری :</label>
            <input
              type="email"
              {...formik.getFieldProps("email")}
              id="email"
              className="mt-3 p-3 rounded-xl bg-slate-800 text-slate-400  focus:outline-none focus:ring focus:ring-primary-200"
              placeholder="ایمیل یا نام کاربری"
            />
          </div>
          <div className="flex flex-col">
            {" "}
            <label htmlFor="password">رمز :</label>
            <input
              type="password"
              {...formik.getFieldProps("password")}
              id="password"
              className="mt-3 p-3 rounded-xl bg-slate-800 password-slate-400  focus:outline-none focus:ring focus:ring-primary-200"
              placeholder="رمز"
            />
          </div>
        </div>
        {/*button */}
        <button
          className=" bg-primary-200 text-dark m-4 py-2 px-2 text-cente font-semibold text-base hover:animate-pulse rounded self-center active:bg-primary-400 active:outline-none active:ring active:ring-primary-100"
          type="submit"
        >
          ثبت نام
        </button>

        {/*Login box */}
        <div className=" bg-slate-800 w-full p-3  rounded-lg  transition-all text-sm">
          <Link to="/Register"> حساب کاربری بسازید </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
