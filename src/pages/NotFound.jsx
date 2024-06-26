import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <img
        src="https://i.postimg.cc/28B3hc1B/http-error-404-not-found.png"
        alt="404 Not Found"
        className="w-1/2 max-w-md mb-8 rounded-3xl"
      />
      <p className="text-lg text-gray-600 mb-8">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="btn bg-[#C5E2FF] px-5 rounded-lg py-2 text-[#0059B1] font-semibold"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
