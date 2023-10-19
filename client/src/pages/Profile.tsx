import { useAppSelector } from "../hooks/useRedux";
import { RootState } from "../store/store";

const Profile = () => {
  const user = useAppSelector((state: RootState) => state)
  console.log('PROFILE PAGE', user);


  return (
    <div className="w-full h-screen bg-[#1a1a1a] text-white flex justify-center items-center">
      <h2 className="text-3xl">User Profile page</h2>
      <p> Hello {user.userData.firstName} {user.userData.lastName}</p>
    </div>
  );
}

export default Profile;
