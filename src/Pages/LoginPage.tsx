import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { autoLogin, LoginUser } from "../services/features/userSlice";
import { RootState } from "../services/store";
type initialValuesType = {
  useremail: string;
  password: string;
};
function LoginPage() {
  //initial value formik
  let initialValues: initialValuesType = {
    useremail: "",
    password: "",
  };
  // send values and register
  const navigate = useNavigate();
  const { user, loading, loggedIn, error } = useAppSelector(
    (state: RootState) => state.users
  );

  const dispatch = useAppDispatch();
  const [errorUser, setErrorUser] = useState<null | string>(null);
  useEffect(() => {
    if (loggedIn) {
      setErrorUser(null);
      dispatch(autoLogin());
      navigate("/");
    }
  }, [loggedIn]);
  const onSubmit = async (values: initialValuesType) => {
    const { useremail, password } = values;
    console.log(loggedIn);
    await dispatch(
      LoginUser({
        useremail,
        password,
      })
    );
    if (!loggedIn)
      setErrorUser(
        " لطفا رمز را بررسی کنید .امکان دارد نام کاربری یا ایمیل از قبل وجود داشته."
      );
  };

  //for validation inputs
  const validationSchema = yup.object({
    useremail: yup.string().required("ایمیل را وارد کنید"),
    password: yup.string().required("رمز را وارد کنید"),
  });
  //*******************/
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  //*******************/

  return (
    <div className=" md:h-screen flex justify-center items-center my-8">
      <form
        className="flex flex-col justify-center items-center py-2 px-4 md:px-10 md:py-8 gap-4  border rounded-xl bg-slate-900"
        onSubmit={formik.handleSubmit}
      >
        {/*Error loadin box */}
        {loading ? (
          <div role="status">
            <svg
              aria-hidden="true"
              className="w-8 h-8 mr-2 text-gray-200 animate-spin  fill-primary-400"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        ) : null}
        {errorUser ? (
          <div className=" bg-warning w-full text-sm rounded-lg p-2">
            {errorUser}
          </div>
        ) : null}
        <div
          className={` bg-warning w-full text-sm rounded-lg  ${
            Object.keys(formik.errors).length ? "block" : "hidden"
          }`}
        >
          <ul>
            <li>
              {formik.touched.useremail && formik.errors.useremail && (
                <div className="p-2">{formik.errors.useremail}</div>
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
            <label htmlFor="useremail">ایمیل یا نام کاربری :</label>
            <input
              type="text"
              {...formik.getFieldProps("useremail")}
              id="useremail"
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
              className="mt-3 p-3 rounded-xl bg-slate-800 text-slate-400  password-slate-400  focus:outline-none focus:ring focus:ring-primary-200"
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
