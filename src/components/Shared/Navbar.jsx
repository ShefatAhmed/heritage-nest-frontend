import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-16 bg-[#ECF5FF] py-3">
      <div>
        <ul className="flex gap-4">
          <li>
            <Link to="/buy">Buy</Link>
          </li>
          <li>
            <Link to="/sell">Sell</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
        </ul>
      </div>
      <div>
        <Link to="/">
          <img
            className="w-12"
            src="https://i.postimg.cc/SR4nWfkw/e8cbbb0006f4af5b4764c7061ba11f37.png"
            alt="ff"
          />
        </Link>
      </div>
      <div>
        <button className="btn bg-[#C5E2FF] px-5 rounded-lg py-2 text-[#0059B1] font-semibold">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
