import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    {
      id: 1,
      name: "About",
      path: "/about",
    },
    {
      id: 2,
      name: "Contact",
      path: "/contact",
    },
    {
      id: 3,
      name: "New Arrival",
      path: "/newArrival",
    },
    {
      id: 4,
      name: "Men",
      path: "/menCloths",
    },
    {
      id: 5,
      name: "Women",
      path: "/womenCloths",
    },
    {
      id: 6,
      name: "Children",
      path: "/childrenCloths",
    },
  ];
  return (
    <div className="bg-primary flex justify-between items-center p-6 w-full text-white">
      <Link to={"/"} className="logo text-3xl font-bold font-serif italic">
        Granduer
      </Link>

      <div className=" links flex justify-center items-center gap-4 pr-20 text-xl font-normal">
        {navLinks.map((item) => (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "px-6 py-2 border border-white rounded-full bg-white text-black transition-colors"
                : "bg-none text-white"
            }
            key={item.id}
            to={item.path}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
      <div className="Cartsearch flex gap-4">
        <span>Search</span>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "px-6 py-2 border border-white rounded-full bg-white text-black transition-colors"
              : ""
          }
          to={"/cart"}
        >
          Cart
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
