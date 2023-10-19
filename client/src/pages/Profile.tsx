import { useAppSelector } from "../hooks/useRedux";
import { RootState } from "../store/store";

const Profile = () => {
  const user = useAppSelector((state: RootState) => state.userData);

  return (
    <div className="w-full h-screen bg-[#1a1a1a] text-white flex justify-center items-center">
      <h2 className="text-3xl"> Profile page - Hello {user.firstName} {user.lastName}</h2>
    </div>
  );
}

export default Profile;
