import TopRatedNewsCard from "./TopRatedNewsCard";

const TopRatedNews = () => {
  return (
    <>
      <div className="container-fluid bg-red-100">
        <div className="row">
            <div className="col-sm-3"></div>
            <div className="col-sm-6 p-4">
                <div className="min-h-[40px] w-full flex items-center justify-stretch rounded bg-white mb-4">
                      <div className=" p-0 m-0  flex-grow rounded">
                        <button className="rounded w-full h-[40px] flex items-center justify-stretch bg-orange-700 inline-block text-white">Newest</button>
                      </div>
                      <div className=" p-0 m-0 bg-blue-900 flex-grow rounded">
                        <button className="rounded w-full h-[40px] flex items-center justify-stretch bg-orange-700 inline-block text-white">Popular</button>
                      </div>
                      <div className=" p-0 m-0 bg-blue-900 flex-grow rounded">
                        <button className="rounded w-full h-[40px] flex items-center justify-stretch bg-orange-700 inline-block text-white">Featured</button>
                      </div>
                     
                </div>
                <div className="row min-h-[200px] box-border">
            <div className="col-sm-12 box-border mb-1">
                <div className="rounded bg-white  relative box-border mb-2">
                  <TopRatedNewsCard/>
                </div>
                <div className="rounded bg-white  relative box-border mb-2">
                  <TopRatedNewsCard/>
                </div>
                <div className="rounded bg-white  relative box-border mb-2">
                  <TopRatedNewsCard/>
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

export default TopRatedNews;
