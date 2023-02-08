import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as yup from "yup";
type initialValuesType = {
  name: string;
  lastName: string;
  email: string;
  address: string;
  password: string;
  confirmPassword: string;
};
function RegisterPage() {
  //initial value formik
  let initialValues: initialValuesType = {
    name: "",
    lastName: "",
    email: "",
    address: "",
    password: "",
    confirmPassword: "",
  };
  // send values and register
  const onSubmit = (values: initialValuesType) => {
    console.log(values);
    console.log(formik.values);
  };
  //for validation inputs
  const validationSchema = yup.object({
    name: yup
      .string()
      .max(15, " نام باید حداکثر 15 و حداقل 3 کارکتر باشد.")
      .min(3, " نام باید حداکثر 15 و حداقل 3 کارکتر باشد.")
      .required("نام را وارد کنید"),
    lastName: yup
      .string()
      .max(20, "نام خانوادگی  باید حداکثر 20 و حداقل 3 کارکتر باشد.")
      .min(3, "نام خانوادگی  باید حداکثر 20 و حداقل 3 کارکتر باشد.")
      .required("نام خانوادگی را وارد کنید"),
    email: yup
      .string()
      .email("ایمیل اشتباه است")
      .required("ایمیل را وارد کنید"),
    address: yup.string().required("آدرس را وارد کنید"),
    password: yup
      .string()
      .max(15, " رمز باید حداکثر 15 و حداقل 8 کارکتر باشد.")
      .min(8, " رمز باید حداکثر 15 و حداقل 8 کارکتر باشد.")
      .required("رمز را وارد کنید"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "تکرار رمز با رمز مقایرت دارد")
      .required("تکرار رمز را وارد کنید"),
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
        className=" flex flex-col justify-center items-center py-2 px-4 md:px-10 md:py-8 gap-4  border rounded-xl bg-slate-900 my-10"
        onSubmit={formik.handleSubmit}
      >
        {/*Error box */}
        <div
          className={`bg-warning w-full p-2  rounded-lg  transition-all text-sm ${
            Object.keys(formik.errors).length ? "block" : "hidden"
          }`}
        >
          ارورها:
          <ul>
            <li>
              {formik.touched.name && formik.errors.name && (
                <div>{formik.errors.name}</div>
              )}
            </li>
            <li>
              {formik.touched.lastName && formik.errors.lastName && (
                <div>{formik.errors.lastName}</div>
              )}
            </li>
            <li>
              {formik.touched.email && formik.errors.email && (
                <div>{formik.errors.email}</div>
              )}
            </li>
            <li>
              {formik.touched.address && formik.errors.address && (
                <div>{formik.errors.address}</div>
              )}
            </li>
            <li>
              {formik.touched.password && formik.errors.password && (
                <div>{formik.errors.password}</div>
              )}
            </li>
            <li>
              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <div>{formik.errors.confirmPassword}</div>
                )}
            </li>
          </ul>
        </div>
        {/*fotm inputs box */}
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            {" "}
            <label htmlFor="name">نام :</label>
            <input
              type="text"
              id="name"
              {...formik.getFieldProps("name")}
              className="mt-3 p-3 rounded-xl bg-slate-800 text-slate-400  focus:outline-none focus:ring focus:ring-primary-200"
              placeholder="نام"
            />
          </div>
          <div className="flex flex-col">
            {" "}
            <label htmlFor="lastName">نام خانوادگی :</label>
            <input
              type="text"
              {...formik.getFieldProps("lastName")}
              id="lastName"
              className="mt-3 p-3 rounded-xl bg-slate-800 text-slate-400  focus:outline-none focus:ring focus:ring-primary-200"
              placeholder="نام خانوادگی"
            />
          </div>{" "}
          <div className="flex flex-col">
            {" "}
            <label htmlFor="email">ایمیل :</label>
            <input
              type="email"
              {...formik.getFieldProps("email")}
              id="email"
              className="mt-3 p-3 rounded-xl bg-slate-800 text-slate-400  focus:outline-none focus:ring focus:ring-primary-200"
              placeholder="ایمیل"
            />
          </div>
          <div className="flex flex-col">
            {" "}
            <label htmlFor="address">آدرس :</label>
            <textarea
              className="mt-3 p-3 rounded-xl bg-slate-800 text-slate-400  focus:outline-none focus:ring focus:ring-primary-200"
              {...formik.getFieldProps("address")}
              id="address"
              placeholder="آدرس"
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
          <div className="flex flex-col">
            {" "}
            <label htmlFor="confirmPassword">تکرار رمز :</label>
            <input
              type="text"
              {...formik.getFieldProps("confirmPassword")}
              id="confirmPassword"
              className="mt-3 p-3 rounded-xl bg-slate-800 text-slate-400  focus:outline-none focus:ring focus:ring-primary-200"
              placeholder="تکرار رمز"
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
          <Link to="/Login">ورود به حساب کاربری</Link>
        </div>
      </form>
    </div>
  );
}

export default RegisterPage;
