import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function Button({ children, disabled, to, type }) {
  const base =
    "inline-block text-sm rounded-full bg-yellow-400  font-semibold uppercase tracking-wide text-stone-800 ring-yellow-300 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-offset-2 disabled:cursor-not-allowed ";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      "inline-block text-sm rounded-full border-2 border-stone-300 px-4 py-2.5 font-semibold uppercase tracking-wide text-stone-400 ring-yellow-300 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed md:px-6 md:py-3.5",
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
