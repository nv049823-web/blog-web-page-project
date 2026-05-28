import { Link } from "react-router-dom";
import UserRegistrationForm from "../../component/common/UserRegistrationForm";

const Registration = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row h-full">
            <div className="col-sm-3"></div>
            <div className="col-sm-6">
                <div className="container flex justify-center items-center w-full h-[150px] p-2 my-4">
                    <img src="https://designing-world.com/news10-v2.0/img/bg-img/12.png" alt="" className="h-full w-30%"  />
                </div>
                <h5 className="text-center bold mb-4">Welcome, Register Now!</h5>
                <div className="container-fluid px-5">
                   <UserRegistrationForm/>
                   <small className="inline-block w-full text-gray-500 text-center mt-2 hover:text-orange-700">Already have an account? <Link to="/login" className="text-black no-underline">Login</Link></small>
                </div>
            </div>
            <div className="col-sm-3"></div>
        </div>
      </div>
    </>
  );
}

export default Registration;
