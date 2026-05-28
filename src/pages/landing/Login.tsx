import { Link } from "react-router-dom";
import UserLoginForm from "../../component/common/UserLoginForm";

const Login = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row h-full">
            <div className="col-sm-3"></div>
            <div className="col-sm-6">
                <div className="container flex justify-center items-center w-full h-[150px] p-2 my-4">
                    <img src="https://designing-world.com/news10-v2.0/img/bg-img/12.png" alt="" className="h-full w-30%"  />
                </div>
                <h5 className="text-center bold mb-4">Welcome Back!</h5>
                <div className="container-fluid px-5">
                   <UserLoginForm/>
                   <small className="inline-block w-full text-center mt-2 hover:text-orange-700"><Link to="#" className="text-black no-underline">Forget Password?</Link></small>
                   <small className="inline-block w-full text-gray-500 text-center hover:text-orange-700">Didn't have an account? <Link to={"/register"} className="text-black no-underline">Register</Link></small>
                </div>
            </div>
            <div className="col-sm-3"></div>
        </div>
      </div>
    </>
  );
}

export default Login;
