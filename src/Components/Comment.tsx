

function Comment() {
  return (
    <div className="w-full border rounded p-5">
      <div className="flex justify-between items-center">
        <div className="flex gap-x-2">
          {/*Image section */}
          <div className=" w-11 h-11 rounded-full">
            <img
              src="'"
              alt="user-image"
              aria-hidden
              className=" w-full h-11 h-autoshadow rounded-full max-w-ful align-middle border-none object-cover object-fit "
            />
          </div>
          {/*name section */}
          <div>
            <p className=" font-semibold text-base ">اسم</p>
          </div>
        </div>
        {/*date  section */}
        <div>
          <p className="text-xs ">تاریخ</p>
        </div>
      </div>
      {/*review section */}
      <div className=" font-normal text-xs  mr-11 mt-4">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
      </div>
    </div>
  );
}

export default Comment