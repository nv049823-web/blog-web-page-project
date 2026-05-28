import { BsFillLightningChargeFill } from "react-icons/bs";
import { MdAppRegistration } from "react-icons/md";
import { RiLoginCircleLine } from "react-icons/ri";
import { TbHome2, TbLayout2 } from "react-icons/tb";
import { Link } from "react-router-dom";

const Menubar = () => {
  return (
    <div className="container-fluid flex  justify-between items-center fixed bottom-0 left-0 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
      <div className="w-[20%] h-full flex  justify-center items-center">
        <Link to="/home" className=" inline-block w-[70%]  text-center"><span className="flex  justify-center items-center text-gray-700 fs-4 menu-link h-[60px] box-border"><TbHome2/></span></Link>
      </div>
      <div className="w-[20%] h-full flex  justify-center items-center">
        <Link to="/all-category" className=" inline-block w-[70%]  text-center"><span className="flex  justify-center items-center text-gray-700 fs-4 menu-link h-[60px] box-border"><TbLayout2/></span></Link>
      </div>
      <div className="w-[20%] h-full flex  justify-center items-center">
        <Link to="/trending-news" className=" inline-block w-[70%]  text-center"><span className="flex  justify-center items-center text-gray-700 fs-4 menu-link h-[60px] box-border"><BsFillLightningChargeFill/></span></Link>
      </div>
      <div className="w-[20%] h-full flex  justify-center items-center">
        <Link to="/login" className=" inline-block w-[70%]  text-center"><span className="flex  justify-center items-center text-gray-700 fs-4 menu-link h-[60px] box-border"><RiLoginCircleLine/></span></Link>
      </div>
      <div className="w-[20%] h-full flex  justify-center items-center">
        <Link to="/register" className=" inline-block w-[70%]  text-center"><span className="flex  justify-center items-center text-gray-700 fs-4 menu-link h-[60px] box-border"><MdAppRegistration/></span></Link>
      </div>
    </div>
  );
}

export default Menubar;
