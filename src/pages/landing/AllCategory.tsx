import { Link } from "react-router-dom";
import TopCategaries from "../../component/common/TopCategaries";

const AllCategory = () => {
  return (
    <>
    <TopCategaries/>
    <div className="container-fluid my-5">
      <div className="row h-full">
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
          <div className="row h-80px">
            <div className="col-sm-6">
            <h5 className='fs-bold p-2 text-nowrap m-0 mb-2'>All Category</h5>
            </div>
            <div className="col-sm-6"></div>
          </div>
          <div className="row h-full g-3">
            <div className="col-sm-4 p-2 border-box">
            <div className="rounded rounded-5  relative box-border w-[100%] mx-2 h-[260px]
                bg-[url(https://designing-world.com/news10-v2.0/img/bg-img/10.jpg)] bg-center bg-cover bg-no-repeat object-cover">
                    <div className=' top-0 h-full w-full bg-indigo-950/30 
                rounded rounded-5  backdrop-invert backdrop-opacity-10 flex justify-start items-end' >
                <Link to="#" className="btn rounded rounded-5 btn-danger  p-0 p-2 mb-2 ms-2 text-small ">People</Link>
                </div>
                </div>
            </div>
            <div className="col-sm-4 p-2 border-box">
            <div className="rounded rounded-5  relative box-border w-[100%] mx-2 h-[260px]
                bg-[url(https://designing-world.com/news10-v2.0/img/bg-img/10.jpg)] bg-center bg-cover bg-no-repeat object-cover">
                    <div className=' top-0 h-full w-full bg-indigo-950/30 
                rounded rounded-5  backdrop-invert backdrop-opacity-10 flex justify-start items-end' >
                <Link to="#" className="btn rounded rounded-5 btn-danger  p-0 p-2 mb-2 ms-2 text-small ">People</Link>
                </div>
                </div>
            </div>
            <div className="col-sm-4 p-2 border-box">
            <div className="rounded rounded-5  relative box-border w-[100%] mx-2 h-[260px]
                bg-[url(https://designing-world.com/news10-v2.0/img/bg-img/10.jpg)] bg-center bg-cover bg-no-repeat object-cover">
                    <div className=' top-0 h-full w-full bg-indigo-950/30 
                rounded rounded-5  backdrop-invert backdrop-opacity-10 flex justify-start items-end' >
                <Link to="#" className="btn rounded rounded-5 btn-danger  p-0 p-2 mb-2 ms-2 text-small ">People</Link>
                </div>
                </div>
            </div>
            <div className="col-sm-4 p-2 border-box">
            <div className="rounded rounded-5  relative box-border w-[100%] mx-2 h-[260px]
                bg-[url(https://designing-world.com/news10-v2.0/img/bg-img/10.jpg)] bg-center bg-cover bg-no-repeat object-cover">
                    <div className=' top-0 h-full w-full bg-indigo-950/30 
                rounded rounded-5  backdrop-invert backdrop-opacity-10 flex justify-start items-end' >
                <Link to="#" className="btn rounded rounded-5 btn-danger  p-0 p-2 mb-2 ms-2 text-small ">People</Link>
                </div>
                </div>
            </div>
            <div className="col-sm-4 p-2 border-box">
            <div className="rounded rounded-5  relative box-border w-[100%] mx-2 h-[260px]
                bg-[url(https://designing-world.com/news10-v2.0/img/bg-img/10.jpg)] bg-center bg-cover bg-no-repeat object-cover">
                    <div className=' top-0 h-full w-full bg-indigo-950/30 
                rounded rounded-5  backdrop-invert backdrop-opacity-10 flex justify-start items-end' >
                <Link to="#" className="btn rounded rounded-5 btn-danger  p-0 p-2 mb-2 ms-2 text-small ">People</Link>
                </div>
                </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3"></div>
        </div>
        </div>    
    </>
  );
}

export default AllCategory;
