import axios, {AxiosError} from "axios";
import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks/useRedux";
import { RootState } from "../store/store";

const Navbar = () => {
  // const[isLogged, setLoginStatus] = useState(false)
  const user = useAppSelector((state: RootState) => state.userData);

  const handleLogout = async () => {
    await axios
      .post("/users/v1/logout")
      .then(() => {
        localStorage.removeItem("token");
        window.location.href = '/login';
      })
      .catch((error: AxiosError) => {
        console.log("Something went wrong", error);
      });
  }

  // don't work
  // if (user)  setLoginStatus(true);

  return (
    <nav className="flex justify-around p-3 borber-b border-zinc-800 items-center bg-[#1a1a1a]/90 text-zinc-300">
      <Link to="/">
        <h1 className="text-3xl">Auth</h1>
      </Link>
      {user.firstName ?
      (
        <ul className="flex gap-6">
        <Link to="/profile">
          <li> My Profile </li>
        </Link>
        <button onClick={handleLogout}>Logout</button>
        </ul>
      )
       :
      (
        <ul className="flex gap-6">
        <Link to="/login">
          <li> Login </li>
        </Link>
        <Link to="/signup">
          <li> Sign Up </li>
        </Link>
      </ul>
      )
       }
    </nav>
  );
};

export default Navbar;
