import SuggestedNewsCard from "./SuggestedNewsCard";

const SuggestedNews = () => {
  return (
    <>
      <div className="container min-h-[250px] mb-3">
              <div className="row min-h-[250px]">
                <div className="col-sm-3"></div>
                <div className="col-sm-6">
                <div className="row mt-4 mb-2">
            <div className="col-sm-3 flex justify-start items-center">
                <h5 className='bold p-2 text-nowrap m-0'>For You</h5>
            </div>
            <div className="col-sm-6"></div>
            <div className="col-sm-3 flex justify-end items-center">
               <button className="bg-orange-700  float-right rounded hover:bg-black text-white p-1 text-small w-[80px] text-nowrap">View All</button>
            </div>

        </div>
        <div className="min-h-[300px]">
        <div className="row h-[full] g-3">
            <div className="col-sm-4"><SuggestedNewsCard/>
</div>
            <div className="col-sm-4"><SuggestedNewsCard/></div>
            <div className="col-sm-4"><SuggestedNewsCard/></div>
            <div className="col-sm-4"><SuggestedNewsCard/></div>
        </div>
        </div>
                </div>
                <div className="col-sm-3"></div>
              </div>
      </div>
    </>
  );
}

export default SuggestedNews;
