import { Link} from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";


const Header = () => {
  const navigate = useNavigate();
  const [logged, setLogged] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const [cookies, removeCookie] = useCookies(["Token"]);
  
  useEffect(() => {
    const verifyCookie = async () => {
      console.log(cookies.Token)
      if (cookies.Token == undefined || cookies.Token == "undefined" ) {
        setLogged(false);
        return;
      }else{
        setLogged(true)
      }
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);
  const Logout = () => {
    setIsDropdownOpen(false);
    removeCookie("Token");
    setLogged(false)
  };

  return (
    <header className="p-3 bg-[black] text-white">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between">
          <Link to="/" className="text-white text-decoration-none mb-0">
            <h1 className="text-3xl font-semibold m-0">
              Movie<span className="font-bold text-red-600">Mini</span>
            </h1>
          </Link>

          {logged ? (
            <div className="relative">
              <button
                className="text-white font-semibold cursor-pointer"
                onClick={toggleDropdown}
              >
                My Account
              </button>
              {isDropdownOpen && (
                <ul className="absolute top-full right-0 mt-2 bg-white text-small text-black rounded-md shadow-md w-[150px] text-center z-10">
                  <li className="dropdown-item">
                    <Link
                      to="/newcelebrity"
                      className="block py-2 px-4 hover:bg-gray-200"
                    >
                      Add Celebrity
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to="/newmovie"
                      className="block py-2 px-4 hover:bg-gray-200"
                    >
                      Add Movie
                    </Link>
                  </li>
                  <li className="dropdown-divider"></li>
                  <li className="dropdown-item">
                    <Link
                      to="/"
                      className="block py-2 px-4 hover:bg-gray-200"
                      onClick={Logout}>
                      <span className="pl-2">Log Out</span>
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <div className="mr-5">
              <button
                type="button"
                className="btn btn-outline-light me-2 mr-10"
                onClick={()=>navigate("/login")}
              >
                Login
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={()=>navigate("/signup")}
              >
                Sign-up
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
