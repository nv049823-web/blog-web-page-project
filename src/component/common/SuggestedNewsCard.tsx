import { IoBookmarkOutline } from "react-icons/io5";

const SuggestedNewsCard = () => {
  return (
    <>
      <div className="suggest-card relative">
        <img src="https://designing-world.com/news10-v2.0/img/bg-img/18.jpg" alt="" className="img img-fluid rounded rounded-3"/>
     <div className="h-full w-full bg-black/30 absolute top-0 start-0 rounded rounded-3 flex justify-start items-center flex-wrap">
        <div className="h-[20%] w-full flex justify-end items-center p-2"><button><span className="text-white"><IoBookmarkOutline/></span></button></div>
        <div className="h-[80%] w-full flex justify-start content-end flex-wrap">
            <p className="text-yellow-400 uppercase text-small hover:curser-pointer fw-bold px-3 w-full m-0 flex items-center text-nowrap">Health</p>
            <a className="text-white no-underline text-wrap hover-underline text-sm fs-bold w-full p-3 pt-1" href="#">Lemon is useful to lose weight</a>
        </div>
     </div>
      </div>
    </>
  );
}

export default SuggestedNewsCard;
