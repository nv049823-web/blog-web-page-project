const TrendingNewsCard = () => {
  return (
    <>
<div className="h-full p-2 row">
        <div className="col-sm-2 p-2">
            <img src="https://designing-world.com/news10-v2.0/img/bg-img/11.jpg" alt="" className="h-full w-full img-fluid rounded" />
        </div>
        <div className="col-sm-10">
            <div className="flex justify-center content-center flex-wrap h-full ">
            <a className="w-full text-nowrap m-0 mb-1 link-underline link-underline-opacity-0 text-black hover:text-orange-500 truncate" href="#">Swimming is good exercise for the body</a>
            <div className="w-full flex justify-start items-center">
                <a href="" className="bg-green-700  rounded hover:bg-black text-white p-1 text-small w-[80px] text-center h-[25px] link-underline link-underline-opacity-0">Sporst</a>
                 <span className="bg-gray-600 rounded-circle h-[6px] w-[6px] ms-3 me-3" ></span>
                  <p className="text-gray-600 text-small flex justify-start m-0 hover:text-orange-800">02 Jun 24</p>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrendingNewsCard;
