import { Link } from "react-router-dom";

const TopCategaries = () => {
  return (
    <>
    <div className="container-fluid 
     relative flex justify-between items-center mt-5 h-[25vw] bg-orange-200 py-4">
        <p className="text-md font-bold -rotate-90" >TOP CATEGARIES</p>
     <div className="w-[60%] mx-auto h-full">
     <div
  id="carouselExampleAutoplaying"
  className="carousel slide h-full"
  data-bs-ride="carousel"
>
  <div className="carousel-inner h-full">
    <div className="carousel-item active h-full">
    <div className="flex animate-slide whitespace-nowrap h-full relative w-full">
                <div className="rounded rounded-5 h-full relative box-border w-[30%] mx-2
                bg-[url(https://designing-world.com/news10-v2.0/img/bg-img/10.jpg)] bg-center bg-cover bg-no-repeat object-cover">
                    <div className=' top-0 h-full w-full bg-indigo-950/30 
                rounded rounded-5  backdrop-invert backdrop-opacity-10 flex justify-start items-end' >
                <Link to="#" className="btn rounded rounded-5 btn-danger  p-0 p-2 mb-2 ms-2 text-small ">People</Link>
                </div>
                </div>
                <div className="rounded rounded-5 h-full relative box-border w-[30%] mx-2
                bg-[url(https://designing-world.com/news10-v2.0/img/bg-img/10.jpg)] bg-center bg-cover bg-no-repeat object-cover">
                    <div className=' top-0 h-full w-full bg-indigo-950/30 
                rounded rounded-5  backdrop-invert backdrop-opacity-10 flex justify-start items-end' >
                <Link to="#" className="btn rounded rounded-5 btn-danger text-white p-0 p-2 mb-2 ms-2 text-small">People</Link>
                </div>
                </div>
                <div className="rounded rounded-5 h-full relative box-border w-[30%] mx-2
                bg-[url(https://designing-world.com/news10-v2.0/img/bg-img/10.jpg)] bg-center bg-cover bg-no-repeat object-cover">
                    <div className=' top-0 h-full w-full bg-indigo-950/30 
                rounded rounded-5  backdrop-invert backdrop-opacity-10 flex justify-start items-end' >
                <Link to="#" className="btn rounded rounded-5 btn-danger text-white p-0 p-2 mb-2 ms-2 text-small">People</Link>
                </div>
                </div>
                
            </div>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..." />
    </div>
  </div>
  
</div>

     </div>
    </div>
   
    </>
  );
}

export default TopCategaries;

