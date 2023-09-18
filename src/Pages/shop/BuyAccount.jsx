import { async } from "@firebase/util";
import { getAuth } from "firebase/auth";
import { doc, getDocs } from "firebase/firestore";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../context/AuthContext";

const BuyAccount = () => {
  const { usersCollectionRef, logout } = useContext(userContext);
  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();
  const email = user.email;

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1>welcome,{user === true ? email : null}</h1>
      <p className="text-5xl m-[3em]">this is the shop for all accounts</p>
      <button className="border-2 border-red-500" onClick={handleLogout}>
        log out
      </button>
    </div>
  );
};
export default BuyAccount;
