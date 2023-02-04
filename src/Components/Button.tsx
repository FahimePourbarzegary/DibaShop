type ButtonTypes = {
  title: string;
};
function Button({ title }: ButtonTypes) {
  return (
    <button className=" bg-primary-400 w-full text-dark py-3 px-10 text-cente font-semibold text-base hover:animate-pulse rounded">
      {title}
    </button>
  );
}

export default Button;
