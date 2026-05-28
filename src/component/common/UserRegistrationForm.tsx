import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { CgProfile } from "react-icons/cg";
import { TbCircleKey } from "react-icons/tb";
import * as yup from "yup"

const UserRegistrationForm = () => {
    const schema = yup.object().shape({
          name:yup.string().required("Name is Required").min(2).max(30),
          email:yup.string().required("Email is Required").email().max(30),
          password:yup.string().min(2).max(20).matches(/^(?=.*[a-zA-Z])(?=.*\d)/,"Password should be contain number and letters").required("Password is Required"),
        
    })
    const {register,handleSubmit,reset,formState:{errors}} = useForm({resolver:yupResolver(schema)})
    const onSubmit = (data:any)=>{
          console.log(data)
    }
  return (
    <>
    <form action="" className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="relative m-0">
        <input type="text" className="w-full bg-red-100 rounded text-small text-gray-500 mb-3 p-3" placeholder="Name" {...register("name")}/>
        <span className="text-orange-700 absolute top-[25%] right-4 "><CgProfile/></span>
        </div>
        {errors?.name?.message??<small style={{color:"red",margin:"0",fontSize:"12px"}}>{errors?.name?.message}</small>}
        <div className="relative m-0">
        <input type="email" className="w-full bg-red-100 rounded text-small text-gray-500 mb-3 p-3" placeholder="Email" {...register("email")}/>
        <span className="text-orange-700 absolute top-[25%] right-4 "><CgProfile/></span>
        </div>
        {errors?.email?.message??<small style={{color:"red",margin:"0",fontSize:"12px"}}>{errors?.email?.message}</small>}
        <div className="relative">
        <input type="password" className="w-full bg-red-100 rounded text-small text-gray-500 mb-3 p-3" placeholder="Password" {...register("password")}/>
        <span className="text-orange-700 absolute top-[25%] right-4 "><TbCircleKey/></span>
        </div>
        {errors?.password?.message??<small style={{color:"red",margin:"0",fontSize:"12px"}}>{errors?.password?.message}</small>}
        <input type="submit" className="w-full bg-orange-700 rounded text-white p-3  hover:bg-black" value="Register"/>
    </form>
        
    </>
  );
}

export default UserRegistrationForm;
