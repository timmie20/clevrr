import { useNavigate } from "react-router-dom"

const GetstartedBtn = () => {
  const navigate = useNavigate()
  return (
    <button className="px-[30px] py-[10px] bg-customPink text-white rounded-full text-center "
    onClick={() => navigate('/login')}>Get Started</button>
  )
}

export default GetstartedBtn