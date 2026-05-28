

const TopRatedNewsCard = () => {
  return (
    <>
      <div className="h-full  row">
        <div className="col-sm-2 p-3 ps-4">
            <img src="https://designing-world.com/news10-v2.0/img/bg-img/11.jpg" alt="" className="h-full w-full img-fluid rounded rounded-circle" />
        </div>
        <div className="col-sm-10 p-0">
            <div className="flex justify-center content-center flex-wrap h-full ">
            <a className="w-full text-nowrap m-0 mb-1 link-underline link-underline-opacity-0 text-black hover:text-orange-500 truncate" href="#">Swimming is good exercise for the body</a>
            <div className="w-full flex justify-start items-center">
                  <p className="text-gray-600 text-small flex justify-start m-0 hover:text-orange-800">9 min ago</p>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopRatedNewsCard;
