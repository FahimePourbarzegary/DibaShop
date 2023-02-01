//box of category for redirect to product have this category
function Category() {
  return (
    <div className=" flex justify-center items-center ">
      <div className=" p-4 w-64 h-64 bg-dark rounded-xl flex flex-col justify-between items-center text-primary-300 md:w-64 md:h-64 md:p-6 border ">
        <div>
          <img
            src="https://s2.uupload.ir/files/anghoshtaresezar_9odt.jpg"
            alt="product_image"
            className=" w-44 h-44  rounded-full mb-2"
          />
        </div>
        <div>دسته بندی</div>
      </div>
    </div>
  );
}

export default Category;
