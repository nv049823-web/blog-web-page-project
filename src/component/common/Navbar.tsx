import { IoIosSearch } from "react-icons/io";
import { RiLayoutHorizontalLine } from "react-icons/ri";
import { TbLayout2 } from "react-icons/tb";

const Navbar = () => {

  return (
    <nav className="bg-white text-white px-6 py-2 shadow-md shadow-gray-300 sticky top-0 z-100">
        <div className="row h-full">
          <div className="col-sm-3"></div>
          <div className="col-sm-6">
            <div className="row h-full">
              <div className="col-sm-4 flex justify-start items-center">
                <button className="flex justify-center items-center pt-1"><span><TbLayout2 className="text-gray-400 text-2xl" /></span></button>
              </div>
              <div className="col-sm-4 flex justify-center items-center">
               <p className="bold text-gray-400 no-underline flex justify-center items-center w-full p-0 m-1">
                <span className="text-red-400 text-4xl"><RiLayoutHorizontalLine/></span>
                <span className="text-gray-400 no-underline font-extrabold">News10</span></p>
              </div>
              <div className="col-sm-4 flex justify-end items-center">
                <button className="bg-red-100 p-1  rounded"><span className="text-gray-400  text-xl"><IoIosSearch/></span></button>
              </div>
            </div>
          </div>
          <div className="col-sm-3"></div>
        </div>
        {/* Mobile Icon
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button> */}

      {/* Mobile Menu */}
      {/* {open && (
        <div className="md:hidden mt-4 flex flex-col gap-4 bg-zinc-900 p-4 rounded-xl">
          <p className="hover:text-blue-400">Home</p>
          <p className="hover:text-blue-400">About</p>
          <p className="hover:text-blue-400">Services</p>
          <p className="hover:text-blue-400">Contact</p>

          <button className="bg-blue-500 py-2 rounded-lg hover:bg-blue-600">
            Login
          </button>
        </div>
      )} */}
    </nav>
  );
};

export default Navbar;
