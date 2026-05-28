import TrendingNewsCard from "./TrendingNewsCard";

const TrendingNews = () => {
  return (
    <>
     <div className="container">    <div className="row my-5 ">
    <div className="col-sm-3"></div>
    <div className="col-sm-6 box-border">
        <div className="row ">
            <div className="col-sm-3 flex justify-start items-center">
                <h5 className='bold p-2 no-wrap m-0'>Trending</h5>
            </div>
            <div className="col-sm-6"></div>
            <div className="col-sm-3 flex justify-end items-center">
               <button className="bg-orange-700  float-right rounded hover:bg-black text-white p-1 text-small w-[80px] text-nowrap">View All</button>
            </div>
        </div>
        <div className="row min-h-[250px] box-border">
            <div className="col-sm-12 box-border mb-1">
                <div className="rounded bg-red-100  relative box-border p-1 mb-2">
                  <TrendingNewsCard/>
                </div>
                <div className="rounded bg-red-100  relative box-border p-1 mb-2">
                  <TrendingNewsCard/>
                </div>
                <div className="rounded bg-red-100  relative box-border p-1 mb-2">
                  <TrendingNewsCard/>
                </div>
            </div>
           
        </div>
    </div>
    <div className="col-sm-3"></div>
   </div></div>
    </>
  );
}

export default TrendingNews;
