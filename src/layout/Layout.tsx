import { Sidebar } from "lucide-react";
import { useState } from "react";


const Layout = ({children}: {children: any}) => {
    const [open,setOpen]=useState(true)
  return (
    <>
      <div className="container-fluid h-auto">
        <div className="row" style={{minHeight:"400px"}}>
            <div className={open?"col-sm-2 p-0":"col-sm-0 p-0"} style={{transition:"all 0.5s"}}>
                <Sidebar open={open}/>
            </div>
            <div className={open?"col-sm-10 bg-black":"col-sm-12 bg-black"} style={{transition:"all 0.5s"}}>
            <div className="container-fliud p-0 m-0">{children}</div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
