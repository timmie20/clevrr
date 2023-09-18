import { useNavigate } from "react-router-dom";

const GetstartedBtn = () => {
  const navigate = useNavigate();
  return (
    <button
      className="px-[50px] py-[15px] bg-customPink text-white rounded-lg text-center hover:bg-[#87acec] hover:font-[700] duration-100 "
      onClick={() => navigate("/login")}
    >
      Get Started
    </button>
  );
};

export default GetstartedBtn;
