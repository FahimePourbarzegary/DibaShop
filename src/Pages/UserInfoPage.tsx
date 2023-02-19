import { useAppSelector } from "../hooks/hooks";
import { RootState } from "../services/store";

function UserInfoPage() {
  const { user, loggedIn, error } = useAppSelector(
    (state: RootState) => state.users
  );
  return (
    <section className="py-4 w-full">
      <p className=" pr-8  md:pr-18 font-semibold text-slate-600 text-base md:text-xl">
        داشبورد
      </p>
      <div
        className="p-6 grid gap-5
        md:grid-cols-2 md:gap-8 xl:grid-cols-3"
      >
        <div className="mt-3 p-3 rounded-xl bg-slate-800 text-slate-400  focus:outline-none focus:ring focus:ring-primary-200">
          {user?.name}
        </div>
        <div className="mt-3 p-3 rounded-xl bg-slate-800 text-slate-400  focus:outline-none focus:ring focus:ring-primary-200">
          {user?.lastname}
        </div>

        <div className="mt-3 p-3 rounded-xl bg-slate-800 text-slate-400  focus:outline-none focus:ring focus:ring-primary-200">
          {user?.email}
        </div>
        <div className="p-3 mt-3 rounded-xl bg-slate-800 text-slate-400 overflow-x-scroll   whitespace-nowrap">
          {user?.address}
        </div>
      </div>
    </section>
  );
}

export default UserInfoPage;
