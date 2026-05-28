
const PosterSection = () => {
  return (
   <>
  <div className="container"> <div className="row">
    <div className="col-sm-3"></div>
    <div className="col-sm-6 box-border">
        <div className="row">
            <div className="col-sm-3">
                <h5 className='bold p-2 text-nowrap'>News Today</h5>
            </div>
            <div className="col-sm-6"></div>
            <div className="col-sm-3">
                <p className='bold p-2 mt-1 text-gray-500 float-right box-border text-nowrap'>Friday, 22 May</p>
            </div>
        </div>
        <div className="row h-[250px] box-border">
            <div className="col-sm-12 box-border">
                <div className="rounded rounded-5 h-full relative box-border">
                <div className='h-full w-full bg-[url(https://designing-world.com/news10-v2.0/img/bg-img/4.jpg)] rounded rounded-5
                p-1 bg-center bg-cover bg-no-repeat box-border'></div>
                <div className='absolute top-0 h-full w-full bg-indigo-950/30 rounded rounded-5  backdrop-invert backdrop-opacity-10' ></div>
                </div>
            </div>
        </div>
    </div>
    <div className="col-sm-3"></div>
   </div></div>
   </>
  );
}

export default PosterSection;
