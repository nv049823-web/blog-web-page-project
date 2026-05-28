import { IoBookmarkOutline } from "react-icons/io5";
import { MdOutlineShield } from "react-icons/md";

const EditorialChoice = () => {
  return (
    <>
      <div className=" min-h-[200px] bg-[#202545] p-5">
        <div className="row w-full min-h-[200px]">
            <div className="col-sm-3">
                <div className="h-full w-full bg-[url(https://designing-world.com/news10-v2.0/img/core-img/edito2.png)] bg-center bg-cover bg-no-repeat">
                </div>
            </div>
            <div className="col-sm-6">
                      <div className="container  pb-2 flex justify-center items-center flex-wrap">
                        <span className="w-full text-4xl text-warning flex justify-center items-center"><MdOutlineShield className=""/></span>
                        <h5 className="text-white">Editorial Choice</h5>
                      </div>
                      <div className="container min-h-[200px]">
                        <div className="row min-h-[320px]">
                        <div className="col-sm-5">
                            <div className=" rounded rounded-4 bg-[url(https://designing-world.com/news10-v2.0/img/bg-img/6.jpg)] w-[100%] h-full bg-center bg-cover bg-no-repeat p-2">
                                <p className="w-[35px] h-[35px] rounded-circle text-white bg-danger flex justify-center items-center"><IoBookmarkOutline/></p>
                            </div>
                        </div>
                        <div className="col-sm-7">
                            <div className="w-full h-full">
                            <div className="w-full m-0 p-0"> 
                                <a href="" className="bg-green-700 mt-1 rounded rounded-5 hover:bg-orange-500 text-white p-1 px-4 text-small fw-bold w-[120px] text-center h-[25px] link-underline link-underline-opacity-0">Sporst</a>
                            </div>
                             <a className="text-yellow-500  text-white no-underline  text-wrap " href="#">We are the responsible for environment pollution</a>
                             <div className="w-full flex justify-start items-center mt-2">
                <p  className="hover:text-orange-500 text-gray-600  text-small text-center w-auto m-0 flex justify-start content-center">Sporst</p>
                 <span className="bg-gray-600 rounded-circle h-[6px] w-[6px] ms-3 me-3" ></span>
                  <p className="text-gray-600 text-small flex justify-start m-0 hover:text-orange-500 text-nowrap">02 Jun 24</p>
          </div>
                           <div className="bg-red h-[220px]  flex justify-start items-end">
                                  <div className="flex justify-between items-center w-[20%]" >
                                          <div className="rounded-circle h-[9px] w-[9px] bg-gray-600 hover:cursor-pointer hover:bg-yellow-500"></div>
                                          <div className="rounded-circle h-[9px] w-[9px] bg-gray-600 hover:cursor-pointer hover:bg-yellow-500"></div>
                                          <div className="rounded-circle h-[9px] w-[9px] bg-gray-600 hover:cursor-pointer hover:bg-yellow-500"></div>
                                          <div className="rounded-circle h-[9px] w-[9px] bg-gray-600 hover:cursor-pointer hover:bg-yellow-500"></div>
                                         
                                  </div>
                           </div>
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

export default EditorialChoice;
