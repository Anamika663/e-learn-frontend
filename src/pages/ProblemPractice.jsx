import { useEffect, useState } from "react";
import problems from '../data/problems.js'
import Box from '../components/Box.jsx'

export default function Practice() {
    

  const[hide,setHide] = useState(false);
  const[id,setId] = useState(4);

  const handleListing = ((e)=>{
    // setId(e.target.id)
    console.log(e.target.id);
    setId(e.target.id);
    
  })

  useEffect(()=>{
    toggle();
  },[id])
  
  const toggle = ()=>{
     setHide(!hide);
  }



  return (
    <div className="flex min-h-screen">
      
      {/* Side Navbar */}
      <aside className="w-64 bg-gray-800 text-gray-200 p-4 space-y-3 start-2">
        <h2 className="text-xl font-bold mb-4">Problems</h2>
        <ul className="space-y-2">
          <li><div  
            onClick={toggle}
          className="hover:text-white cursor-pointer border rounded border-gray-500 text-red-100  flex pl-5">Datastructure and Algo</div></li>
          <div className={`min-h-32 in-w-48 flex flex-col pl-5 gap-y-1  text-sm ${!hide && "hidden"}`}>

          {/* <div className="text-white cursor-pointer " id="0"  
           onClick={handleListing}
          >
             School
          </div> */}

          <div className="text-white cursor-pointer hover:bg-yellow-100 hover:text-black rounded-xl max-w-32 pl-8" id="1"
          onClick={handleListing}
          >
              Easy
          </div>

          <div className="text-white cursor-pointer hover:bg-yellow-100 hover:text-black rounded-xl max-w-32 pl-8" id="2"
          onClick={handleListing}
          >
              medium
          </div>

          <div className="text-white cursor-pointer hover:bg-yellow-100 hover:text-black rounded-xl max-w-32 pl-8" id="3"
          onClick={handleListing}
          >
              hard
          </div>
          <div className="text-white cursor-pointer hover:bg-yellow-100 hover:text-black rounded-xl max-w-32 pl-8" id="4"
          onClick={handleListing}
          >
              All
          </div>
          

        </div>
        </ul>
        
      </aside>

      <main className="flex-1 bg-gray-900 text-white p-6 flex flex-col gap-y-2 ">
        {problems.map((item, index) => (
    (id == 4 || id == item.id) &&  (<div key={index}>
      <Box
        content={item.content}
        difc={item.difc}
        link={item.link}
      />
    </div>)
  ))}
      </main>
    </div>
  );
}
